import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const OnboardingPage = () => {
  const { t, getTr } = useLanguage();
  const { openAudit } = useEmailDialog();
  usePageMeta("hub");

  const criseDesc = getTr("onboarding.gateway.crise.description") as string[];
  const criseSignals = getTr("onboarding.gateway.crise.signals") as string[];
  const levelUpDesc = getTr("onboarding.gateway.levelUp.description") as string[];
  const levelUpSignals = getTr("onboarding.gateway.levelUp.signals") as string[];
  const aegisDesc = getTr("onboarding.gateway.aegis.description") as string[];
  const aegisSignals = getTr("onboarding.gateway.aegis.signals") as string[];
  const methodItems = getTr("onboarding.method.items") as Array<{ title: string; body: string }>;

  return (
    <div className="overflow-x-hidden min-h-dvh">
      <Header mode="hub" />
      <main>
        <section className="text-center pt-24 pb-12 px-4">
          <div className="container-nomos narrow">
            <span className="reveal eyebrow-bordered mb-8 inline-block">
              {t("onboarding.hero.eyebrow")}
            </span>
            <h1 className="font-display font-normal text-[clamp(2.4rem,1rem+5vw,4.5rem)] leading-tight text-n-text mb-6">
              {t("onboarding.hero.title")}
              <br />
              {t("onboarding.hero.titleLine2")}{" "}
              <em className="italic text-n-gold">{t("onboarding.hero.titleAccent")}</em>
            </h1>
            <p className="text-base text-n-muted max-w-[56ch] mx-auto">{t("onboarding.hero.subtitle")}</p>
          </div>
        </section>

        <section id="gateway" className="section-pad pt-8">
          <div className="container-nomos max-w-[1280px]">
            <p className="gateway-intro text-center text-sm text-n-muted max-w-[52ch] mx-auto mb-2">
              {t("onboarding.gateway.intro")}
            </p>
            <div className="gateway-grid gateway-grid-three">
              <Link
                to="/nomos"
                className="gateway-card gateway-crise"
                aria-label={t("onboarding.gateway.crise.ariaLabel")}
              >
                <div className="gateway-label">{t("onboarding.gateway.crise.label")}</div>
                <h2 className="gateway-title">
                  {t("onboarding.gateway.crise.title")}
                  <br />
                  {t("onboarding.gateway.crise.titleLine2")}
                </h2>
                <p className="gateway-description">
                  {criseDesc.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < criseDesc.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <ul className="gateway-signals">
                  {criseSignals.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="gateway-cta-wrap">
                  <span className="btn-primary btn-large gateway-cta">
                    {t("onboarding.gateway.crise.cta")}
                  </span>
                  <p className="gateway-note">{t("onboarding.gateway.crise.note")}</p>
                </div>
              </Link>

              <Link
                to="/ascension"
                className="gateway-card gateway-levelup"
                aria-label={t("onboarding.gateway.levelUp.ariaLabel")}
              >
                <div className="gateway-label gateway-label-levelup">
                  {t("onboarding.gateway.levelUp.label")}
                </div>
                <h2 className="gateway-title">
                  {t("onboarding.gateway.levelUp.title")}
                  <br />
                  {t("onboarding.gateway.levelUp.titleLine2")}
                </h2>
                <p className="gateway-description">
                  {levelUpDesc.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < levelUpDesc.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <ul className="gateway-signals gateway-signals-levelup">
                  {levelUpSignals.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="gateway-cta-wrap">
                  <span className="btn-primary btn-large gateway-cta">
                    {t("onboarding.gateway.levelUp.cta")}
                  </span>
                  <p className="gateway-note">{t("onboarding.gateway.levelUp.note")}</p>
                </div>
              </Link>

              <Link
                to="/aegis"
                className="gateway-card gateway-aegis"
                aria-label={t("onboarding.gateway.aegis.ariaLabel")}
              >
                <div className="gateway-label gateway-label-aegis">{t("onboarding.gateway.aegis.label")}</div>
                <h2 className="gateway-title">
                  {t("onboarding.gateway.aegis.title")}
                  <br />
                  {t("onboarding.gateway.aegis.titleLine2")}
                </h2>
                <p className="gateway-description">
                  {aegisDesc.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < aegisDesc.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <ul className="gateway-signals gateway-signals-aegis">
                  {aegisSignals.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="gateway-cta-wrap">
                  <span className="btn-primary btn-large gateway-cta gateway-cta-aegis">
                    {t("onboarding.gateway.aegis.cta")}
                  </span>
                  <p className="gateway-note">{t("onboarding.gateway.aegis.note")}</p>
                </div>
              </Link>
            </div>

            <div className="gateway-casestudy-teaser">
              <span className="eyebrow">{t("caseStudies.hubTeaser.eyebrow")}</span>
              <h3 className="gateway-casestudy-title">{t("caseStudies.hubTeaser.title")}</h3>
              <p className="gateway-casestudy-desc">{t("caseStudies.hubTeaser.description")}</p>
              <div className="gateway-casestudy-actions">
                <Link
                  to="/case-studies"
                  className="btn-outline gateway-casestudy-btn"
                  aria-label={t("caseStudies.hubTeaser.ariaLabel")}
                >
                  {t("caseStudies.hubTeaser.cta")}
                </Link>
                <Link to="/case-studies/c" className="gateway-casestudy-link-secondary">
                  {t("caseStudies.hubTeaser.linkC")}
                </Link>
                <Link to="/case-studies/l" className="gateway-casestudy-link-secondary">
                  {t("caseStudies.hubTeaser.linkL")}
                </Link>
                <Link to="/case-studies/h" className="gateway-casestudy-link-secondary">
                  {t("caseStudies.hubTeaser.linkH")}
                </Link>
              </div>
            </div>

            <div className="gateway-doubt">
              <p className="gateway-doubt-text">{t("onboarding.gateway.doubt.text")}</p>
              <p className="gateway-doubt-sub">{t("onboarding.gateway.doubt.sub")}</p>
              <button
                type="button"
                onClick={() => openAudit("hub")}
                className="gateway-doubt-link"
              >
                {t("onboarding.gateway.doubt.link")}
              </button>
            </div>
          </div>
        </section>

        <section className="section-pad section-dark pt-16 pb-16">
          <div className="container-nomos narrow text-center">
            <span className="eyebrow">{t("onboarding.method.eyebrow")}</span>
            <h2 className="h-section mt-4">{t("onboarding.method.title")}</h2>
            <p className="section-intro mx-auto">{t("onboarding.method.intro")}</p>
            <div className="reassure-grid">
              {methodItems.map((item) => (
                <div key={item.title} className="reassure-item">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="hub" />
    </div>
  );
};

export default OnboardingPage;
