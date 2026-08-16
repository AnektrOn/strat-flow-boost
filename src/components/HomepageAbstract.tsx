import { useLanguage } from "@/contexts/LanguageContext";
import { FadeUp } from "@/components/motion/FadeUp";

type AbstractBlock = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  title: string;
  metricLabel: string;
  metric: string;
  blocks: AbstractBlock[];
};

const HomepageAbstract = ({
  label,
  title,
  metricLabel,
  metric,
  blocks,
}: Props) => {
  const { t } = useLanguage();

  return (
    <section id="synapse-abstract" className="section-pad py-16 sm:py-20 relative">
      <div className="container-nomos narrow">
        <FadeUp>
          <div className="homepage-abstract">
            <div className="homepage-abstract-head">
              <span className="homepage-abstract-label">{label}</span>
              <h2 className="homepage-abstract-title">{title}</h2>
            </div>

            <div className="homepage-abstract-metric">
              <span className="homepage-abstract-metric-label">{metricLabel}</span>
              <p className="homepage-abstract-metric-value">{metric}</p>
            </div>

            <dl className="homepage-abstract-grid">
              {blocks.map((b) => (
                <div key={b.label} className="homepage-abstract-row">
                  <dt>{b.label}</dt>
                  <dd>{b.value}</dd>
                </div>
              ))}
            </dl>

            <p className="homepage-abstract-footnote">{t("onboarding.abstract.footnote")}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HomepageAbstract;
