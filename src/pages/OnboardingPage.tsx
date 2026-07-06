import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { WordsPullUp, WordsPullUpMultiStyle } from "@/components/motion/WordsPullUp";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { CardEntrance } from "@/components/motion/CardEntrance";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Landing hub — synapse 3D fixe (sphère → dispersion → hélice). */
const OnboardingPage = () => {
  const { t, getTr } = useLanguage();
  const { openAudit } = useEmailDialog();
  const reduced = useReducedMotion();

  usePageMeta("hub");

  const criseDesc = getTr("onboarding.gateway.crise.description") as string[];
  const criseSignals = getTr("onboarding.gateway.crise.signals") as string[];
  const levelUpDesc = getTr("onboarding.gateway.levelUp.description") as string[];
  const levelUpSignals = getTr("onboarding.gateway.levelUp.signals") as string[];
  const methodItems = getTr("onboarding.method.items") as Array<{ title: string; body: string }>;

  const scrollToGateway = () => {
    document.getElementById("gateway")?.scrollIntoView({ behavior: "smooth" });
  };

  const gateways = [
    {
      to: "/nomos",
      number: "01",
      cardClass: "gateway-crise",
      labelClass: "gateway-label",
      signalsClass: "gateway-signals",
      ctaClass: "btn-primary btn-large gateway-cta",
      label: t("onboarding.gateway.crise.label"),
      title: t("onboarding.gateway.crise.title"),
      titleLine2: t("onboarding.gateway.crise.titleLine2"),
      desc: criseDesc,
      signals: criseSignals,
      cta: t("onboarding.gateway.crise.cta"),
      note: t("onboarding.gateway.crise.note"),
      aria: t("onboarding.gateway.crise.ariaLabel"),
      checkClass: "text-n-teal",
    },
    {
      to: "/ascension",
      number: "02",
      cardClass: "gateway-levelup",
      labelClass: "gateway-label gateway-label-levelup",
      signalsClass: "gateway-signals gateway-signals-levelup",
      ctaClass: "btn-primary btn-large gateway-cta",
      label: t("onboarding.gateway.levelUp.label"),
      title: t("onboarding.gateway.levelUp.title"),
      titleLine2: t("onboarding.gateway.levelUp.titleLine2"),
      desc: levelUpDesc,
      signals: levelUpSignals,
      cta: t("onboarding.gateway.levelUp.cta"),
      note: t("onboarding.gateway.levelUp.note"),
      aria: t("onboarding.gateway.levelUp.ariaLabel"),
      checkClass: "text-n-gold-dim",
    },
  ];

  return (
    <div className="overflow-x-hidden min-h-dvh">
      <Header mode="hub" />

      <main className="relative z-10 w-full">
          <section
            id="synapse-hero"
            className="hero-shell hero-shell--underlap h-[100svh] min-h-[520px] sm:min-h-[580px] lg:min-h-[600px]"
          >
            <motion.div
              className="absolute z-10 left-6 sm:left-10"
              style={{ top: "calc(var(--header-clearance-hub) + 0.75rem)" }}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            >
              <span className="eyebrow flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-n-gold animate-pulse" />
                {t("onboarding.hero.eyebrow")}
              </span>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10 z-10">
              <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
                <div className="col-span-12 lg:col-span-8">
                  <WordsPullUp
                    as="h1"
                    text="NOMOS"
                    showAsterisk
                    immediate
                    className="h-giant text-[22vw] sm:text-[21vw] lg:text-[17vw] xl:text-[16vw] select-none"
                  />
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-5 lg:pb-[2vw] mt-1 sm:mt-0">
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  >
                    <h2 className="font-display text-lg sm:text-xl text-n-text leading-snug mb-3">
                      {t("onboarding.hero.title")} {t("onboarding.hero.titleLine2")}{" "}
                      <em className="italic text-n-gold">{t("onboarding.hero.titleAccent")}</em>
                    </h2>
                    <p className="text-xs sm:text-sm text-n-muted leading-[1.4] max-w-[42ch]">
                      {t("onboarding.hero.subtitle")}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
                  >
                    <button type="button" onClick={scrollToGateway} className="btn-pill group">
                      <span>{t("onboarding.hero.cta")}</span>
                      <span className="btn-pill-circle">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section id="synapse-gateway" className="section-pad pt-16 relative">
            <div id="gateway" className="container-nomos max-w-[1280px] relative scroll-mt-24">
              <FadeUp>
                <p className="gateway-intro text-center text-sm text-n-muted max-w-[52ch] mx-auto mb-2">
                  {t("onboarding.gateway.intro")}
                </p>
              </FadeUp>
              <div className="gateway-grid">
                {gateways.map((g, i) => (
                  <CardEntrance key={g.to} index={i}>
                    <Link to={g.to} className={`gateway-card ${g.cardClass} h-full`} aria-label={g.aria}>
                      <div className="flex items-start justify-between">
                        <div className={g.labelClass}>{g.label}</div>
                        <span className="font-display text-sm text-n-faint">{g.number}</span>
                      </div>
                      <h2 className="gateway-title">
                        {g.title}
                        <br />
                        {g.titleLine2}
                      </h2>
                      <p className="gateway-description">
                        {g.desc.map((line, j) => (
                          <span key={line}>
                            {line}
                            {j < g.desc.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      <ul className={g.signalsClass}>
                        {g.signals.map((s) => (
                          <li key={s} className="signal-check flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 mt-1 shrink-0 ${g.checkClass}`} aria-hidden />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="gateway-cta-wrap">
                        <span className={g.ctaClass}>{g.cta}</span>
                        <p className="gateway-note">{g.note}</p>
                      </div>
                    </Link>
                  </CardEntrance>
                ))}
              </div>

              <FadeUp className="gateway-casestudy-teaser">
                <span className="eyebrow">{t("caseStudies.hubTeaser.eyebrow")}</span>
                <h3 className="gateway-casestudy-title">{t("caseStudies.hubTeaser.title")}</h3>
                <p className="gateway-casestudy-desc">{t("caseStudies.hubTeaser.description")}</p>
                <div className="gateway-casestudy-actions">
                  <Link
                    to="/case-studies"
                    className="btn-outline gateway-casestudy-btn group inline-flex items-center gap-2"
                    aria-label={t("caseStudies.hubTeaser.ariaLabel")}
                  >
                    {t("caseStudies.hubTeaser.cta")}
                    <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
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
              </FadeUp>

              <FadeUp className="gateway-doubt">
                <p className="gateway-doubt-text">{t("onboarding.gateway.doubt.text")}</p>
                <p className="gateway-doubt-sub">{t("onboarding.gateway.doubt.sub")}</p>
                <button type="button" onClick={() => openAudit("hub")} className="gateway-doubt-link">
                  {t("onboarding.gateway.doubt.link")}
                </button>
              </FadeUp>
            </div>
          </section>

          <section id="synapse-method" className="section-pad pt-16 pb-20 sm:pb-24 relative">
            <div className="container-nomos narrow text-center relative min-h-[50vh] sm:min-h-0">
              <FadeUp>
                <span className="eyebrow">{t("onboarding.method.eyebrow")}</span>
              </FadeUp>
              <WordsPullUpMultiStyle
                as="h2"
                className="h-section mt-4"
                segments={[{ text: t("onboarding.method.title") as string }]}
              />
              <ScrollRevealText
                text={t("onboarding.method.intro") as string}
                className="section-intro mx-auto"
              />
              <div className="reassure-grid">
                {methodItems.map((item, i) => (
                  <CardEntrance key={item.title} index={i} className="reassure-item">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </CardEntrance>
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
