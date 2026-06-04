import type { CaseStudySection } from "@/i18n/locales/caseStudies";
import { cn } from "@/lib/utils";

type CaseStudyTocProps = {
  sections: CaseStudySection[];
  activeId: string;
  label: string;
  compact?: boolean;
  className?: string;
};

function shortTitle(title: string): string {
  const phase = title.match(/^Phase \d+[^—]*—\s*(.+)$/i);
  if (phase) return phase[1];
  if (title.length > 42) return `${title.slice(0, 40)}…`;
  return title;
}

const CaseStudyToc = ({ sections, activeId, label, compact = false, className }: CaseStudyTocProps) => {
  return (
    <nav
      className={cn("case-study-toc", compact && "case-study-toc-compact", className)}
      aria-label={label}
    >
      <p className="case-study-toc-label">{label}</p>
      <ol>
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(isActive && "is-active")}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="case-study-toc-num">{s.num}</span>
                <span className="case-study-toc-text">{compact ? shortTitle(s.title) : s.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CaseStudyToc;
