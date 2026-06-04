import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUp, BookOpen, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyGlossaryPanel from "@/components/CaseStudyGlossaryPanel";
import CaseStudyToc from "@/components/CaseStudyToc";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import { useCaseStudyScrollSpy } from "@/hooks/useCaseStudyScrollSpy";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { estimateReadingMinutes } from "@/lib/caseStudyReadingTime";
import {
  CASE_STUDY_SLUGS,
  type CaseStudyGlossary,
  type CaseStudySection,
  type CaseStudySlug,
  type CaseStudyStudy,
} from "@/i18n/locales/caseStudies";

function isStudySlug(s: string | undefined): s is CaseStudySlug {
  return s != null && (CASE_STUDY_SLUGS as readonly string[]).includes(s);
}

const META_BY_SLUG: Record<CaseStudySlug, "caseStudyC" | "caseStudyL" | "caseStudyH"> = {
  c: "caseStudyC",
  l: "caseStudyL",
  h: "caseStudyH",
};

function CrisisTable({ section }: { section: CaseStudySection }) {
  const table = section.crisisTable;
  if (!table) return null;
  return (
    <figure className="case-study-table-wrap">
      <div className="case-study-table-scroll">
        <table className="case-study-table w-full border-collapse text-sm">
          <thead>
            <tr>
              <th scope="col">{table.headers.signal}</th>
              <th scope="col">{table.headers.mechanism}</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.signal}>
                <th scope="row">{row.signal}</th>
                <td>{row.mechanism}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  const isResults = section.id === "results";
  const isTestimonials = section.id === "testimonials";
  const isAnalyse = section.id === "analyse";

  return (
    <article
      id={section.id}
      className={`case-study-section reveal ${isResults ? "case-study-section-results" : ""} ${isTestimonials ? "case-study-section-testimonials" : ""} ${isAnalyse ? "case-study-section-analyse" : ""}`}
    >
      <div className="case-study-section-marker" aria-hidden>
        <span className="case-study-section-dot" />
      </div>
      <div className="case-study-section-inner">
        <header className="case-study-section-header">
          <span className="case-study-section-num">{section.num}</span>
          <h2 className="case-study-section-title">{section.title}</h2>
        </header>
        <div className="case-study-section-body">
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}

          <CrisisTable section={section} />

          {section.subsections?.map((sub) => (
            <div key={sub.title} className="case-study-subsection">
              <h3 className="case-study-subsection-title">{sub.title}</h3>
              {sub.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              {sub.bullets && sub.bullets.length > 0 && (
                <ul className="case-study-bullets">
                  {sub.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {section.paragraphsAfter?.map((p) => (
            <p key={p.slice(0, 48)} className="case-study-lead-line">
              {p}
            </p>
          ))}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="case-study-bullets">
              {section.bullets.map((b) => (
                <li key={b.slice(0, 48)}>{b}</li>
              ))}
            </ul>
          )}

          {section.numbered && section.numbered.length > 0 && (
            <ol className="case-study-numbered">
              {section.numbered.map((item, i) => (
                <li key={item.slice(0, 48)}>
                  <span className="case-study-numbered-index">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          )}

          {section.quote && (
            <blockquote className="case-study-quote">
              <p>« {section.quote.text} »</p>
              <footer>— {section.quote.attribution}</footer>
            </blockquote>
          )}

          {section.outcomes && section.outcomes.length > 0 && (
            <ul className="case-study-outcomes">
              {section.outcomes.map((o) => (
                <li key={o.slice(0, 48)}>{o}</li>
              ))}
            </ul>
          )}

          {section.testimonials && section.testimonials.length > 0 && (
            <div className="case-study-testimonials">
              {section.testimonials.map((text, i) => (
                <blockquote key={text.slice(0, 48)} className="case-study-testimonial">
                  <span className="case-study-testimonial-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>« {text} »</p>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getTr, t } = useLanguage();
  const { openAudit } = useEmailDialog();
  const mainRef = useScrollReveal<HTMLElement>();
  const progress = useReadingProgress();
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const validSlug = isStudySlug(slug);

  usePageMeta(validSlug ? META_BY_SLUG[slug] : "caseStudies");

  const study = validSlug
    ? (getTr(`caseStudies.studies.${slug}`) as CaseStudyStudy | undefined)
    : undefined;

  const glossary = getTr("caseStudies.glossary") as CaseStudyGlossary | undefined;
  const sectionIds = study?.sections.map((s) => s.id) ?? [];
  const activeId = useCaseStudyScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!validSlug || !study?.sections || !study.closing || !glossary?.groups) {
    return <Navigate to="/case-studies" replace />;
  }

  const readingMinutes = estimateReadingMinutes(study);
  const readingLabel = t("caseStudies.detail.readingTime").replace("{minutes}", String(readingMinutes));
  const sectionsLabel = t("caseStudies.detail.sectionsCount").replace(
    "{count}",
    String(study.sections.length),
  );

  return (
    <div className="case-study-page overflow-x-hidden min-h-dvh">
      <div
        className="case-study-progress"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={readingLabel}
      >
        <span className="case-study-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <Header mode="hub" />
      <main ref={mainRef} id="case-study-main">
        <section className="case-study-hero">
          <div className="container-nomos narrow">
            <nav className="case-study-breadcrumb reveal" aria-label="Fil d'Ariane">
              <Link to="/">{t("caseStudies.detail.backHub")}</Link>
              <ChevronRight className="case-study-breadcrumb-sep" aria-hidden />
              <Link to="/case-studies">{t("caseStudies.detail.backIndex")}</Link>
              <ChevronRight className="case-study-breadcrumb-sep" aria-hidden />
              <span aria-current="page">{study.hero.subtitle}</span>
            </nav>
            <span className="reveal eyebrow-bordered mb-6 inline-block">{study.hero.eyebrow}</span>
            <h1 className="reveal case-study-hero-title">{study.hero.title}</h1>
            <p className="reveal case-study-hero-subtitle">{study.hero.subtitle}</p>
            {study.hero.statusLine && (
              <p className="reveal case-study-hero-status">{study.hero.statusLine}</p>
            )}
            <div className="reveal case-study-hero-meta">
              <span className="case-study-badge case-study-badge-protocol">{study.hero.protocol}</span>
              <span className="case-study-badge">{study.hero.entryDoor}</span>
              <span className="case-study-meta-stat">{readingLabel}</span>
              <span className="case-study-meta-stat case-study-meta-divider">{sectionsLabel}</span>
            </div>
          </div>
        </section>

        <div className="case-study-mobile-bar xl:hidden">
          <CaseStudyToc
            sections={study.sections}
            activeId={activeId}
            label={t("caseStudies.detail.tocLabel")}
            compact
          />
          <Sheet open={glossaryOpen} onOpenChange={setGlossaryOpen}>
            <SheetTrigger asChild>
              <button type="button" className="case-study-glossary-fab" aria-label={t("caseStudies.detail.glossaryOpen")}>
                <BookOpen aria-hidden />
                <span className="sr-only sm:not-sr-only sm:inline">{t("caseStudies.detail.glossaryLabel")}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="case-study-glossary-sheet-content w-full sm:max-w-md p-0 border-n-border bg-n-bg">
              <SheetHeader className="sr-only">
                <SheetTitle>{glossary.title}</SheetTitle>
              </SheetHeader>
              <CaseStudyGlossaryPanel
                glossary={glossary}
                ariaLabel={t("caseStudies.detail.glossaryLabel")}
                variant="sheet"
                defaultOpenGroups={3}
              />
            </SheetContent>
          </Sheet>
        </div>

        <section className="case-study-body section-pad">
          <div className="container-nomos case-study-layout">
            <CaseStudyToc
              className="case-study-toc-desktop"
              sections={study.sections}
              activeId={activeId}
              label={t("caseStudies.detail.tocLabel")}
            />

            <div className="case-study-timeline">
              {study.sections.map((section) => (
                <CaseStudySectionBlock key={section.id} section={section} />
              ))}
            </div>

            <CaseStudyGlossaryPanel
              glossary={glossary}
              ariaLabel={t("caseStudies.detail.glossaryLabel")}
              variant="sidebar"
              defaultOpenGroups={1}
            />
          </div>
        </section>

        <section className="case-study-closing section-pad section-dark">
          <div className="container-nomos narrow">
            <span className="reveal eyebrow mb-4 inline-block">{t("caseStudies.detail.closingEyebrow")}</span>
            <h2 className="reveal case-study-closing-title">{study.closing.title}</h2>
            <p className="reveal case-study-closing-lead">{study.closing.lead}</p>
            {study.closing.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="reveal case-study-closing-text">
                {p}
              </p>
            ))}
            <p className="reveal case-study-closing-protocol">{study.closing.protocolLine}</p>
            <ul className="reveal case-study-closing-list">
              {study.closing.bullets.map((b) => (
                <li key={b.slice(0, 48)}>{b}</li>
              ))}
            </ul>
            <div className="reveal case-study-guarantee">
              <p className="case-study-guarantee-label">{study.closing.guaranteeTitle}</p>
              <p>{study.closing.guarantee}</p>
            </div>
            <button type="button" onClick={() => openAudit("hub")} className="reveal btn-primary btn-large">
              {study.closing.cta}
            </button>
          </div>
        </section>
      </main>

      <button
        type="button"
        className={`case-study-back-top ${showBackTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("caseStudies.detail.backToTop")}
      >
        <ArrowUp aria-hidden />
      </button>

      <Footer variant="hub" />
    </div>
  );
};

export default CaseStudyDetailPage;
