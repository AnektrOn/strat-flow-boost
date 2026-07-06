import type { ReactNode } from "react";
import PageSectionToc from "@/components/PageSectionToc";
import { useCaseStudyScrollSpy } from "@/hooks/useCaseStudyScrollSpy";
import { usePageNavSections, type PageNavSection } from "@/hooks/usePageNavSections";
import { useLanguage } from "@/contexts/LanguageContext";
import type { PageNavKey } from "@/lib/pageNav";

type PageSideNavLayoutProps = {
  page: PageNavKey;
  hero?: ReactNode;
  children: ReactNode;
  /** Sections after hero only — defaults to all page sections when hero is set. */
  navSections?: PageNavSection[];
  /** Menu latéral sticky pendant le scroll (CRISIS / LEVEL UP). */
  stickySideNav?: boolean;
};

const PageSideNavLayout = ({
  page,
  hero,
  children,
  navSections,
  stickySideNav = false,
}: PageSideNavLayoutProps) => {
  const { t } = useLanguage();
  const allSections = usePageNavSections(page);
  const sections = navSections ?? (hero ? allSections.filter((s) => s.id !== "hero") : allSections);
  const sectionIds = hero ? allSections.map((s) => s.id) : sections.map((s) => s.id);
  const activeId = useCaseStudyScrollSpy(sectionIds);
  const label = t("pageNav.label");

  return (
    <div className="relative z-10">
      {hero}

      <div className="page-nav-mobile-bar xl:hidden">
        <PageSectionToc sections={sections} activeId={activeId} label={label} compact />
      </div>

      <div className={`page-nav-body${stickySideNav ? " page-nav-body--sticky" : ""}`}>
        <div className="container-nomos page-nav-layout">
          <PageSectionToc
            className={`page-nav-desktop${stickySideNav ? " page-nav-desktop--sticky" : ""}`}
            sections={sections}
            activeId={activeId}
            label={label}
          />
          <div className="page-nav-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageSideNavLayout;
