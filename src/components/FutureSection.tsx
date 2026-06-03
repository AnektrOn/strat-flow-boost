import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type NarrativeLine = { emphasis?: boolean; text: string };

const FutureSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const narrative = getTr("nomos.future.narrative") as NarrativeLine[];

  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.future.title")}
          <br />
          {t("nomos.future.titleLine2")}
        </h2>

        <div className="my-10 space-y-4">
          {narrative.map((line) => (
            <p
              key={line.text}
              className={`reveal ${line.emphasis ? "text-n-text font-medium" : "text-n-muted"}`}
            >
              {line.text}
            </p>
          ))}
        </div>

        <div className="reveal mt-10 p-8 bg-n-surface border border-n-border rounded-lg">
          <p className="text-n-text mb-3">
            <strong>{t("nomos.future.metricsTitle")}</strong>
          </p>
          <p className="text-n-muted">{t("nomos.future.metricsBody")}</p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
