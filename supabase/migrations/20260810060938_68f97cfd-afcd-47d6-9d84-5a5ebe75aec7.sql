CREATE TABLE public.client_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  locale text NOT NULL DEFAULT 'fr',
  full_name text NOT NULL,
  activity text,
  role_title text,
  program_kind text,
  program_name text,
  program_period text,
  rating smallint NOT NULL DEFAULT 5,
  evolution_score smallint,
  headline text,
  body text NOT NULL,
  recommend text,
  email text,
  consent_publish boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  approved boolean NOT NULL DEFAULT false,
  approved_at timestamptz,
  reviewed_at timestamptz,
  moderation_note text
);

GRANT INSERT, SELECT ON public.client_reviews TO anon;
GRANT INSERT, SELECT ON public.client_reviews TO authenticated;
GRANT ALL ON public.client_reviews TO service_role;

ALTER TABLE public.client_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a review"
  ON public.client_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (approved = false AND approved_at IS NULL);

CREATE POLICY "Approved reviews are public"
  ON public.client_reviews FOR SELECT
  TO anon, authenticated
  USING (approved = true);

CREATE OR REPLACE FUNCTION public.validate_client_review()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.status := 'pending';
  NEW.approved := false;
  NEW.approved_at := NULL;
  NEW.reviewed_at := NULL;
  NEW.moderation_note := NULL;

  NEW.full_name := btrim(NEW.full_name);
  NEW.body := btrim(NEW.body);
  NEW.email := NULLIF(btrim(coalesce(NEW.email, '')), '');
  NEW.headline := NULLIF(btrim(coalesce(NEW.headline, '')), '');
  NEW.activity := NULLIF(btrim(coalesce(NEW.activity, '')), '');
  NEW.role_title := NULLIF(btrim(coalesce(NEW.role_title, '')), '');
  NEW.program_name := NULLIF(btrim(coalesce(NEW.program_name, '')), '');
  NEW.program_period := NULLIF(btrim(coalesce(NEW.program_period, '')), '');
  NEW.recommend := NULLIF(btrim(coalesce(NEW.recommend, '')), '');

  IF char_length(NEW.full_name) < 2 OR char_length(NEW.full_name) > 120 THEN
    RAISE EXCEPTION 'invalid full_name';
  END IF;
  IF NEW.rating IS NULL OR NEW.rating < 1 OR NEW.rating > 5 THEN
    RAISE EXCEPTION 'invalid rating';
  END IF;
  IF NEW.evolution_score IS NOT NULL AND (NEW.evolution_score < 0 OR NEW.evolution_score > 10) THEN
    RAISE EXCEPTION 'invalid evolution_score';
  END IF;
  IF char_length(NEW.body) < 20 OR char_length(NEW.body) > 4000 THEN
    RAISE EXCEPTION 'invalid body';
  END IF;
  IF NEW.email IS NOT NULL AND char_length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'invalid email';
  END IF;
  IF NEW.locale NOT IN ('fr', 'en') THEN
    NEW.locale := 'fr';
  END IF;
  IF NEW.program_kind IS NULL OR NEW.program_kind NOT IN ('nomos90', 'earlier', 'short', 'other') THEN
    NEW.program_kind := 'other';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_client_review_before_insert
  BEFORE INSERT ON public.client_reviews
  FOR EACH ROW EXECUTE FUNCTION public.validate_client_review();

CREATE OR REPLACE FUNCTION public.sync_client_review_status()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    NEW.reviewed_at := now();
    IF NEW.status = 'approved' THEN
      NEW.approved := true;
      NEW.approved_at := now();
    ELSE
      NEW.approved := false;
      NEW.approved_at := NULL;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER sync_client_review_status_before_update
  BEFORE UPDATE ON public.client_reviews
  FOR EACH ROW EXECUTE FUNCTION public.sync_client_review_status();

CREATE INDEX client_reviews_approved_idx ON public.client_reviews (approved, created_at DESC);