import { useScrollReveal } from "@/hooks/useScrollReveal";

type QualifyVariant = "nomos" | "ascension" | "metaphysique";

const NomosNo = [
  "Vous générez moins de 20 000€/mois ou n'avez pas d'équipe",
  "Vous cherchez encore \"la bonne formation\" ou \"le bon système de productivité\"",
  "Vous pensez que votre problème est entièrement externe",
  "Vous n'êtes pas disposé à investir 2-3 heures hebdomadaires sur 90 jours",
];

const NomosYes = [
  "Vous générez entre 20 000€ et 150 000€/mois avec une équipe de 3 à 12 personnes",
  "Vous avez déjà essayé coaching, consulting, formations — et rien n'a tenu plus de 3 mois",
  "Vous savez ce qu'il faudrait faire — et vous n'arrivez pas à tenir les changements",
  "Vous êtes prêt à traiter le problème réel, pas ses conséquences visibles",
];

const AscensionNo = [
  "Vous êtes en crise active : équipe en tension, cashflow sous pression, opérations instables — NOMOS est le bon protocole pour vous",
  "Votre business génère moins de 45 000€/mois ou ne dispose pas encore de systèmes opérationnels en place",
  "Vous cherchez des recettes rapides, un nouveau framework de productivité, ou une méthode opérationnelle",
  "Vous n'êtes pas prêt à remettre en jeu votre positionnement actuel et certaines certitudes identitaires",
  "Vous ne disposez pas de 6 mois de disponibilité régulière pour un travail structuré",
];

const AscensionYes = [
  "Votre business est stable, vos systèmes tiennent, et vous avez passé le stade où tout reposait sur vous",
  "Vous avez une vision à déployer mais elle n'est pas encore assez précise, partagée ou directrice",
  "Vous êtes prêt à refondre votre positionnement public pour qu'il corresponde à ce que vous êtes réellement devenu",
  "Vous voulez structurer votre autorité publique comme levier stratégique — pas pour la visibilité en soi",
  "Vous avez 6 mois disponibles pour un travail progressif, en profondeur, qui ne se fait pas en sprint",
];

const MetaphysiqueNo = [
  "Vous cherchez une méthode de plus, un système, un framework — l'avant-garde ne se réduit pas à une tactique",
  "Vous n'êtes pas prêt à remettre en question vos certitudes sur ce qui crée de la valeur dans votre business",
  "Vous voulez des résultats en 30 jours sans transformation de fond",
  "Vous pensez que la stratégie se limite à ce qui est mesurable et visible",
];

const MetaphysiqueYes = [
  "Vous avez épuisé les outils classiques et sentez qu'il manque une couche de lecture que vous n'avez pas encore",
  "Vous êtes prêt à travailler les dimensions invisibles : intention, timing, positionnement de fréquence",
  "Vous voulez prendre vingt ans d'avance sur votre marché — pas juste un trimestre",
  "Vous comprenez que certains avantages compétitifs ne se copient pas parce qu'ils ne se voient pas",
];

const QualifySection = ({ variant = "nomos" }: { variant?: QualifyVariant }) => {
  const ref = useScrollReveal();
  const noItems = variant === "nomos" ? NomosNo : variant === "metaphysique" ? MetaphysiqueNo : AscensionNo;
  const yesItems = variant === "nomos" ? NomosYes : variant === "metaphysique" ? MetaphysiqueYes : AscensionYes;
  const yesTitleClass = variant === "nomos" ? "text-n-teal" : "text-n-gold-warm";

  return (
    <section ref={ref} id="qualify" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          {variant === "nomos" ? (
            <>Ce protocole n'est pas pour tout le monde.</>
          ) : variant === "metaphysique" ? (
            <>
              La dimension métaphysique n'est pas pour tout le monde.<br />
              Et c'est exactement ce qui en fait la valeur.
            </>
          ) : (
            <>
              ASCENSION n'est pas pour tout le monde.<br />
              Délibérément.
            </>
          )}
        </h2>

        {variant === "metaphysique" && (
          <p className="reveal section-intro mt-4">
            Vous n'avez pas besoin d'être en crise pour candidater. Vous avez besoin de sentir qu'il y a un palier
            au-dessus — et que vous ne savez pas encore comment le lire.
          </p>
        )}

        <div className="reveal grid md:grid-cols-2 gap-8 my-10">
          <div>
            <h3 className="font-body text-lg font-semibold text-n-faint mb-4">Ne candidatez pas si :</h3>
            <ul className="flex flex-col gap-3">
              {noItems.map((li) => (
                <li key={li} className="text-sm text-n-muted pl-6 relative before:content-['✕'] before:absolute before:left-0 before:text-n-faint">
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="qualify-yes">
            <h3 className={`font-body text-lg font-semibold mb-4 ${yesTitleClass}`}>Candidatez si :</h3>
            <ul className="flex flex-col gap-3">
              {yesItems.map((li) => (
                <li
                  key={li}
                  className={`text-sm text-n-muted pl-6 relative before:content-['✓'] before:absolute before:left-0 ${
                    variant === "nomos" ? "before:text-n-teal" : "before:text-n-gold-warm"
                  }`}
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {variant === "nomos" && (
          <div className="reveal mt-12 p-8 border border-n-gold-dim rounded-lg">
            <h3 className="h-sub text-n-gold mb-3">Si vous hésitez à candidater...</h3>
            <p className="text-n-muted mb-3">
              Cette hésitation mérite d'être nommée. Elle peut être de la prudence rationnelle — et dans ce cas, c'est
              sain.
            </p>
            <p className="text-n-muted mb-3">
              Mais elle peut aussi être la signature exacte du mécanisme que nous traitons : un SNA qui résiste à toute
              proposition impliquant un changement de contrôle.
            </p>
            <p className="text-n-muted">
              La différence entre les deux ? <strong className="text-n-text">En 45 minutes d'audit, c'est la première chose que nous identifions.</strong>
            </p>
          </div>
        )}
        {variant === "metaphysique" && (
          <div className="reveal mt-12 p-8 border border-n-gold-dim rounded-lg">
            <h3 className="h-sub text-n-gold mb-3">Si vous hésitez...</h3>
            <p className="text-n-muted mb-3">
              Cette hésitation est souvent le signe que vous êtes exactement au bon endroit. Ce qui résiste à l'avant-garde,
              c'est précisément ce qui vous maintient dans l'ère précédente.
            </p>
            <p className="text-n-muted">
              La lecture métaphysique commence là :{" "}
              <strong className="text-n-text">dans les 45 premières minutes, nous nommons ce qui résiste — et pourquoi.</strong>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QualifySection;
