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

type AudienceItem = { title: string; detail: string };
type CapabilityLayer = {
  num: string;
  title: string;
  sub: string;
  paragraphs: string[];
  result: string;
};
type PhilosophyItem = { title: string; detail: string };
type FormatTier = {
  name: string;
  tagline: string;
  audience: string;
  price: string;
  includes: string[];
};
type FaqItem = { q: string; a: string };
type CtaItem = { title: string; detail: string };

const AegisPage = () => {
  usePageMeta("aegis");
  const { t } = useLanguage();

  return (
    <div className="ascension-theme overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="aegis" />
      <main>
        <PageSideNavLayout page="aegis" hero={<AegisHero />}>
          <AegisPositioning />
          <AegisAudience />
          <AegisWeekly />
          <AegisClinical />
          <AegisPhilosophy />
          <AegisFormats />
          <GuaranteeSection variant="aegis" />
          <QualifySection variant="aegis" />
          <AegisFaq />
          <AegisCta />
        </PageSideNavLayout>
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>
              <em>{t("common.crossLink.aegis.prompt")}</em>
            </p>
            <Link to="/nomos">{t("common.crossLink.aegis.linkCrisis")}</Link>
            <span className="mx-3 text-n-faint">{t("common.crossLink.aegis.separator")}</span>
            <Link to="/ascension">{t("common.crossLink.aegis.linkLevelUp")}</Link>
          </div>
        </section>
      </main>
      <Footer variant="aegis" />
      <MobileCTABar variant="aegis" />
    </div>
  );
};

function AegisHero() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="hero" className="min-h-[85vh] flex items-center text-center pt-32 pb-20">
      <div className="container-nomos narrow w-full">
        <span className="reveal eyebrow-bordered mb-8 inline-block">{t("aegis.hero.eyebrow")}</span>
        <h1 className="reveal h-hero mb-6">
          {t("aegis.hero.title")}
          <br />
          <em>{t("aegis.hero.titleAccent")}</em>
        </h1>
        <p className="reveal section-intro mx-auto">{t("aegis.hero.intro")}</p>
        <p className="reveal text-base text-n-gold-warm font-medium mb-8 max-w-[56ch] mx-auto">
          {t("aegis.hero.contrast")}
        </p>
        <div className="reveal mb-6">
          <AuditEmailButton protocol="aegis" className="btn-primary">
            {t("aegis.hero.cta")}
          </AuditEmailButton>
        </div>
        <p className="reveal text-xs text-n-faint tracking-wide">{t("aegis.hero.footnote")}</p>
      </div>
    </section>
  );
}

function AegisPositioning() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="positioning" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("aegis.positioning.title")}
          <br />
          {t("aegis.positioning.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("aegis.positioning.intro")}</p>
        <p className="reveal font-display text-lg italic text-n-text my-8">{t("aegis.positioning.pivot")}</p>
        <p className="reveal text-n-muted mb-6">{t("aegis.positioning.p1")}</p>
        <blockquote className="reveal bq-gold">{t("aegis.positioning.quote")}</blockquote>
      </div>
    </section>
  );
}

