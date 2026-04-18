import { useScrollReveal } from "@/hooks/useScrollReveal";

type Level = { tag: string; body: React.ReactNode };

const levels: Level[] = [
  {
    tag: "Le corps d'abord.",
    body: <p>80h/semaine. Des chaussettes de contention. Un dos qui lâche. Un cerveau qui ne s'éteint pas quand l'ordinateur se ferme.</p>,
  },
  {
    tag: "Puis les émotions.",
    body: (
      <p>
        L'anxiété de fond du dimanche soir. La frustration de travailler autant pour une liberté aussi étroite. Les cycles —{" "}
        <em>"Je donne tout pendant 2 mois. Et puis je m'effondre."</em>
      </p>
    ),
  },
  {
    tag: "Puis les relations.",
    body: (
      <>
        <blockquote className="bq">
          "Ma femme dit que je suis là sans être là. Elle a raison. Quand t'es à
          table et que tu penses à un client, t'es pas vraiment là."
        </blockquote>
        <p className="italic text-n-muted text-sm mt-2">"Papa il est toujours sur son téléphone." — Léa, 7 ans.</p>
      </>
    ),
  },
  {
    tag: "Puis le portefeuille.",
    body: (
      <p>
        Vous générez 600k€/an et vous vous payez comme un DG salarié sans les
        avantages. Votre bug actif vous coûte entre{" "}
        <strong className="text-n-text">15 000€ et 50 000€ par mois</strong> en
        revenus non capturés.
      </p>
    ),
  },
  {
    tag: "Puis le temps qui passe.",
    body: (
      <>
        <blockquote className="bq">
          "Il y a six mois, je bossais 70 heures par semaine et j'en étais fier.
          Puis j'ai réalisé que j'avais plus de boulot que jamais et que mon
          business ne s'était pas développé d'un centime de plus."
        </blockquote>
      </>
    ),
  },
  {
    tag: "Et enfin, l'identité.",
    body: (
      <>
        <blockquote className="bq">
          "Le truc qui me tue le plus c'est que je sais ce qu'il faudrait faire.
          J'ai lu les bouquins. J'ai les frameworks. Mais il y a quelque chose
          qui fait que j'arrive pas à tenir les changements plus de 3 semaines."
        </blockquote>
        <p className="mt-3">
          Ce n'est pas un manque de savoir. C'est l'écart entre le CEO stratège
          que vous voulez être — et le pompier réactif que le système vous force à être.
        </p>
      </>
    ),
  },
];

const SufferingSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="suffering" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Ce que ça coûte vraiment.<br />Au-delà des chiffres.
        </h2>
        <div className="flex flex-col gap-10 mt-8 text-n-muted">
          {levels.map((l) => (
            <div key={l.tag} className="reveal border-l-2 border-n-border pl-6">
              <span className="block font-semibold text-sm uppercase tracking-wider text-n-gold mb-3">
                {l.tag}
              </span>
              {l.body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SufferingSection;
