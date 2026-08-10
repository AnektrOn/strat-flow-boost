import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeUp } from "@/components/motion/FadeUp";

type PublicReview = {
  id: string;
  full_name: string;
  activity: string | null;
  role_title: string | null;
  program_name: string | null;
  program_period: string | null;
  rating: number;
  headline: string | null;
  body: string;
};

const COPY = {
  fr: {
    eyebrow: "Paroles de clients",
    title: "Ce qu'en disent les dirigeants accompagnés",
    empty: "Les premiers retours seront publiés ici après modération.",
  },
  en: {
    eyebrow: "Client voices",
    title: "What the founders we worked with say",
    empty: "The first reviews will appear here once moderated.",
  },
} as const;

const ClientReviewsSection = () => {
  const { locale } = useLanguage();
  const c = COPY[locale] ?? COPY.fr;
  const [reviews, setReviews] = useState<PublicReview[]>([]);

  useEffect(() => {
    let active = true;
    supabase
      .from("client_reviews")
      .select("id, full_name, activity, role_title, program_name, program_period, rating, headline, body")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(6)
      .then(({ data }) => {
        if (active && data) setReviews(data as PublicReview[]);
      });
    return () => {
      active = false;
    };
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="client-reviews" className="section-pad pt-16 relative">
      <div className="container-nomos max-w-[1080px] relative">
        <FadeUp className="text-center">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="h-section mt-4">{c.title}</h2>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 mt-12">
          {reviews.map((r) => (
            <FadeUp key={r.id}>
              <article className="h-full border border-n-border rounded-lg p-6 bg-n-surface flex flex-col">
                <div className="flex items-center gap-0.5 mb-4" aria-label={`${r.rating}/5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-3.5 h-3.5 ${
                        n <= r.rating ? "fill-n-gold text-n-gold" : "text-n-border"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
                {r.headline && (
                  <p className="font-display text-lg text-n-text mb-3 leading-snug">
                    “{r.headline}”
                  </p>
                )}
                <p className="text-sm text-n-muted whitespace-pre-line flex-1">{r.body}</p>
                <footer className="mt-6 pt-4 border-t border-n-border">
                  <p className="text-sm text-n-text font-semibold">{r.full_name}</p>
                  <p className="text-xs text-n-faint">
                    {[r.role_title, r.activity].filter(Boolean).join(" · ")}
                  </p>
                  {(r.program_name || r.program_period) && (
                    <p className="text-xs text-n-faint mt-1">
                      {[r.program_name, r.program_period].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </footer>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
