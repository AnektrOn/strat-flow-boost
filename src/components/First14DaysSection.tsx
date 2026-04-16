import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const First14DaysSection = () => {
  const { t, tr } = useLanguage();
  const notFor = tr.first14.notFor;

  return (
    <section className="section-dark py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-up">
          <span className="label-gold mb-8 block">{t("first14.label")}</span>
          <h2 className="heading-main mb-12">
            {t("first14.title")}
            <br />
            <span className="gold-accent">{t("first14.titleAccent")}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-16">
            {notFor.map((item, i) => (
              <div key={i} className={`bg-white/5 p-6 border-gold-left animate-fade-up animate-fade-up-delay-${i + 1}`}>
                <p className="text-base font-light">✗ {item}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-body-light mb-12 animate-fade-up animate-fade-up-delay-5">
            <p>{tr.first14.p1}<span className="gold-accent">{tr.first14.p1Accent}</span>{tr.first14.p1End}</p>
            <p>{tr.first14.p2}<span className="gold-accent">{tr.first14.p2Accent}</span>{tr.first14.p2End}</p>
            <p className="opacity-50">{tr.first14.p3}</p>
            <p className="opacity-50">{tr.first14.p4}</p>
          </div>

          <a href="#access" className="cta-link group animate-fade-up animate-fade-up-delay-6">
            <span>{t("first14.cta")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default First14DaysSection;
