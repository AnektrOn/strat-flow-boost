import { cn } from "@/lib/utils";
import type { PageNavSection } from "@/hooks/usePageNavSections";

type PageSectionTocProps = {
  sections: PageNavSection[];
  activeId: string;
  label: string;
  compact?: boolean;
  className?: string;
};

function shortLabel(label: string): string {
  const phase = label.match(/^Phase \d+[^—]*—\s*(.+)$/i);
  if (phase) return phase[1];
  if (label.length > 42) return `${label.slice(0, 40)}…`;
  return label;
}

const PageSectionToc = ({ sections, activeId, label, compact = false, className }: PageSectionTocProps) => {
  return (
    <nav
      className={cn("case-study-toc", compact && "case-study-toc-compact", className)}
      aria-label={label}
    >
      <p className="case-study-toc-label">{label}</p>
      <ol>
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(isActive && "is-active")}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="case-study-toc-num">{section.num}</span>
                <span className="case-study-toc-text">
                  {compact ? shortLabel(section.label) : section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default PageSectionToc;
