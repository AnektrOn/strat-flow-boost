import { useLanguage } from "@/contexts/LanguageContext";

const TargetSection = () => {
  const { t, tr } = useLanguage();
  const forYou = tr.target.forYouItems;
  const notForYou = tr.target.notForYouItems;

  return (
    <section id="target" className="section-light py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <div className="lg:col-span-5 animate-fade-up">
            <span className="label-gold mb-8 block">{t("target.label")}</span>

            <h2 className="heading-main mb-8">
              {t("target.title")}
              <br />
              <span className="gold-accent">{t("target.titleAccent")}</span>
            </h2>

            <p className="text-body-light mb-6">
              {tr.target.p1}
              <br />
              {tr.target.p2}
            </p>

            <p className="text-body-light mb-6">
              {tr.target.p3}
              <br />
              {tr.target.p4}
            </p>

            <div className="space-y-2 mt-4 mb-6">
              {tr.target.bullets.map((item, i) => (
                <div key={i} className="border-gold-left pl-6 py-2">
                  <p className="text-sm font-light opacity-70">• {item}</p>
                </div>
              ))}
            </div>

            <p className="text-body-light opacity-70">
              {tr.target.andNotVisible}
              <br />
              {tr.target.becauseCompensate}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">

            <div className="animate-fade-up animate-fade-up-delay-2">
              <p className="text-sm font-light opacity-50 mb-4">
                {tr.target.notLevel}
              </p>

              <p className="text-sm font-light opacity-50 mb-4">
                {tr.target.mechanism}
                <br />
                {tr.target.mechanism2}
              </p>

              <div className="space-y-2">
                {tr.target.compenseBullets.map((item, i) => (
                  <div key={i} className="border-gold-left pl-6 py-2">
                    <p className="text-sm font-light opacity-70">• {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 border-gold-left animate-fade-up animate-fade-up-delay-3">
              <p className="text-lg font-light mb-4 gold-accent">
                {tr.target.invisibleTitle}
              </p>

              <p className="text-sm font-light opacity-60 mb-4">
                {tr.target.invisibleP1}
                <br />
                {tr.target.invisibleP2}
              </p>

              <p className="text-sm font-light opacity-60 mb-4">
                {tr.target.invisibleP3}
              </p>

              <p className="text-sm font-light opacity-60">
                {tr.target.invisibleP4}
              </p>
            </div>

            <div className="bg-white/5 p-8 border-gold-left animate-fade-up animate-fade-up-delay-4">
              <p className="text-sm font-light opacity-60 mb-4">
                {tr.target.atMoment}
              </p>

              <div className="space-y-2">
                {tr.target.momentBullets.map((item, i) => (
                  <p key={i} className="text-sm font-light opacity-70">
                    • {item}
                  </p>
                ))}
              </div>

              <p className="mt-4 text-sm font-light gold-accent">
                {tr.target.limitLine}
                <br />
                {tr.target.limitLine2}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 animate-fade-up animate-fade-up-delay-5">
              <div className="bg-white/5 p-6 border-gold-left">
                <h4 className="text-sm uppercase tracking-widest gold-accent mb-4">{t("target.forYou")}</h4>
                <div className="space-y-2">
                  {forYou.map((item, i) => (
                    <p key={i} className="text-sm font-light opacity-60">
                      ✔ {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 border-gold-left">
                <h4 className="text-sm uppercase tracking-widest opacity-50 mb-4">{t("target.notForYou")}</h4>
                <div className="space-y-2">
                  {notForYou.map((item, i) => (
                    <p key={i} className="text-sm font-light opacity-60">
                      ✗ {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
