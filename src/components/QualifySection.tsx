import { useScrollReveal } from "@/hooks/useScrollReveal";

const no = [
  "Vous générez moins de 20 000€/mois ou n'avez pas d'équipe",
  "Vous cherchez encore \"la bonne formation\" ou \"le bon système de productivité\"",
  "Vous pensez que votre problème est entièrement externe",
  "Vous n'êtes pas disposé à investir 2-3 heures hebdomadaires sur 90 jours",
];

const yes = [
  "Vous générez entre 20 000€ et 150 000€/mois avec une équipe de 3 à 12 personnes",
  "Vous avez déjà essayé coaching, consulting, formations — et rien n'a tenu plus de 3 mois",
  "Vous savez ce qu'il faudrait faire — et vous n'arrivez pas à tenir les changements",
  "Vous êtes prêt à traiter le problème réel, pas ses conséquences visibles",
];

const QualifySection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="qualify" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Ce protocole n'est pas pour tout le monde.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="reveal">
            <h3 className="h-sub text-n-faint mb-4">Ne candidatez pas si :</h3>
            <ul className="flex flex-col gap-3">
              {no.map((it) => (
                <li key={it} className="text-sm text-n-muted relative pl-6 before:content-['✕'] before:absolute before:left-0 before:text-n-faint">
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal reveal-delay-1">
            <h3 className="h-sub text-n-teal mb-4">Candidatez si :</h3>
            <ul className="flex flex-col gap-3">
              {yes.map((it) => (
                <li key={it} className="text-sm text-n-muted relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-n-teal">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-12 p-8 border border-n-gold-dim rounded-lg">
          <h3 className="h-sub text-n-gold mb-4">Si vous hésitez à candidater...</h3>
          <p className="text-n-muted mb-3">
            Cette hésitation mérite d'être nommée. Elle peut être de la prudence
            rationnelle — et dans ce cas, c'est sain.
          </p>
          <p className="text-n-muted mb-3">
            Mais elle peut aussi être la signature exacte du mécanisme que nous
            traitons : un SNA qui résiste à toute proposition impliquant un
            changement de contrôle.
          </p>
          <p className="text-n-muted">
            La différence entre les deux ?{" "}
            <strong className="text-n-text">
              En 45 minutes d'audit, c'est la première chose que nous identifions.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualifySection;
