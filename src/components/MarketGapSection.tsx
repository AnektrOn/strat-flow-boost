import { useLanguage } from "@/contexts/LanguageContext";

const MarketGapSection = () => {
  const { t, tr } = useLanguage();

  return (
    <section id="market-gap" className="section-dark py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="max-w-4xl mb-24 animate-fade-up">
          <span className="label-gold mb-8 block">{t("marketGap.label")}</span>
          <h2 className="heading-main mb-8">
            {t("marketGap.title")}
            <br />
            <span className="gold-accent">{t("marketGap.titleAccent")}</span>
          </h2>
          <p className="text-body-light">
            {tr.marketGap.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("marketGap.block1Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.marketGap.block1P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.marketGap.block1Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
            <p className="text-sm opacity-50 mt-4 font-light">
              {tr.marketGap.block1But}
            </p>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("marketGap.block2Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.marketGap.block2P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.marketGap.block2Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
            <p className="text-sm opacity-50 mt-4 font-light">
              {tr.marketGap.block2But}
            </p>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("marketGap.block3Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.marketGap.block3P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.marketGap.block3Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
            <p className="text-sm opacity-50 mt-4 font-light">
              {tr.marketGap.block3But}
            </p>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("marketGap.block4Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.marketGap.block4P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.marketGap.block4Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
            <p className="text-sm opacity-50 mt-4 font-light">
              {tr.marketGap.block4But}
            </p>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("marketGap.block5Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.marketGap.block5P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.marketGap.block5Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
            <p className="text-sm opacity-50 mt-4 font-light">
              {tr.marketGap.block5But}
            </p>
          </div>

        </div>

        <div className="max-w-3xl mt-24 animate-fade-up">
          <p className="text-lg font-light opacity-70 leading-relaxed">
            {tr.marketGap.closing}
          </p>
        </div>

      </div>
    </section>
  );
};

export default MarketGapSection;
