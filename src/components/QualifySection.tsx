import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type QualifyVariant = "nomos" | "ascension" | "metaphysique" | "aegis";

const QualifySection = ({ variant = "nomos" }: { variant?: QualifyVariant }) => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const prefix = `common.qualify.${variant}`;
  const noItems = getTr(`${prefix}.no`) as string[];
  const yesItems = getTr(`${prefix}.yes`) as string[];
  const yesTitleClass = variant === "nomos" ? "text-n-teal" : "text-n-gold-warm";

  return (
    <section ref={ref} id="qualify" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {variant === "nomos" ? (
            t(`${prefix}.title`)
          ) : variant === "metaphysique" || variant === "aegis" ? (
            <>
              {t(`${prefix}.title`)}
              <br />
              {t(`${prefix}.titleLine2`)}
            </>
          ) : (
            <>
              {t(`${prefix}.title`)}
              <br />
              {t(`${prefix}.titleLine2`)}
            </>
          )}
        </h2>

        {(variant === "metaphysique" || variant === "aegis") && (
          <p className="reveal section-intro mt-4">{t(`${prefix}.intro`)}</p>
        )}

        <div className="reveal grid md:grid-cols-2 gap-8 my-10">
          <div>
            <h3 className="font-body text-lg font-semibold text-n-faint mb-4">
              {t("common.qualify.noLabel")}
            </h3>
            <ul className="flex flex-col gap-3">
              {noItems.map((li) => (
                <li
                  key={li}
                  className="text-sm text-n-muted pl-6 relative before:content-['✕'] before:absolute before:left-0 before:text-n-faint"
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="qualify-yes">
            <h3 className={`font-body text-lg font-semibold mb-4 ${yesTitleClass}`}>
              {t("common.qualify.yesLabel")}
            </h3>
            <ul className="flex flex-col gap-3">
              {yesItems.map((li) => (
                <li
                  key={li}
                  className={`text-sm text-n-muted pl-6 relative before:content-['✓'] before:absolute before:left-0 ${
                    variant === "nomos" ? "before:text-n-teal" : "before:text-n-gold-warm"
                  }`}
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {variant === "nomos" && (
          <div className="reveal mt-12 p-8 border border-n-gold-dim rounded-lg">
            <h3 className="h-sub text-n-gold mb-3">{t(`${prefix}.hesitation.title`)}</h3>
            <p className="text-n-muted mb-3">{t(`${prefix}.hesitation.p1`)}</p>
            <p className="text-n-muted mb-3">{t(`${prefix}.hesitation.p2`)}</p>
            <p className="text-n-muted">
              {(() => {
                const full = t(`${prefix}.hesitation.p3`);
                const strong = t(`${prefix}.hesitation.p3Strong`);
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
          </div>
        )}
        {(variant === "metaphysique" || variant === "aegis") && (
          <div className="reveal mt-12 p-8 border border-n-gold-dim rounded-lg">
            <h3 className="h-sub text-n-gold mb-3">{t(`${prefix}.hesitation.title`)}</h3>
            <p className="text-n-muted mb-3">{t(`${prefix}.hesitation.p1`)}</p>
            <p className="text-n-muted">
              {(() => {
                const full = t(`${prefix}.hesitation.p2`);
                const strong = t(`${prefix}.hesitation.p2Strong`);
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
          </div>
        )}
      </div>
    </section>
  );
};

export default QualifySection;
