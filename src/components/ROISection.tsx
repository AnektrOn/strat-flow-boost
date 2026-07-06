import { AuditEmailButton } from "@/components/AuditEmailButton";
import { ClinicalPullQuote } from "@/components/sections/ClinicalPullQuote";
import { ClinicalStatDisplay } from "@/components/sections/ClinicalStatDisplay";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type RoiRow = { label: string; value: string };

const ROISection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const rows = getTr("nomos.roi.rows") as RoiRow[];

  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("nomos.roi.title")}</h2>
        <p className="reveal section-intro">{t("nomos.roi.intro")}</p>

        <div className="reveal my-8">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border"
            >
              <span className="font-medium text-sm">{r.label}</span>
              <span className="text-sm text-n-muted text-right">{r.value}</span>
            </div>
          ))}
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2"
            style={{ background: "hsl(var(--color-teal-glow))" }}
          >
            <span className="font-semibold text-sm text-n-teal">{t("nomos.roi.roiLabel")}</span>
            <span className="text-sm text-n-teal text-right font-semibold">{t("nomos.roi.roiValue")}</span>
          </div>
        </div>

        <ClinicalStatDisplay
          value={t("nomos.roi.roiValue")}
          label={t("nomos.roi.roiLabel")}
          detail={t("nomos.roi.footnote")}
        />

        <p className="reveal font-display text-xl text-center my-10">
          <strong>{t("nomos.roi.question")}</strong>
        </p>

        <ClinicalPullQuote>{t("nomos.roi.quote")}</ClinicalPullQuote>

        <div className="reveal text-center mt-8">
          <AuditEmailButton
            protocol="nomos"
            className="inline-block border border-n-gold-dim text-n-gold px-6 py-3 rounded text-sm font-medium hover:bg-n-gold/10 hover:border-n-gold transition-colors"
          >
            {t("nomos.roi.cta")}
          </AuditEmailButton>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
