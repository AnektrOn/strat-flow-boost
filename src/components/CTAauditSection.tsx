import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTAauditSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-dark py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <a href="#access" className="cta-link group mb-8 inline-flex">
          <span>{t("ctaAudit.cta")}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </a>
        <div className="mt-8 space-y-2 text-sm font-light opacity-50">
          <p>{t("ctaAudit.youLeave")}</p>
          <p>{t("ctaAudit.item1")}</p>
          <p>{t("ctaAudit.item2")}</p>
        </div>
        <div className="mt-8">
          <p className="label-gold">{t("ctaAudit.selection")}</p>
        </div>
      </div>
    </section>
  );
};

export default CTAauditSection;
