import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import type { CaseStudyGlossary } from "@/i18n/locales/caseStudies";
import { cn } from "@/lib/utils";

type CaseStudyGlossaryPanelProps = {
  glossary: CaseStudyGlossary;
  ariaLabel: string;
  variant?: "sidebar" | "sheet";
  defaultOpenGroups?: number;
  className?: string;
};

const CaseStudyGlossaryPanel = ({
  glossary,
  ariaLabel,
  variant = "sidebar",
  defaultOpenGroups = 1,
  className,
}: CaseStudyGlossaryPanelProps) => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      glossary.groups.map((g, i) => [g.title, i < defaultOpenGroups]),
    ),
  );

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isSheet = variant === "sheet";

  return (
    <aside
      className={cn(
        isSheet ? "case-study-glossary-sheet" : "case-study-glossary reveal",
        !isSheet && "case-study-glossary-sidebar",
        className,
      )}
      aria-label={ariaLabel}
    >
      <div className={cn("case-study-glossary-inner", isSheet && "case-study-glossary-inner-sheet")}>
        <div className="case-study-glossary-header">
          <BookOpen className="case-study-glossary-icon" aria-hidden />
          <h2 className="case-study-glossary-title">{glossary.title}</h2>
        </div>
        {glossary.groups.map((group, groupIndex) => {
          const isOpen = openGroups[group.title] ?? groupIndex === 0;
          const panelId = `glossary-${group.title.replace(/\s+/g, "-")}`;
          return (
            <section key={group.title} className="case-study-glossary-group">
              <button
                type="button"
                className="case-study-glossary-group-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleGroup(group.title)}
              >
                <span className="case-study-glossary-group-title">{group.title}</span>
                <ChevronDown
                  className={cn("case-study-glossary-chevron", isOpen && "case-study-glossary-chevron-open")}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                className={cn("case-study-glossary-panel", isOpen && "case-study-glossary-panel-open")}
                aria-hidden={!isOpen}
              >
                <dl className="case-study-glossary-list">
                  {group.entries.map((entry) => (
                    <div key={entry.term} className="case-study-glossary-entry">
                      <dt>{entry.term}</dt>
                      <dd>{entry.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
};

export default CaseStudyGlossaryPanel;
