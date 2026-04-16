import { useLanguage } from "@/contexts/LanguageContext";

const AegisSection = () => {
  const { t, tr } = useLanguage();

  return (
    <section id="aegis" className="section-dark py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="max-w-4xl mb-24 animate-fade-up">
          <span className="label-gold mb-8 block">{t("aegis.label")}</span>
          <h2 className="heading-main mb-8">
            {t("aegis.title")}
            <br />
            <span className="gold-accent">{t("aegis.titleAccent")}</span>
          </h2>
          <p className="text-body-light">
            {tr.aegis.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block1Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block1P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block1Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block2Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block2P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block2Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block3Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block3P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block3Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block4Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block4P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block4Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block5Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block5P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block5Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("aegis.block6Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed">
              {tr.aegis.block6P}
            </p>
            <div className="space-y-1 text-sm opacity-60 mt-4 font-light">
              {tr.aegis.block6Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

        </div>

        <div className="max-w-3xl mt-24 animate-fade-up">
          <p className="text-lg font-light opacity-70 leading-relaxed">
            {tr.aegis.closing}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AegisSection;
