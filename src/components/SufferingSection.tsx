import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type SufferingLevel = {
  tag: string;
  paragraphs: string[];
  quote?: string;
  quoteAttribution?: string;
};

const SufferingSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const levels = getTr("nomos.suffering.levels") as SufferingLevel[];

  return (
    <section ref={ref} id="suffering" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.suffering.title")}
          <br />
          {t("nomos.suffering.titleLine2")}
        </h2>
        <div className="flex flex-col gap-10 mt-8 text-n-muted">
          {levels.map((level) => (
            <div key={level.tag} className="reveal border-l-2 border-n-border pl-6">
              <span className="block font-semibold text-sm uppercase tracking-wider text-n-gold mb-3">
                {level.tag}
              </span>
              {level.paragraphs.map((p) => (
                <p key={p} className="mb-3 last:mb-0">
                  {p}
                </p>
              ))}
              {level.quote && (
                <blockquote className="bq">{level.quote}</blockquote>
              )}
              {level.quoteAttribution && (
                <p className="italic text-n-muted text-sm mt-2">{level.quoteAttribution}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SufferingSection;
