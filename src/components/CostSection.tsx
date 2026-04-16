import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CostSection = () => {
  const { t, tr } = useLanguage();
  const triedItems = tr.cost.tried;
  const costItems = tr.cost.costItems;
  const driftCosts = tr.cost.driftCosts;

  return (
    <section id="cost" className="section-dark py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 animate-fade-up">
            <span className="label-gold mb-8 block">{t("cost.label")}</span>
            <h2 className="heading-main mb-8">
              {t("cost.title")} <span className="gold-accent">{t("cost.titleAccent")}</span>
            </h2>
            <div className="space-y-3 mb-8">
              {triedItems.map((item, i) => (
                <div key={i} className="bg-white/5 p-4 border-gold-left">
                  <p className="text-sm font-light opacity-60">✗ {item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-body-light">
              <p>{tr.cost.andYet}</p>
              <p>
                {tr.cost.notEffort}
                <br />
                {tr.cost.systemCharge}
                <br />
                {tr.cost.whenPressure}
                <br />
                <span className="gold-accent">{tr.cost.bullet1}</span>
                <br />
                <span className="gold-accent">{tr.cost.bullet2}</span>
                <br />
                <span className="gold-accent">{tr.cost.bullet3}</span>
                <br />
              </p>
              <p>
                {tr.cost.noSolutions}
                <br />
                <span className="gold-accent">{tr.cost.archNotSupport}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="animate-fade-up animate-fade-up-delay-2">
              <h3 className="text-xl font-light mb-6 uppercase tracking-widest gold-accent">
                {t("cost.costTitle")}
              </h3>
              <p className="text-sm font-light opacity-50 mb-6">
                {tr.cost.costP1}
                <br />
                {tr.cost.costP2}
                <span className="gold-accent">{tr.cost.costP2Accent}</span>
                <br />
                <br />
                {tr.cost.costP3}
                <br />
                <span className="gold-accent">{tr.cost.costP3Accent}</span>
              </p>
              <p className="text-sm font-light opacity-50 mb-4">
                {tr.cost.costP4}
                <br />
                {tr.cost.costP5}
              </p>
              <div className="space-y-3">
                {costItems.map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 border-gold-left">
                    <p className="text-sm font-light opacity-70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up animate-fade-up-delay-3">
              <p className="text-sm font-light opacity-50 mb-4">{tr.cost.driftP1}</p>
              <p className="text-sm font-light opacity-50 mb-4">{tr.cost.driftP2}</p>
              <p className="text-sm font-light opacity-50 mb-4">{tr.cost.driftP3}</p>
              <div className="space-y-2 mb-6">
                {driftCosts.map((item, i) => (
                  <div key={i} className="border-gold-left pl-6 py-2">
                    <p className="text-sm font-light opacity-60">• {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 border-l-2 border-gold animate-fade-up animate-fade-up-delay-4">
              <p className="gold-accent text-lg font-light mb-4">{tr.cost.boxTitle}</p>
              <p className="text-sm font-light opacity-60 mb-4">{tr.cost.boxP1}</p>
              <p className="text-sm font-light opacity-60 mb-4">
                {tr.cost.boxP2}
                <br />
                <span className="gold-accent">{tr.cost.boxP2Accent}</span>
              </p>
              <p className="text-sm font-light opacity-50">{tr.cost.boxP3}</p>
            </div>

            <div className="mt-4 animate-fade-up animate-fade-up-delay-5">
              <a href="#access" className="cta-link group">
                <span>{t("cost.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;
