import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const PASSPHRASE = "NOMOS-2026-ARCH";
const GATE_KEY = "nomos-reviews-gate";

type L = "fr" | "en";

const COPY = {
  fr: {
    gateTitle: "Espace privé",
    gateHint: "Entrez la phrase d'accès qui vous a été communiquée.",
    gatePlaceholder: "Phrase d'accès",
    gateCta: "Entrer",
    gateError: "Phrase d'accès incorrecte.",
    title: "Votre retour d'expérience",
    intro:
      "Quelques minutes suffisent. Votre avis est relu avant publication — rien n'apparaît sans validation.",
    fullName: "Votre nom",
    activity: "Votre activité",
    activityPh: "Ex. fondateur d'une agence marketing",
    roleTitle: "Fonction (optionnel)",
    programKind: "Type d'accompagnement",
    kinds: {
      nomos90: "NOMOS 90 jours",
      earlier: "Accompagnement antérieur",
      short: "Format court",
      other: "Autre",
    },
    programName: "Nom du programme",
    programPeriod: "Durée de l'accompagnement",
    programPeriodPh: "Ex. 3 mois, 2024",
    rating: "Note globale",
    evolution: "Évolution perçue",
    evolutionHint: "0 = aucune évolution · 10 = transformation majeure",
    headline: "Phrase clé",
    headlinePh: "Ce que vous retenez en une phrase",
    body: "Votre avis",
    bodyPh: "Ce qui a changé, concrètement.",
    recommend: "À qui le recommandez-vous ?",
    email: "Email (privé, non publié)",
    consent: "J'autorise la publication de cet avis sur le site.",
    submit: "Envoyer mon avis",
    sending: "Envoi…",
    successTitle: "Avis envoyé",
    successBody:
      "Merci. Votre avis passe en modération avant publication : il sera relu puis publié s'il est validé.",
    errorTitle: "Envoi impossible",
    vName: "Le nom doit contenir entre 2 et 120 caractères.",
    vBody: "L'avis doit contenir entre 20 et 4000 caractères.",
    vConsent: "Le consentement à la publication est requis.",
  },
  en: {
    gateTitle: "Private space",
    gateHint: "Enter the passphrase you were given.",
    gatePlaceholder: "Passphrase",
    gateCta: "Enter",
    gateError: "Incorrect passphrase.",
    title: "Your feedback",
    intro:
      "A few minutes is enough. Your review is read before publication — nothing goes live without approval.",
    fullName: "Your name",
    activity: "What you do",
    activityPh: "E.g. founder of a marketing agency",
    roleTitle: "Role (optional)",
    programKind: "Type of engagement",
    kinds: {
      nomos90: "NOMOS 90 days",
      earlier: "Earlier engagement",
      short: "Short format",
      other: "Other",
    },
    programName: "Program name",
    programPeriod: "Length of the engagement",
    programPeriodPh: "E.g. 3 months, 2024",
    rating: "Overall rating",
    evolution: "Perceived evolution",
    evolutionHint: "0 = no change · 10 = major transformation",
    headline: "Key sentence",
    headlinePh: "What you take away, in one sentence",
    body: "Your review",
    bodyPh: "What changed, concretely.",
    recommend: "Who would you recommend it to?",
    email: "Email (private, never published)",
    consent: "I allow this review to be published on the site.",
    submit: "Send my review",
    sending: "Sending…",
    successTitle: "Review sent",
    successBody:
      "Thank you. Your review goes through moderation before publication: it will be reviewed and published if approved.",
    errorTitle: "Could not send",
    vName: "Name must be between 2 and 120 characters.",
    vBody: "Review must be between 20 and 4000 characters.",
    vConsent: "Consent to publication is required.",
  },
} as const;

const inputCls =
  "w-full bg-n-surface border border-n-border rounded px-3 py-2 text-sm text-n-text placeholder:text-n-faint focus:outline-none focus:border-n-gold-dim transition-colors";
const labelCls = "block text-xs uppercase tracking-wider text-n-muted mb-2";

