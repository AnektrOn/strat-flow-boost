import { useScrollReveal } from "@/hooks/useScrollReveal";

const projections = [
  "Vous prenez une décision stratégique en moins de 48 heures. Sans revérifier.",
  "Vous fermez votre ordinateur le soir. Et votre cerveau s'éteint vraiment.",
  "Votre équipe avance. Sans appel. Sans validation.",
  "Votre business grandit. Pas malgré vous. Avec vous.",
];

const ProjectionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="projection" className="py-20 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">Dans 90 jours</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-12">
            Imaginez.
            <br />Votre business grandit.
            <br /><em>Et vous vous sentez calme.</em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 space-y-0 mb-12">
          {projections.map((p, i) => (
            <p
              key={i}
              className="py-4 border-b border-n-border-subtle text-[17px] text-n-muted font-light"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="reveal reveal-delay-2 text-center max-w-[480px] mx-auto">
          <p className="text-body leading-relaxed">
            Ce n'est pas une promesse.
            <br />C'est ce que nous mesurons.
            <br />Semaine après semaine.
            <br />Sur une baseline documentée.
          </p>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default ProjectionSection;
