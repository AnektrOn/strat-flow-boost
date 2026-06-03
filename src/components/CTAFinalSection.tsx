import { useScrollReveal } from "@/hooks/useScrollReveal";
import AuditCTABlock from "@/components/AuditCTABlock";
import { useLanguage } from "@/contexts/LanguageContext";

type CtaItem = { title: string; detail: string };

const CTAFinalSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("nomos.ctaFinal.items") as CtaItem[];

  return (
    <section ref={ref} id="audit" className="section-pad text-center">
      <div className="container-nomos">
        <h2 className="reveal h-section">
          {t("nomos.ctaFinal.title")}
          <br />
          {t("nomos.ctaFinal.titleLine2")}
        </h2>

        <p className="reveal section-intro mx-auto">{t("nomos.ctaFinal.intro")}</p>

        <div className="flex flex-col gap-6 my-10 text-left max-w-[560px] mx-auto">
          {items.map((it) => (
            <div key={it.title} className="reveal flex gap-4">
              <span className="text-n-teal text-base shrink-0">⬥</span>
              <p className="text-sm text-n-muted">
                <strong className="text-n-text">{it.title}</strong> — {it.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal guarantee-reminder text-sm text-n-teal mb-8">
          {t("nomos.ctaFinal.guarantee")}
        </p>

        <div className="mb-12">
          <AuditCTABlock />
        </div>

        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>{t("nomos.ctaFinal.placesTitle")}</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">{t("nomos.ctaFinal.placesBody")}</p>
        </div>

        <div className="reveal mt-12 pt-8 border-t border-n-border max-w-lg mx-auto">
          <p className="text-sm text-n-muted mb-3">{t("nomos.ctaFinal.notReady")}</p>
          <p className="text-sm text-n-muted mb-6">
            {(() => {
              const intro = t("nomos.ctaFinal.leadMagnetIntro");
              const title = t("nomos.ctaFinal.leadMagnetTitle");
              const parts = intro.split(title);
              if (parts.length === 2) {
                return (
                  <>
                    {parts[0]}
                    <strong className="text-n-text">{title}</strong>
                    {parts[1]}
                  </>
                );
              }
              return intro;
            })()}
          </p>
          <a href="#" className="btn-outline">
            {t("nomos.ctaFinal.leadMagnetCta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
