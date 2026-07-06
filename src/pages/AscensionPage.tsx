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
import { CinematicHero } from "@/components/CinematicHero";

type SymptomItem = { title: string; detail: string };
type FaqItem = { q: string; a: string };
type ResultRow = { indicator: string; before: string; after: string };
type ResultCard = { role: string; metric: string; bug: string; rows: ResultRow[]; note: string };
type ProtocolLayer = {
  num: string;
  title: string;
  sub: string;
  paragraphs: string[];
  result: string;
};
type ConcretePhase = { title: string; body: string; deliverable: string };
type NarrativeLine = { emphasis?: boolean; text: string };
type RoiSection = { title: string; paragraphs: string[]; strong?: string };
type CtaItem = { title: string; detail: string };

function SplitStrong({ full, strong }: { full: string; strong: string }) {
  const parts = full.split(strong);
  if (parts.length === 2) {
    return (
      <>
        {parts[0]}
        <strong className="text-n-text">{strong}</strong>
        {parts[1]}
      </>
    );
  }
  return <>{full}</>;
}

function ResultTable({ headers, rows }: { headers: { indicator: string; before: string; after: string }; rows: ResultRow[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              {headers.indicator}
            </th>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              {headers.before}
            </th>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              {headers.after}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.indicator}>
              <td className="p-4 border-b border-n-border text-n-text">{r.indicator}</td>
              <td className="p-4 border-b border-n-border text-n-muted align-top">{r.before}</td>
              <td className="p-4 border-b border-n-border text-n-muted align-top">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const AscensionPage = () => {
  usePageMeta("ascension");
  const { t } = useLanguage();

  return (
    <div data-protocol="ascension" className="overflow-x-clip pb-24 sm:pb-0">
      <Header mode="ascension" />
      <main className="relative">
        <PageSideNavLayout page="ascension" stickySideNav hero={<AscensionHero />}>
          <AscensionConstat />
          <AscensionSignes />
          <AscensionMechanism />
          <AscensionProtocol />
          <AscensionConcrete />
          <AscensionResults />
          <AscensionFuture />
          <AscensionFounder />
          <AscensionRoi />
          <GuaranteeSection variant="ascension" />
          <QualifySection variant="ascension" />
          <AscensionFaq />
          <AscensionCta />
        </PageSideNavLayout>
        <section className="cross-link relative z-10">
          <div className="container-nomos narrow cross-link-stack">
            <div className="cross-link-item">
              <p>
                <em>{t("common.crossLink.ascension.prompt")}</em>
              </p>
              <Link to="/nomos">{t("common.crossLink.ascension.link")}</Link>
            </div>
            <div className="cross-link-item cross-link-item--secondary">
              <p>{t("common.crossLink.ascension.promptAegis")}</p>
              <Link to="/aegis">{t("common.crossLink.ascension.linkAegis")}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="ascension" />
      <MobileCTABar variant="ascension" />
    </div>
  );
};

function AscensionHero() {
  const { t } = useLanguage();
  return (
    <CinematicHero
      eyebrow={t("ascension.hero.eyebrow")}
      title={t("ascension.hero.title")}
      titleAccent={t("ascension.hero.titleAccent")}
      intro={t("ascension.hero.intro")}
      promise={t("ascension.hero.promise")}
      cta={t("ascension.hero.cta")}
      protocol="ascension"
      footnote={t("ascension.hero.footnote")}
      accent="gold"
    />
  );
}

function AscensionConstat() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="constat" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("ascension.constat.title")}
          <br />
          {t("ascension.constat.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("ascension.constat.intro")}</p>
        <p className="reveal font-display text-lg italic text-n-text my-8">{t("ascension.constat.pivot")}</p>
        <p className="reveal text-n-muted mb-6">
          {(() => {
            const full = t("ascension.constat.p1");
            const em = t("ascension.constat.p1Em");
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
        <p className="reveal text-n-muted mb-6">{t("ascension.constat.p2")}</p>
        <blockquote className="reveal bq-gold">{t("ascension.constat.quote")}</blockquote>
      </div>
    </section>
  );
}

function AscensionSignes() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const symptoms = getTr("ascension.signes.symptoms") as SymptomItem[];

  return (
    <section ref={ref} id="signes" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("ascension.signes.title")}</h2>
        <p className="reveal section-intro">{t("ascension.signes.intro")}</p>
        <div className="reveal flex flex-col gap-8 my-10">
          {symptoms.map((s) => (
            <div key={s.title}>
              <p className="font-semibold text-base text-n-text mb-2">{s.title}</p>
              <p className="text-sm text-n-muted">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center font-medium text-n-gold-warm">{t("ascension.signes.threshold")}</p>
      </div>
    </section>
  );
}

function AscensionMechanism() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="mechanism" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          {t("ascension.mechanism.title")}
          <br />
          {t("ascension.mechanism.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("ascension.mechanism.intro")}</p>
        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="mechanism-name font-display text-xl mb-4">{t("ascension.mechanism.ceilingName")}</h3>
          <p className="text-n-text">{t("ascension.mechanism.ceilingDefinition")}</p>
        </div>
        <p className="reveal">{t("ascension.mechanism.p1")}</p>
        <p className="reveal">
          {(() => {
            const full = t("ascension.mechanism.p2");
            const em = t("ascension.mechanism.p2Em");
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
        <p className="reveal">
          {t("ascension.mechanism.p3")}{" "}
          <span className="text-xs text-n-faint">{t("ascension.mechanism.p3RefLinville")}</span>.{" "}
          {t("ascension.mechanism.p3Ibarra")}{" "}
          <span className="text-xs text-n-faint">{t("ascension.mechanism.p3RefIbarra")}</span>.
        </p>
        <p className="reveal text-n-text">
          <strong>{t("ascension.mechanism.p4")}</strong>
        </p>
        <p className="reveal">{t("ascension.mechanism.p5")}</p>
        <blockquote className="reveal bq-gold">{t("ascension.mechanism.quote")}</blockquote>
      </div>
    </section>
  );
}

function AscensionProtocol() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const layers = getTr("ascension.protocol.layers") as ProtocolLayer[];

  return (
    <section ref={ref} id="protocol" className="section-pad section-dark">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">{t("ascension.protocol.eyebrow")}</span>
          <h3 className="font-display text-xl text-n-text mt-2 mb-4">{t("ascension.protocol.name")}</h3>
          <p className="section-intro mx-auto text-center">{t("ascension.protocol.intro")}</p>
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
      </div>
    </section>
  );
}

function AscensionConcrete() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const phases = getTr("ascension.concrete.phases") as ConcretePhase[];

  return (
    <section ref={ref} id="concrete" className="section-pad">
      <div className="container-nomos narrow">
        <div className="reveal bg-n-surface border border-n-border rounded-lg p-10">
          <h3 className="font-display text-xl text-n-gold-warm font-normal mb-8">
            {t("ascension.concrete.title")}
          </h3>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div
                key={phase.title}
                className={i < phases.length - 1 ? "pb-8 border-b border-n-border" : ""}
              >
                <h4 className="text-sm text-n-gold-warm font-semibold mb-3">{phase.title}</h4>
                <p className="text-sm text-n-muted">{phase.body}</p>
                <p className="text-sm text-n-gold-warm font-medium mt-3">{phase.deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AscensionResults() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const cards = getTr("ascension.results.cards") as ResultCard[];
  const headers = getTr("ascension.results.tableHeaders") as {
    indicator: string;
    before: string;
    after: string;
  };

  return (
    <section ref={ref} id="results" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("ascension.results.title")}
          <br />
          {t("ascension.results.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("ascension.results.intro")}</p>
        {cards.map((card) => (
          <div key={card.role} className="reveal border border-n-border rounded-lg p-8 mb-8">
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <span className="font-semibold text-sm text-n-text">{card.role}</span>
              <span className="text-xs text-n-muted">{card.metric}</span>
            </div>
            <p className="text-sm text-n-muted mb-4">
              <strong className="text-n-text">{t("ascension.results.startingPointLabel")}</strong> {card.bug}
            </p>
            <ResultTable headers={headers} rows={card.rows} />
            <p className="text-xs text-n-faint italic mt-4">{card.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AscensionFuture() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const narrative = getTr("ascension.future.narrative") as NarrativeLine[];

  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("ascension.future.title")}
          <br />
          {t("ascension.future.titleLine2")}
        </h2>
        <div className="reveal space-y-4 text-n-muted my-10">
          {narrative.map((line) => (
            <p key={line.text} className={line.emphasis ? "text-n-text font-medium" : undefined}>
              {line.text}
            </p>
          ))}
          <p>
            <strong className="text-n-gold-warm font-display italic text-lg">
              {t("ascension.future.closing")}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function AscensionFounder() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("ascension.founder.title")}</h2>
        <div className="reveal space-y-4 text-n-muted">
          <p>{t("ascension.founder.p1")}</p>
          <p>{t("ascension.founder.p2")}</p>
          <p>
            <strong className="text-n-text">{t("ascension.founder.p3")}</strong>
          </p>
          <p>{t("ascension.founder.p4")}</p>
          <p>
            <SplitStrong full={t("ascension.founder.p5")} strong={t("ascension.founder.p5Strong")} />
          </p>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold">
              {t("ascension.founder.initial")}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-n-text">{t("ascension.founder.name")}</p>
              <p className="text-n-muted">{t("ascension.founder.role")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AscensionRoi() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const sections = getTr("ascension.roi.sections") as RoiSection[];
  const rows = getTr("ascension.roi.rows") as Array<{ label: string; value: string }>;

  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          {t("ascension.roi.title")}
          <br />
          {t("ascension.roi.titleLine2")}
        </h2>
        <p className="reveal section-intro">
          {(() => {
            const full = t("ascension.roi.intro");
            const em = t("ascension.roi.introEm");
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
            {section.paragraphs.map((p, i) => (
              <p key={i} className="reveal">
                {section.strong && p.includes(section.strong) ? (
                  <>
                    {p.split(section.strong)[0]}
                    <strong className="text-n-gold-warm">{section.strong}</strong>
                    {p.split(section.strong)[1]}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
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
            <span className="text-n-gold-warm">{t("ascension.roi.roiLabel")}</span>
            <span className="text-n-gold-warm sm:text-right">{t("ascension.roi.roiValue")}</span>
          </div>
        </div>
        <p className="reveal font-display text-xl text-center my-10 text-n-text">
          <strong>{t("ascension.roi.question")}</strong>
        </p>
      </div>
    </section>
  );
}

function AscensionFaq() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const faqs = getTr("ascension.faq.items") as FaqItem[];

  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">{t("ascension.faq.title")}</h2>
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

function AscensionCta() {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const items = getTr("ascension.cta.items") as CtaItem[];

  return (
    <section ref={ref} id="audit" className="section-pad text-center pb-24">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {t("ascension.cta.title")}
          <br />
          <em>{t("ascension.cta.titleAccent")}</em>
        </h2>
        <p className="reveal section-intro mx-auto text-center">{t("ascension.cta.intro")}</p>
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
        <p className="reveal guarantee-reminder text-sm mb-8">{t("ascension.cta.guarantee")}</p>
        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>{t("ascension.cta.placesTitle")}</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">{t("ascension.cta.placesBody")}</p>
        </div>
        <div className="reveal my-8">
          <AuditEmailButton protocol="ascension" className="btn-primary lg">
            {t("ascension.cta.cta")}
          </AuditEmailButton>
          <p className="text-xs text-n-faint mt-3">{t("ascension.cta.footnote")}</p>
        </div>
      </div>
    </section>
  );
}

export default AscensionPage;
