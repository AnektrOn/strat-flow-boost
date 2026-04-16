import { useLanguage } from "@/contexts/LanguageContext";

const MethodSection = () => {
  const { t, tr } = useLanguage();

  return (
    <section id="method" className="section-light py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="max-w-4xl mb-24 animate-fade-up">
          <span className="label-gold mb-8 block">{t("method.label")}</span>
          <h2 className="heading-main mb-8">
            {t("method.title")}
            <br />
            <span className="gold-accent">{t("method.titleAccent")}</span>
          </h2>
          <p className="text-body-light">
            {tr.method.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("method.block1Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed mb-4">
              {tr.method.block1P}
            </p>
            <div className="space-y-1 text-sm opacity-60 font-light">
              {tr.method.block1Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("method.block2Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed mb-4">
              {tr.method.block2P}
            </p>
            <div className="space-y-1 text-sm opacity-60 font-light">
              {tr.method.block2Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("method.block3Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed mb-4">
              {tr.method.block3P}
            </p>
            <div className="space-y-1 text-sm opacity-60 font-light">
              {tr.method.block3Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="border-gold-left pl-8 py-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">{t("method.block4Title")}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed mb-4">
              {tr.method.block4P}
            </p>
            <div className="space-y-1 text-sm opacity-60 font-light">
              {tr.method.block4Items.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

        </div>

        <div className="max-w-3xl mt-24 animate-fade-up">
          <p className="text-lg font-light opacity-70 leading-relaxed">
            {tr.method.statement}
          </p>
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
