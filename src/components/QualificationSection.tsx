import { useScrollReveal } from "@/hooks/useScrollReveal";

const no = [
  "Vous générez moins de 20 000€/mois",
  "Vous cherchez un framework de productivité",
  "Vous pensez que votre problème est uniquement stratégique",
  "Vous n'êtes pas le décideur final",
];

const yes = [
  "Vous avez déjà prouvé que vous pouvez construire",
  "Vous sentez que vous tournez à 50% de vos capacités réelles",
  "Vous avez tout essayé — et quelque chose revient toujours",
  "Vous êtes prêt à reconfigurer le système, pas juste l'optimiser",
];

const QualificationSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="qualification" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal text-center mb-12">
          <span className="badge badge--danger mb-8 inline-block">⚠ Places limitées · Ce trimestre</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)]">
            Ce protocole
            <br /><em>n'est pas pour tout le monde.</em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-6 mb-12">
          {/* Don't apply */}
          <div className="card-surface !border-n-danger/20">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-n-danger font-medium mb-6">
              Ne candidatez pas si :
            </h3>
            <ul className="space-y-4">
              {no.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-n-muted font-light">
                  <span className="text-n-danger shrink-0 font-medium">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Do apply */}
          <div className="card-surface card-surface--accent">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-n-gold font-medium mb-6">
              Candidatez si :
            </h3>
            <ul className="space-y-4">
              {yes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-n-muted font-light">
                  <span className="text-n-gold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal reveal-delay-2 text-center max-w-[480px] mx-auto">
          <p className="punchline text-[15px] leading-relaxed">
            Si vous hésitez à candidater…
            <br />C'est peut-être votre mécanisme de protection qui parle.
            <br />Et c'est exactement ce que NOMOS traite.
          </p>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default QualificationSection;
