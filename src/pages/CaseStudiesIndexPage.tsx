import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CASE_STUDY_SLUGS, type CaseStudySlug } from "@/i18n/locales/caseStudies";

const INDEX_CARDS: CaseStudySlug[] = [...CASE_STUDY_SLUGS];

const CaseStudiesIndexPage = () => {
  const { t } = useLanguage();
  const mainRef = useScrollReveal<HTMLElement>();
  usePageMeta("caseStudies");

  return (
    <div className="case-study-page overflow-x-hidden min-h-dvh">
      <Header mode="hub" />
      <main ref={mainRef}>
        <section className="case-study-hero">
          <div className="container-nomos narrow">
            <nav className="case-study-breadcrumb reveal" aria-label="Fil d'Ariane">
              <Link to="/">{t("caseStudies.detail.backHub")}</Link>
              <ChevronRight className="case-study-breadcrumb-sep" aria-hidden />
              <span aria-current="page">{t("caseStudies.index.eyebrow")}</span>
            </nav>
            <span className="reveal eyebrow-bordered mb-8 inline-block">{t("caseStudies.index.eyebrow")}</span>
            <h1 className="reveal case-study-hero-title">{t("caseStudies.index.title")}</h1>
            <p className="reveal text-base text-n-muted max-w-[56ch] mx-auto leading-relaxed">
              {t("caseStudies.index.subtitle")}
            </p>
          </div>
        </section>

        <section className="section-pad pt-2 pb-20">
          <div className="container-nomos case-studies-index-grid">
            {INDEX_CARDS.map((slug) => {
              const cardKey = `card${slug.toUpperCase()}` as "cardC" | "cardL" | "cardH";
              return (
                <Link
                  key={slug}
                  to={`/case-studies/${slug}`}
                  className="gateway-card gateway-casestudy reveal block"
                  aria-label={`${t(`caseStudies.index.${cardKey}.title`)} — ${t(`caseStudies.index.${cardKey}.subject`)}`}
                >
                  <div className="gateway-label">{t(`caseStudies.index.${cardKey}.label`)}</div>
                  <p className="case-study-card-subject">{t(`caseStudies.index.${cardKey}.subject`)}</p>
                  <h2 className="gateway-title text-[clamp(1.35rem,0.5rem+2vw,2rem)]">
                    {t(`caseStudies.index.${cardKey}.title`)}
                  </h2>
                  <p className="gateway-description">{t(`caseStudies.index.${cardKey}.excerpt`)}</p>
                  <div className="gateway-cta-wrap">
                    <span className="btn-primary btn-large gateway-cta">{t("caseStudies.index.readCta")}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer variant="hub" />
    </div>
  );
};

export default CaseStudiesIndexPage;
