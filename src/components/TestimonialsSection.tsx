import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type TestimonialResult = {
  role: string;
  metric: string;
  profile: string;
  metrics: Array<{ num: string; label: string }>;
  note: string;
};

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const results = getTr("nomos.testimonials.results") as TestimonialResult[];

  return (
    <section ref={ref} id="proof" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.testimonials.title")}
          <br />
          {t("nomos.testimonials.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("nomos.testimonials.intro")}</p>

        {results.map((item) => (
          <div key={item.role} className="reveal border border-n-border rounded-lg p-8 mb-8">
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <span className="font-semibold text-sm">{item.role}</span>
              <span className="text-xs text-n-muted">{item.metric}</span>
            </div>
            <p className="text-sm text-n-muted mb-6">
              <strong className="text-n-text">{t("nomos.testimonials.profileLabel")}</strong> {item.profile}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {item.metrics.map((r) => (
                <div key={r.label} className="text-center p-4 bg-n-surface-2 rounded">
                  <span className="block text-xl font-bold text-n-teal leading-tight">{r.num}</span>
                  <span className="text-xs text-n-muted">{r.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-n-faint italic mt-4">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
