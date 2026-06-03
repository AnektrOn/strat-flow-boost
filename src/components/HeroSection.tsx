import { AuditEmailButton } from "@/components/AuditEmailButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-[85vh] flex items-center text-center pt-32 pb-20"
    >
      <div className="container-nomos narrow w-full">
        <h1 className="reveal h-hero mb-6">
          {t("nomos.hero.title")}
          <br />
          <em>{t("nomos.hero.titleAccent")}</em>
        </h1>
        <p className="reveal reveal-delay-1 text-base text-n-muted max-w-[56ch] mx-auto mb-4">
          {t("nomos.hero.subtitle")}
        </p>
        <p className="reveal reveal-delay-1 text-base text-n-teal font-medium mb-8">
          {t("nomos.hero.promise")}
        </p>
        <div className="reveal reveal-delay-2 mb-6">
          <AuditEmailButton protocol="nomos" className="btn-primary">
            {t("nomos.hero.cta")}
          </AuditEmailButton>
        </div>
        <p className="reveal reveal-delay-3 text-xs text-n-faint tracking-wider">
          {t("nomos.hero.footnote")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
