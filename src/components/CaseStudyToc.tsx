import type { CaseStudySection } from "@/i18n/locales/caseStudies";
import PageSectionToc from "@/components/PageSectionToc";

type CaseStudyTocProps = {
  sections: CaseStudySection[];
  activeId: string;
  label: string;
  compact?: boolean;
  className?: string;
};

const CaseStudyToc = ({ sections, activeId, label, compact = false, className }: CaseStudyTocProps) => {
  return (
    <PageSectionToc
      className={className}
      sections={sections.map((s) => ({
        id: s.id,
        num: s.num,
        label: s.title,
      }))}
      activeId={activeId}
      label={label}
      compact={compact}
    />
  );
};

export default CaseStudyToc;
