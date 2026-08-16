import { ChevronDown } from "lucide-react";
import type { CaseStudyAbstract as AbstractData } from "@/i18n/locales/caseStudies";

type Props = {
  data: AbstractData;
  open: boolean;
  onToggle: () => void;
};

const CaseStudyAbstract = ({ data, open, onToggle }: Props) => {
  return (
    <section className="case-study-abstract-wrap section-pad pt-0" aria-label={data.title}>
      <div className="container-nomos narrow">
        <div className="case-study-abstract reveal">
          <div className="case-study-abstract-head">
            <span className="case-study-abstract-label">{data.label}</span>
            <h2 className="case-study-abstract-title">{data.title}</h2>
          </div>

          <dl className="case-study-abstract-grid">
            <div className="case-study-abstract-row">
              <dt>{data.profileLabel}</dt>
              <dd>{data.profile}</dd>
            </div>
            <div className="case-study-abstract-row">
              <dt>{data.problemLabel}</dt>
              <dd>{data.problem}</dd>
            </div>
            <div className="case-study-abstract-row">
              <dt>{data.interventionLabel}</dt>
              <dd>{data.intervention}</dd>
            </div>
          </dl>

          <div className="case-study-abstract-result">
            <span className="case-study-abstract-result-label">{data.resultLabel}</span>
            <p className="case-study-abstract-result-value">{data.result}</p>
          </div>

          <dl className="case-study-abstract-grid">
            {data.break && data.breakLabel && (
              <div className="case-study-abstract-row case-study-abstract-row--break">
                <dt>{data.breakLabel}</dt>
                <dd>{data.break}</dd>
              </div>
            )}
            <div className="case-study-abstract-row case-study-abstract-row--proof">
              <dt>{data.proofLabel}</dt>
              <dd>{data.proof}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={onToggle}
            className="case-study-abstract-toggle"
            aria-expanded={open}
            aria-controls="case-study-clinical"
          >
            <span>{data.cta}</span>
            <ChevronDown className={`case-study-abstract-chevron ${open ? "is-open" : ""}`} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyAbstract;
