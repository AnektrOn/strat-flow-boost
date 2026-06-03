import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const SymptomsSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("nomos.symptoms.items") as Array<{ title: string; detail?: string }>;

  return (
    <section ref={ref} id="symptoms" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.symptoms.title")}
          <br />
          {t("nomos.symptoms.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("nomos.symptoms.intro")}</p>

        <div className="flex flex-col gap-8 my-10">
          {items.map((s, i) => (
            <div key={i} className="reveal">
              <p className="font-semibold text-base mb-2">{s.title}</p>
              {s.detail && <p className="text-n-muted text-sm">{s.detail}</p>}
            </div>
          ))}
        </div>

        <blockquote className="reveal bq-gold">{t("nomos.symptoms.quote")}</blockquote>

        <p className="reveal text-base text-n-muted mt-8">{t("nomos.symptoms.closing")}</p>
      </div>
    </section>
  );
};

export default SymptomsSection;
