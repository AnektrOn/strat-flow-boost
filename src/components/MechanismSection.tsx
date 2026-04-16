import { useScrollReveal } from "@/hooks/useScrollReveal";

const grid = [
  { title: "Neurologique", items: ["Rumination nocturne", "Fatigue cognitive constante", "Brain fog malgré le repos", "Doutes malgré le succès"] },
  { title: "Décisionnel", items: ["Décisions à 3-5 jours", "Recrutement défensif", "Surcontrôle involontaire", "Évitement des décisions risquées"] },
  { title: "Opérationnel", items: ["Équipe dépendante", "Tout remonte à vous", "Marge qui stagne", "Opportunités non saisies"] },
  { title: "Personnel", items: ["Cerveau qui ne coupe pas", "Dimanche soir d'anxiété", "Absence mentale à table", "Vous n'êtes plus là"] },
];

const MechanismSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="mechanism" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Chaque euro généré se paie en tension.<br />Voici pourquoi c'est mécanique.
        </h2>
        <p className="reveal section-intro">
          Ce que vous vivez n'est pas une crise de croissance. Ce n'est pas un
          burn-out. Ce n'est pas un problème de management. C'est un mécanisme
          biologique précis, reproductible — et identifiable.
        </p>

        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="font-display text-xl text-n-teal mb-4">
            La Dérive Neuro-Opérationnelle™
          </h3>
          <p className="text-n-text">
            L'état progressif et invisible dans lequel le système nerveux du
            dirigeant, non recalibré pour son niveau de revenu et de complexité
            actuel, convertit chaque tentative de croissance en surcharge — et
            chaque surcharge en plafond.
          </p>
        </div>

        <div className="space-y-4 text-n-muted">
          <p className="reveal">
            Concrètement : quand vous avez démarré votre business à 20 000€/mois,
            contrôler chaque décision était la bonne stratégie. Votre système
            nerveux autonome (SNA) a enregistré l'équation :{" "}
            <strong className="text-n-text">contrôle = sécurité.</strong>
          </p>
          <p className="reveal">
            Aujourd'hui, vous générez 5 fois plus. Mais votre SNA tourne encore
            sur l'équation de 2018. Chaque tentative de délégation déclenche une
            alarme biologique. Pas symbolique — biologique. Cortisol. Vigilance.
            Reprise.
          </p>
          <p className="reveal">
            Le cortex préfrontal — siège de la pensée stratégique — se dégrade
            sous charge allostatique chronique{" "}
            <span className="text-xs text-n-faint">(Arnsten, 2009)</span>.
            Résultat documenté : lenteur décisionnelle, sur-contrôle, évitement
            inconscient de l'expansion.
          </p>
          <p className="reveal text-n-text">
            <strong>
              C'est une boucle fermée. Hermétiquement fermée. Et elle ne s'ouvre
              pas de l'intérieur.
            </strong>
          </p>
        </div>

        <blockquote className="reveal bq-gold">
          "Je suis le pire ennemi de ma propre boîte. Je le sais. Je vois le
          problème mais je n'arrive pas à en sortir depuis l'intérieur."
        </blockquote>

        <p className="reveal ref-note mt-8">
          Un système ne peut pas être corrigé depuis le niveau de conscience qui
          l'a créé.
        </p>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 p-8 bg-n-surface-2 border border-n-border rounded-lg">
          {grid.map((col) => (
            <div key={col.title}>
              <h4 className="text-n-teal text-sm font-semibold uppercase tracking-wider mb-3">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.items.map((it) => (
                  <li key={it} className="text-sm text-n-muted relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-n-faint">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-n-teal font-medium mt-4">
          Si vous reconnaissez 6 lignes ou plus — vous avez une Dérive
          Neuro-Opérationnelle active.
        </p>
      </div>
    </section>
  );
};

export default MechanismSection;
