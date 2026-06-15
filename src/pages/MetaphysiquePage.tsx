import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import GuaranteeSection from "@/components/GuaranteeSection";
import QualifySection from "@/components/QualifySection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AuditEmailButton } from "@/components/AuditEmailButton";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSideNavLayout from "@/components/PageSideNavLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

type SignItem = { title: string; detail: string };
type ProtocolLayer = {
  num: string;
  title: string;
  sub: string;
  paragraphs: string[];
  result: string;
};
type NarrativeLine = { emphasis?: boolean; text: string };
type RoiSectionItem = { title: string; body: string };
type FaqItem = { q: string; a: string };
type CtaItem = { title: string; detail: string };

function SplitStrong({ full, strong, className }: { full: string; strong: string; className?: string }) {
  const parts = full.split(strong);
  if (parts.length === 2) {
    return (
      <>
        {parts[0]}
        <strong className={className ?? "text-n-text"}>{strong}</strong>
        {parts[1]}
      </>
    );
  }
  return <>{full}</>;
}

const MetaphysiquePage = () => {
  const { getTr, t, locale } = useLanguage();
  usePageMeta("metaphysique");

  const introLines = useMemo(() => {
    const lines = getTr("metaphysique.intro.lines") as string[];
    return lines.map((line) => line.toUpperCase());
  }, [getTr, locale]);

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [introFadingOut, setIntroFadingOut] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setIsIntroComplete(false);
    setIntroFadingOut(false);
    setShowMainPage(false);
  }, [locale]);

  useEffect(() => {
    if (showMainPage || isIntroComplete) return;

    if (lineIndex >= introLines.length) {
      setIsIntroComplete(true);
      return;
    }

    const line = introLines[lineIndex];
    const lineDone = charIndex >= line.length;
    let delay = 55;

    if (lineDone) {
      delay = Math.min(2800, 1800 + line.length * 10);
    } else {
      const char = line[charIndex];
      if (/[.?!]/.test(char)) delay = 420;
      else if (/[,;:]/.test(char)) delay = 200;
      else if (char === " ") delay = 45;
    }

    const timer = window.setTimeout(() => {
      if (lineDone) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        return;
      }
      setCharIndex((prev) => prev + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, introLines, isIntroComplete, lineIndex, showMainPage]);

  useEffect(() => {
    if (!isIntroComplete || showMainPage) return;

    const fadeTimer = window.setTimeout(() => setIntroFadingOut(true), 700);
    const revealTimer = window.setTimeout(() => setShowMainPage(true), 1200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(revealTimer);
    };
  }, [isIntroComplete, showMainPage]);

  const skipIntro = useCallback(() => {
    setIsIntroComplete(true);
    setIntroFadingOut(true);
    window.setTimeout(() => setShowMainPage(true), 300);
  }, []);

  if (!showMainPage) {
    return (
      <div
        className={`min-h-dvh bg-black text-white relative overflow-hidden flex items-center justify-center px-6 py-14 transition-opacity duration-500 ${
          introFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={skipIntro}
          aria-label={t("metaphysique.intro.skipAria")}
          className="absolute bottom-6 right-6 z-20 rounded border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:bottom-8 sm:right-8"
        >
          {t("metaphysique.intro.skip")}
        </button>
        <p
          className="relative z-10 w-full max-w-[702px] min-h-[128px] text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[0.12em]"
          style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
          aria-label={t("metaphysique.intro.ariaLabel")}
        >
          {(introLines[lineIndex] ?? "").slice(0, charIndex)}
          {!isIntroComplete && (
            <span className="ml-2 inline-block w-[0.08em] align-middle text-white/90 animate-pulse" aria-hidden="true">
              |
            </span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="ascension-theme overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="metaphysique" />
      <main>
        <PageSideNavLayout page="metaphysique" hero={<MetaphysiqueHero />}>
          <MetaphysiqueConstat />
          <MetaphysiqueSignes />
          <MetaphysiqueMechanism />
          <MetaphysiqueProtocol />
          <MetaphysiqueFuture />
          <MetaphysiqueProof />
          <MetaphysiqueFounder />
          <MetaphysiqueRoi />
          <GuaranteeSection variant="metaphysique" />
          <QualifySection variant="metaphysique" />
          <MetaphysiqueFaq />
          <MetaphysiqueCta />
        </PageSideNavLayout>
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>
              <em>{t("common.crossLink.metaphysique.prompt")}</em>
            </p>
            <Link to="/nomos">{t("common.crossLink.metaphysique.linkCrisis")}</Link>
            <span className="mx-3 text-n-faint">{t("common.crossLink.metaphysique.separator")}</span>
            <Link to="/ascension">{t("common.crossLink.metaphysique.linkLevelUp")}</Link>
          </div>
        </section>
      </main>
      <Footer variant="metaphysique" />
      <MobileCTABar variant="metaphysique" />
    </div>
  );
};

function MetaphysiqueHero() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="hero" className="min-h-[85vh] flex items-center text-center pt-32 pb-20">
      <div className="container-nomos narrow w-full">
        <span className="reveal eyebrow-bordered mb-8 inline-block">{t("metaphysique.hero.eyebrow")}</span>
        <h1 className="reveal h-hero mb-6">
          {t("metaphysique.hero.title")}
          <br />
          <em>{t("metaphysique.hero.titleAccent")}</em>
        </h1>
        <p className="reveal section-intro mx-auto">{t("metaphysique.hero.intro")}</p>
        <p className="reveal text-base text-n-gold-warm font-medium mb-8">{t("metaphysique.hero.promise")}</p>
        <div className="reveal mb-6">
          <AuditEmailButton protocol="metaphysique" className="btn-primary">
            {t("metaphysique.hero.cta")}
          </AuditEmailButton>
        </div>
        <p className="reveal text-xs text-n-faint tracking-wide">{t("metaphysique.hero.footnote")}</p>
      </div>
    </section>
  );
}

function MetaphysiqueConstat() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="constat" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("metaphysique.constat.title")}
          <br />
          {t("metaphysique.constat.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("metaphysique.constat.intro")}</p>
        <p className="reveal font-display text-lg italic text-n-text my-8">{t("metaphysique.constat.pivot")}</p>
        <p className="reveal text-n-muted mb-6">{t("metaphysique.constat.p1")}</p>
        <p className="reveal text-n-muted mb-6">{t("metaphysique.constat.p2")}</p>
        <p className="reveal text-n-muted mb-6">{t("metaphysique.constat.p3")}</p>
        <blockquote className="reveal bq-gold">{t("metaphysique.constat.quote")}</blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueSignes() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("metaphysique.signes.items") as SignItem[];

  return (
    <section ref={ref} id="signes" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("metaphysique.signes.title")}</h2>
        <p className="reveal section-intro">{t("metaphysique.signes.intro")}</p>
        <div className="reveal flex flex-col gap-8 my-10">
          {items.map((s) => (
            <div key={s.title}>
              <p className="font-semibold text-base text-n-text mb-2">{s.title}</p>
              <p className="text-sm text-n-muted">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center font-medium text-n-gold-warm">{t("metaphysique.signes.threshold")}</p>
      </div>
    </section>
  );
}

function MetaphysiqueMechanism() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="mechanism" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          {t("metaphysique.mechanism.title")}
          <br />
          {t("metaphysique.mechanism.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("metaphysique.mechanism.intro")}</p>
        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="mechanism-name font-display text-xl mb-4">{t("metaphysique.mechanism.mechanismName")}</h3>
          <p className="text-n-text">{t("metaphysique.mechanism.definition")}</p>
        </div>
        <p className="reveal">
          {t("metaphysique.mechanism.p1")}{" "}
          <span className="text-xs text-n-faint">{t("metaphysique.mechanism.p1Ref")}</span>.
        </p>
        <p className="reveal">{t("metaphysique.mechanism.p2")}</p>
        <p className="reveal text-n-text">
          <strong>{t("metaphysique.mechanism.p3")}</strong>
        </p>
        <blockquote className="reveal bq-gold">{t("metaphysique.mechanism.quote")}</blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueProtocol() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const layers = getTr("metaphysique.protocol.layers") as ProtocolLayer[];

  return (
    <section ref={ref} id="protocol" className="section-pad section-dark">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">{t("metaphysique.protocol.eyebrow")}</span>
          <h3 className="font-display text-xl text-n-text mt-2 mb-4">{t("metaphysique.protocol.name")}</h3>
          <p className="section-intro mx-auto text-center">{t("metaphysique.protocol.intro")}</p>
        </div>
        <div className="reveal flex flex-col gap-10 max-w-3xl mx-auto">
          {layers.map((layer) => (
            <div key={layer.num} className="border border-n-border rounded-lg p-8 relative">
              <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">
                {layer.num}
              </span>
              <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
                {layer.title}
              </h4>
              <p className="text-xs text-n-faint mb-4">{layer.sub}</p>
              {layer.paragraphs.map((p) => (
                <p key={p} className="text-sm text-n-muted mb-3">
                  {p}
                </p>
              ))}
              <p className="layer-result text-sm font-medium mt-4">{layer.result}</p>
            </div>
          ))}
        </div>
        <div className="reveal max-w-3xl mx-auto mt-12 p-8 border border-n-gold-dim rounded-lg text-center">
          <p className="text-n-muted text-sm leading-relaxed">
            <SplitStrong
              full={t("metaphysique.protocol.callout")}
              strong={t("metaphysique.protocol.calloutStrong")}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueFuture() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const narrative = getTr("metaphysique.future.narrative") as NarrativeLine[];

  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("metaphysique.future.title")}
          <br />
          {t("metaphysique.future.titleLine2")}
        </h2>
        <div className="reveal space-y-4 text-n-muted my-10">
          {narrative.map((line) => (
            <p key={line.text} className={line.emphasis ? "text-n-text font-medium" : undefined}>
              {line.text}
            </p>
          ))}
          <p>
            <strong className="text-n-gold-warm font-display italic text-lg">
              {t("metaphysique.future.closing")}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueProof() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="proof" className="section-pad">
      <div className="container-nomos narrow">
        <blockquote className="reveal bq-gold text-center">{t("metaphysique.proof.quote")}</blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueFounder() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("metaphysique.founder.title")}</h2>
        <div className="reveal space-y-4 text-n-muted">
          <p>{t("metaphysique.founder.p1")}</p>
          <p>{t("metaphysique.founder.p2")}</p>
          <p>{t("metaphysique.founder.p3")}</p>
          <p>
            <SplitStrong full={t("metaphysique.founder.p4")} strong={t("metaphysique.founder.p4Strong")} />
          </p>
          <p>
            <SplitStrong full={t("metaphysique.founder.p5")} strong={t("metaphysique.founder.p5Strong")} />
          </p>
          <p>{t("metaphysique.founder.p6")}</p>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold">
              {t("metaphysique.founder.initial")}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-n-text">{t("metaphysique.founder.name")}</p>
              <p className="text-n-muted">{t("metaphysique.founder.role")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueRoi() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const sections = getTr("metaphysique.roi.sections") as RoiSectionItem[];
  const rows = getTr("metaphysique.roi.rows") as Array<{ label: string; value: string }>;

  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          {t("metaphysique.roi.title")}
          <br />
          {t("metaphysique.roi.titleLine2")}
        </h2>
        <p className="reveal section-intro">
          {(() => {
            const full = t("metaphysique.roi.intro");
            const em = t("metaphysique.roi.introEm");
            const parts = full.split(em);
            if (parts.length === 2) {
              return (
                <>
                  {parts[0]}
                  <em>{em}</em>
                  {parts[1]}
                </>
              );
            }
            return full;
          })()}
        </p>
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
              {section.title}
            </h3>
            <p className="reveal">{section.body}</p>
          </div>
        ))}
        <div className="reveal my-8 space-y-0">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm"
            >
              <span className="font-medium">{r.label}</span>
              <span className="text-n-muted sm:text-right">{r.value}</span>
            </div>
          ))}
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2 text-sm font-semibold"
            style={{ background: "hsl(var(--color-gold-glow))" }}
          >
            <span className="text-n-gold-warm">{t("metaphysique.roi.roiLabel")}</span>
            <span className="text-n-gold-warm sm:text-right">{t("metaphysique.roi.roiValue")}</span>
          </div>
        </div>
        <p className="reveal font-display text-xl text-center my-10 text-n-text">
          <strong>{t("metaphysique.roi.question")}</strong>
        </p>
      </div>
    </section>
  );
}

function MetaphysiqueFaq() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const faqs = getTr("metaphysique.faq.items") as FaqItem[];

  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("metaphysique.faq.title")}</h2>
        <div className="flex flex-col">
          {faqs.map((f, index) => (
            <details
              key={f.q}
              open={index === 0 || index === 2}
              className="reveal border-b border-n-border group"
            >
              <summary className="py-5 font-medium cursor-pointer flex justify-between items-center text-base list-none [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-lg text-n-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 text-n-muted text-sm max-w-[60ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueCta() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("metaphysique.cta.items") as CtaItem[];

  return (
    <section ref={ref} id="audit" className="section-pad text-center pb-24">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("metaphysique.cta.title")}
          <br />
          <em>{t("metaphysique.cta.titleAccent")}</em>
        </h2>
        <p className="reveal section-intro mx-auto text-center">{t("metaphysique.cta.intro")}</p>
        <div className="reveal flex flex-col gap-6 my-10 text-left max-w-[560px] mx-auto">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="text-n-gold-warm shrink-0">⬥</span>
              <p className="text-sm text-n-muted">
                <strong className="text-n-text">{item.title}</strong> — {item.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="reveal guarantee-reminder text-sm mb-8">{t("metaphysique.cta.guarantee")}</p>
        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>{t("metaphysique.cta.placesTitle")}</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">{t("metaphysique.cta.placesBody")}</p>
        </div>
        <div className="reveal my-8">
          <AuditEmailButton protocol="metaphysique" className="btn-primary lg">
            {t("metaphysique.cta.cta")}
          </AuditEmailButton>
          <p className="text-xs text-n-faint mt-3">{t("metaphysique.cta.footnote")}</p>
        </div>
      </div>
    </section>
  );
}

export default MetaphysiquePage;
