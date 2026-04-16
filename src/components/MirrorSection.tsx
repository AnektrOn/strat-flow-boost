import { useScrollReveal } from "@/hooks/useScrollReveal";

const mirrorItems = [
  "Le soir, vous fermez l'ordinateur. Votre cerveau, lui, continue.",
  "Vous dormez. Mais au réveil, vous n'êtes pas vraiment reposé.",
  "Vous déléguez. Et 48h après, vous reprenez.",
  "Vous prenez des décisions en réaction, pas en vision.",
  "Tout remonte encore à vous. Tout.",
  "Vous vous dites \"je peux encore pousser.\" Mais à quel prix ?",
];

const MirrorSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="miroir" className="py-20 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">Vous reconnaissez-vous ?</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-6">
            Ce n'est pas un manque
            <br />de discipline.
            <br /><em>C'est votre câblage.</em>
          </h2>
          <p className="text-body mb-12">
            À partir d'un certain niveau de revenu, quelque chose change.
            Le business tourne. Les chiffres sont là. Mais vous, vous êtes saturé.
          </p>
        </div>

        {/* Mirror list */}
        <div className="reveal reveal-delay-1 mb-12">
          {mirrorItems.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 py-[18px] border-b border-n-border-subtle text-[17px] text-n-muted font-light"
            >
              <span className="text-n-gold shrink-0">—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="reveal reveal-delay-2 card-surface card-surface--accent">
          <p className="punchline text-[clamp(18px,2.5vw,26px)] leading-relaxed">
            "Ce n'est pas un problème de stratégie.
            C'est un problème de stabilité neurologique.
            Et aucune stratégie externe ne peut résoudre
            un problème interne."
          </p>
        </blockquote>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default MirrorSection;
