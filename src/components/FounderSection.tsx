import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderSection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("nomos.founder.title")}</h2>

        <div className="space-y-4 text-n-muted">
          <p className="reveal">{t("nomos.founder.p1")}</p>
          <p className="reveal">{t("nomos.founder.p2")}</p>
          <p className="reveal">{t("nomos.founder.p3")}</p>
          <p className="reveal">
            <strong className="text-n-text">{t("nomos.founder.obs1Label")}</strong> {t("nomos.founder.obs1")}
          </p>
          <p className="reveal">
            <strong className="text-n-text">{t("nomos.founder.obs2Label")}</strong> {t("nomos.founder.obs2")}
          </p>
          <p className="reveal">{t("nomos.founder.p4")}</p>
          <p className="reveal">
            {(() => {
              const full = t("nomos.founder.p5");
              const strong = t("nomos.founder.p5Strong");
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

          <div className="reveal flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold shrink-0">
              {t("nomos.founder.initial")}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-n-text">{t("nomos.founder.name")}</div>
              <div className="text-n-muted">{t("nomos.founder.role")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
