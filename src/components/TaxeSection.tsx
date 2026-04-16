import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    label: "Mental",
    items: [
      "Rumination permanente",
      "Fatigue cognitive constante",
      "Sensation de cerveau plein",
      "Doutes malgré le succès",
      "Difficulté à couper le soir",
    ],
  },
  {
    label: "Opérationnel",
    items: [
      "Tout passe encore par vous",
      "Décisions à 3–5 jours",
      "Recrutement défensif",
      "Équipe dépendante",
      "Surcontrôle involontaire",
    ],
  },
  {
    label: "Business",
    items: [
      "Marge qui stagne",
      "Opportunités non saisies",
      "Complexité > profit",
      "Croissance sans liberté",
      "Peur inconsciente d'expand",
    ],
  },
  {
    label: "Personnel",
    items: [
      "Sommeil non réparateur",
      "Tension physique permanente",
      "Sensation de vide",
      "Déconnexion en famille",
      "Perte de plaisir",
    ],
  },
];

const TaxeSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="taxe" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">La taxe neurologique</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-8">
            Chaque euro généré
            <br /><em>se paie en tension.</em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 text-body space-y-6 mb-16">
          <p>
            Ce que vous vivez n'est pas une mauvaise période.
            C'est un mécanisme biologique automatique déclenché
            par la complexité croissante de votre entreprise.
            Votre cerveau l'interprète comme une menace. Et il déclenche
            ses protocoles de survie.
          </p>
          <p>
            Sur-contrôle. Micro-doute. Lenteur décisionnelle.
            Évitement inconscient de l'expansion.
            Plus vous êtes compétent… plus vous compensez.
            Donc l'entreprise continue.
            Mais elle continue sur un système saturé. Le vôtre.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((card, i) => (
            <div
              key={card.label}
              className={`reveal reveal-delay-${i + 1} card-surface`}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-n-gold-dim font-medium mb-4 block">
                {card.label}
              </span>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-n-muted font-light">
                    <span className="text-n-gold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default TaxeSection;
