import { useScrollReveal } from "@/hooks/useScrollReveal";
import AuditCTABlock, { AuditIntroHeader } from "@/components/AuditCTABlock";
import { useLanguage } from "@/contexts/LanguageContext";

type GridColumn = { title: string; items: string[] };

const MechanismSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const grid = getTr("nomos.mechanism.grid") as GridColumn[];

  return (
    <section ref={ref} id="mechanism" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("nomos.mechanism.title")}
          <br />
          {t("nomos.mechanism.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("nomos.mechanism.intro")}</p>

        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="font-display text-xl text-n-teal mb-4">{t("nomos.mechanism.driftName")}</h3>
          <p className="text-n-text">{t("nomos.mechanism.driftDefinition")}</p>
        </div>

        <div className="space-y-4 text-n-muted">
          <p className="reveal">
            {t("nomos.mechanism.p1")}{" "}
            <strong className="text-n-text">{t("nomos.mechanism.p1Strong")}</strong>
          </p>
          <p className="reveal">{t("nomos.mechanism.p2")}</p>
          <p className="reveal">
            {t("nomos.mechanism.p3")}{" "}
            <span className="text-xs text-n-faint">{t("nomos.mechanism.p3Ref")}</span>.{" "}
            {t("nomos.mechanism.p3End")}
          </p>
          <p className="reveal text-n-text">
            <strong>{t("nomos.mechanism.p4")}</strong>
          </p>
        </div>

        <blockquote className="reveal bq-gold">{t("nomos.mechanism.quote")}</blockquote>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 p-8 bg-n-surface-2 border border-n-border rounded-lg">
          {grid.map((col) => (
            <div key={col.title}>
              <h4 className="text-n-teal text-sm font-semibold uppercase tracking-wider mb-3">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-n-muted relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-n-faint"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-n-teal font-medium mt-4">
          {t("nomos.mechanism.gridCta")}
        </p>

        <div className="reveal bg-n-surface-2 border-l-[3px] border-n-gold rounded-r-lg p-8 my-10">
          <p className="text-n-text font-semibold mb-3">{t("nomos.mechanism.calloutTitle")}</p>
          <p className="text-n-muted mb-3">{t("nomos.mechanism.calloutP1")}</p>
          <p className="text-n-muted">{t("nomos.mechanism.calloutP2")}</p>
        </div>

        <div className="mt-16">
          <AuditIntroHeader />
          <AuditCTABlock />
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