const Reviews = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [pass, setPass] = useState("");
  const [gateError, setGateError] = useState("");
  const [lang, setLang] = useState<L>("fr");
  const c = COPY[lang];

  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    activity: "",
    role_title: "",
    program_kind: "nomos90",
    program_name: "",
    program_period: "",
    rating: 5,
    evolution_score: 7,
    headline: "",
    body: "",
    recommend: "",
    email: "",
    consent_publish: false,
  });

  useEffect(() => {
    document.title = "Client voices";
    try {
      if (localStorage.getItem(GATE_KEY) === PASSPHRASE) setUnlocked(true);
    } catch {
      /* ignore */
    }
  }, []);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const kindOptions = useMemo(
    () => Object.entries(c.kinds) as [keyof typeof c.kinds, string][],
    [c],
  );

  const unlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass.trim() === PASSPHRASE) {
      try {
        localStorage.setItem(GATE_KEY, PASSPHRASE);
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setGateError("");
    } else {
      setGateError(c.gateError);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.full_name.trim();
    const body = form.body.trim();
    if (name.length < 2 || name.length > 120)
      return toast({ title: c.errorTitle, description: c.vName, variant: "destructive" });
    if (body.length < 20 || body.length > 4000)
      return toast({ title: c.errorTitle, description: c.vBody, variant: "destructive" });
    if (!form.consent_publish)
      return toast({ title: c.errorTitle, description: c.vConsent, variant: "destructive" });

    setSending(true);
    const { error } = await supabase.from("client_reviews").insert({
      locale: lang,
      full_name: name,
      activity: form.activity.trim() || null,
      role_title: form.role_title.trim() || null,
      program_kind: form.program_kind,
      program_name: form.program_name.trim() || null,
      program_period: form.program_period.trim() || null,
      rating: form.rating,
      evolution_score: form.evolution_score,
      headline: form.headline.trim() || null,
      body,
      recommend: form.recommend.trim() || null,
      email: form.email.trim() || null,
      consent_publish: form.consent_publish,
    });
    setSending(false);

    if (error) {
      toast({ title: c.errorTitle, description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: c.successTitle, description: c.successBody });
    setForm({
      full_name: "",
      activity: "",
      role_title: "",
      program_kind: "nomos90",
      program_name: "",
      program_period: "",
      rating: 5,
      evolution_score: 7,
      headline: "",
      body: "",
      recommend: "",
      email: "",
      consent_publish: false,
    });
  };

  const LangSwitch = (
    <div className="flex items-center gap-0.5 rounded border border-n-border p-0.5">
      {(["fr", "en"] as L[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-w-[2.25rem] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
            lang === code
              ? "bg-n-gold/15 text-n-gold border border-n-gold-dim rounded-sm"
              : "text-n-muted hover:text-n-text border border-transparent"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={unlock} className="w-full max-w-sm">
          <div className="flex justify-end mb-6">{LangSwitch}</div>
          <h1 className="font-display text-2xl text-n-text mb-2">{c.gateTitle}</h1>
          <p className="text-sm text-n-muted mb-6">{c.gateHint}</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder={c.gatePlaceholder}
            className={inputCls}
            autoFocus
          />
          {gateError && <p className="text-xs text-destructive mt-2">{gateError}</p>}
          <button type="submit" className="btn-pill mt-6">
            <span>{c.gateCta}</span>
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container-nomos narrow max-w-[720px]">
        <div className="flex justify-end mb-8">{LangSwitch}</div>
        <h1 className="font-display text-3xl text-n-text mb-3">{c.title}</h1>
        <p className="text-sm text-n-muted mb-10 max-w-[56ch]">{c.intro}</p>

        <form onSubmit={submit} className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="full_name">
                {c.fullName}
              </label>
              <input
                id="full_name"
                className={inputCls}
                value={form.full_name}
                onChange={(e) => set("full_name", e.target.value)}
                maxLength={120}
                required
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="activity">
                {c.activity}
              </label>
              <input
                id="activity"
                className={inputCls}
                placeholder={c.activityPh}
                value={form.activity}
                onChange={(e) => set("activity", e.target.value)}
                maxLength={200}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="role_title">
                {c.roleTitle}
              </label>
              <input
                id="role_title"
                className={inputCls}
                value={form.role_title}
                onChange={(e) => set("role_title", e.target.value)}
                maxLength={120}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="program_kind">
                {c.programKind}
              </label>
              <select
                id="program_kind"
                className={inputCls}
                value={form.program_kind}
                onChange={(e) => set("program_kind", e.target.value)}
              >
                {kindOptions.map(([k, v]) => (
                  <option key={k} value={k} className="bg-n-surface">
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="program_name">
                {c.programName}
              </label>
              <input
                id="program_name"
                className={inputCls}
                value={form.program_name}
                onChange={(e) => set("program_name", e.target.value)}
                maxLength={160}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="program_period">
                {c.programPeriod}
              </label>
              <input
                id="program_period"
                className={inputCls}
                placeholder={c.programPeriodPh}
                value={form.program_period}
                onChange={(e) => set("program_period", e.target.value)}
                maxLength={120}
              />
            </div>
          </div>

          <div>
            <span className={labelCls}>{c.rating}</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => set("rating", n)}
                  aria-label={`${n}/5`}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      n <= form.rating ? "fill-n-gold text-n-gold" : "text-n-border"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="evolution">
              {c.evolution} — <span className="text-n-gold">{form.evolution_score}/10</span>
            </label>
            <input
              id="evolution"
              type="range"
              min={0}
              max={10}
              step={1}
              value={form.evolution_score}
              onChange={(e) => set("evolution_score", Number(e.target.value))}
              className="w-full accent-[hsl(var(--n-gold))]"
            />
            <p className="text-xs text-n-faint mt-1">{c.evolutionHint}</p>
          </div>

          <div>
            <label className={labelCls} htmlFor="headline">
              {c.headline}
            </label>
            <input
              id="headline"
              className={inputCls}
              placeholder={c.headlinePh}
              value={form.headline}
              onChange={(e) => set("headline", e.target.value)}
              maxLength={180}
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="body">
              {c.body}
            </label>
            <textarea
              id="body"
              className={`${inputCls} min-h-[160px] resize-y`}
              placeholder={c.bodyPh}
              value={form.body}
              onChange={(e) => set("body", e.target.value)}
              maxLength={4000}
              required
            />
            <p className="text-xs text-n-faint mt-1">{form.body.trim().length}/4000</p>
          </div>

          <div>
            <label className={labelCls} htmlFor="recommend">
              {c.recommend}
            </label>
            <textarea
              id="recommend"
              className={`${inputCls} min-h-[80px] resize-y`}
              value={form.recommend}
              onChange={(e) => set("recommend", e.target.value)}
              maxLength={1000}
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="email">
              {c.email}
            </label>
            <input
              id="email"
              type="email"
              className={inputCls}
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              maxLength={255}
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-n-muted cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent_publish}
              onChange={(e) => set("consent_publish", e.target.checked)}
              className="mt-1 accent-[hsl(var(--n-gold))]"
            />
            <span>{c.consent}</span>
          </label>

          <div>
            <button type="submit" className="btn-pill" disabled={sending}>
              <span>{sending ? c.sending : c.submit}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Reviews;