function AegisAudience() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("aegis.audience.items") as AudienceItem[];

  return (
    <section ref={ref} id="audience" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("aegis.audience.title")}</h2>
        <p className="reveal section-intro">{t("aegis.audience.intro")}</p>
        <div className="reveal flex flex-col gap-8 my-10">
          {items.map((item) => (
            <div key={item.title}>
              <p className="font-semibold text-base text-n-text mb-2">{item.title}</p>
              <p className="text-sm text-n-muted">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center font-medium text-n-gold-warm">{t("aegis.audience.threshold")}</p>
      </div>
    </section>
  );
}

function AegisWeekly() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const capabilities = getTr("aegis.weekly.capabilities") as CapabilityLayer[];

  return (
    <section ref={ref} id="weekly" className="section-pad">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">{t("aegis.weekly.eyebrow")}</span>
          <h3 className="font-display text-xl text-n-text mt-2 mb-4">{t("aegis.weekly.title")}</h3>
          <p className="section-intro mx-auto text-center">{t("aegis.weekly.intro")}</p>
        </div>
        <div className="reveal flex flex-col gap-10 max-w-3xl mx-auto">
          {capabilities.map((layer) => (
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
      </div>
    </section>
  );
}

function AegisClinical() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const planes = getTr("aegis.clinical.planes") as CapabilityLayer[];

  return (
    <section ref={ref} id="clinical" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          {t("aegis.clinical.title")}
          <br />
          {t("aegis.clinical.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("aegis.clinical.intro")}</p>
        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="mechanism-name font-display text-xl mb-4">{t("aegis.clinical.mechanismName")}</h3>
          <p className="text-n-text">{t("aegis.clinical.definition")}</p>
        </div>
        <div className="reveal flex flex-col gap-8 my-10">
          {planes.map((plane) => (
            <div key={plane.num} className="border border-n-border rounded-lg p-8 relative">
              <span className="absolute top-4 right-6 text-3xl font-bold text-n-surface-2 leading-none font-display">
                {plane.num}
              </span>
              <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
                {plane.title}
              </h4>
              <p className="text-xs text-n-faint mb-4">{plane.sub}</p>
              {plane.paragraphs.map((p) => (
                <p key={p} className="text-sm text-n-muted mb-3">
                  {p}
                </p>
              ))}
              <p className="layer-result text-sm font-medium mt-4">{plane.result}</p>
            </div>
          ))}
        </div>
        <blockquote className="reveal bq-gold">{t("aegis.clinical.quote")}</blockquote>
      </div>
    </section>
  );
}

function AegisPhilosophy() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("aegis.philosophy.items") as PhilosophyItem[];

  return (
    <section ref={ref} id="philosophy" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("aegis.philosophy.title")}</h2>
        <p className="reveal section-intro">{t("aegis.philosophy.intro")}</p>
        <div className="reveal flex flex-col gap-8 my-10">
          {items.map((item) => (
            <div key={item.title} className="border border-n-border rounded-lg p-8">
              <p className="font-semibold text-base text-n-gold-warm mb-2">{item.title}</p>
              <p className="text-sm text-n-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AegisFormats() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const tiers = getTr("aegis.formats.tiers") as FormatTier[];

  return (
    <section ref={ref} id="formats" className="section-pad">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <h2 className="h-section">{t("aegis.formats.title")}</h2>
          <p className="section-intro mx-auto text-center mt-4">{t("aegis.formats.intro")}</p>
        </div>
        <div className="reveal grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-n-border rounded-lg p-8 flex flex-col bg-n-surface">
              <h3 className="font-display text-xl text-n-gold-warm mb-2">{tier.name}</h3>
              <p className="text-sm text-n-text font-medium mb-4">{tier.tagline}</p>
              <p className="text-xs text-n-faint mb-1">{t("aegis.formats.audienceLabel")}</p>
              <p className="text-sm text-n-muted mb-4">{tier.audience}</p>
              <p className="text-sm font-semibold text-n-gold-warm mb-6">{tier.price}</p>
              <p className="text-xs text-n-faint mb-3 uppercase tracking-wide">{t("aegis.formats.includesLabel")}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {tier.includes.map((li) => (
                  <li
                    key={li}
                    className="text-sm text-n-muted pl-5 relative before:content-['⬥'] before:absolute before:left-0 before:text-n-gold-dim before:text-xs"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AegisFaq() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const faqs = getTr("aegis.faq.items") as FaqItem[];

  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("aegis.faq.title")}</h2>
        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="reveal border-b border-n-border group">
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

function AegisCta() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("aegis.cta.items") as CtaItem[];

  return (
    <section ref={ref} id="audit" className="section-pad text-center pb-24">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("aegis.cta.title")}
          <br />
          <em>{t("aegis.cta.titleAccent")}</em>
        </h2>
        <p className="reveal section-intro mx-auto text-center">{t("aegis.cta.intro")}</p>
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
        <p className="reveal guarantee-reminder text-sm mb-8">{t("aegis.cta.guarantee")}</p>
        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>{t("aegis.cta.placesTitle")}</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">{t("aegis.cta.placesBody")}</p>
        </div>
        <div className="reveal my-8">
          <AuditEmailButton protocol="aegis" className="btn-primary lg">
            {t("aegis.cta.cta")}
          </AuditEmailButton>
          <p className="text-xs text-n-faint mt-3">{t("aegis.cta.footnote")}</p>
        </div>
      </div>
    </section>
  );
}

export default AegisPage;
