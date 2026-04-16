import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AscensionBlockSection = () => {
  const { t, tr } = useLanguage();
  const asc = tr.ascension;

  return (
    <section id="ascension" className="section-dark py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 animate-fade-up">
            <span className="label-gold mb-4 block">{t("ascension.homeLabel")}</span>
            <h2 className="heading-main mb-4">
              {t("ascension.title")}
            </h2>
            <p className="text-body-light mb-6">{asc.homeIntro}</p>
            <div className="text-4xl md:text-5xl font-light gold-accent mb-2">{t("ascension.price")}</div>
            <p className="text-sm font-light opacity-40">{t("ascension.onSelection")}</p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 p-8 border-gold-left animate-fade-up animate-fade-up-delay-2">
              <div className="space-y-3 text-sm font-light opacity-80 uppercase tracking-widest">
                {asc.homeLines.map((line, i) => (
                  <p key={i} className="gold-accent">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-xs font-light opacity-40">
                — {t("ascension.selection")}
              </p>
            </div>
            <div className="mt-6 animate-fade-up animate-fade-up-delay-3">
              <a href="#access" className="cta-link group inline-flex">
                <span>{t("ascension.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AscensionBlockSection;
