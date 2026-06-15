import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type GuaranteeVariant = "nomos" | "ascension" | "metaphysique" | "aegis";

const GuaranteeSection = ({ variant = "nomos" }: { variant?: GuaranteeVariant }) => {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  const prefix = `common.guarantee.${variant}`;
  const borderClass =
    variant === "ascension"
      ? "border-n-gold-warm"
      : variant === "metaphysique" || variant === "aegis"
        ? "border-n-gold/60"
        : "border-n-teal";

  return (
    <section
      ref={ref}
      id="guarantee"
      className={`section-pad text-center bg-n-surface border-y ${borderClass}`}
    >
      <div className="container-nomos narrow">
        <span className="reveal eyebrow block mb-4">{t("common.guarantee.eyebrow")}</span>

        <h2 className="reveal h-section">
          {t(`${prefix}.title`)}
          <br />
          {t(`${prefix}.titleLine2`)}
        </h2>

        <p className="reveal section-intro mx-auto">{t(`${prefix}.p1`)}</p>

        {variant === "metaphysique" || variant === "aegis" ? (
          <p className="reveal section-intro mx-auto">
            {(() => {
              const full = t(`${prefix}.p2`);
              const strong = t(`${prefix}.p2Strong`);
              const parts = full.split(strong);
              if (parts.length === 2) {
                return (
                  <>
                    {parts[0]}
                    <strong className="text-n-text">{strong}</strong>
                    {parts[1]}
                  </>
                );
              }
              return full;
            })()}
          </p>
        ) : (
          <>
            <p className="reveal section-intro mx-auto">{t(`${prefix}.p2`)}</p>
            {variant === "nomos" && (
              <p className="reveal section-intro mx-auto">{t(`${prefix}.p3`)}</p>
            )}
            {variant === "ascension" && (
              <>
                <p className="reveal section-intro mx-auto">{t(`${prefix}.p3`)}</p>
                <p className="reveal section-intro mx-auto">
                  {(() => {
                    const full = t(`${prefix}.p4`);
                    const strong = t(`${prefix}.p4Strong`);
                    const parts = full.split(strong);
                    if (parts.length === 2) {
                      return (
                        <>
                          {parts[0]}
                          <strong>{strong}</strong>
                          {parts[1]}
                        </>
                      );
                    }
                    return full;
                  })()}
                </p>
              </>
            )}
          </>
        )}

        <div className="reveal inline-block p-6 border border-n-border rounded-lg text-left mt-8 max-w-xl mx-auto">
          <p className="text-sm text-n-text mb-2">
            <strong>{t(`${prefix}.riskLabel`)}</strong> {t(`${prefix}.risk`)}
          </p>
          <p className="text-sm text-n-text">
            <strong>{t(`${prefix}.gainLabel`)}</strong> {t(`${prefix}.gain`)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
