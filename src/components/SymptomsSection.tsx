import { useScrollReveal } from "@/hooks/useScrollReveal";

const symptoms = [
  {
    title: "Le soir, vous fermez l'ordinateur. Votre cerveau, lui, continue jusqu'à 2h du matin.",
    detail: "Pas de décision urgente. Juste le moteur qui tourne. Vous avez appris à fonctionner avec ce bruit de fond — comme on apprend à dormir avec la fenêtre ouverte.",
  },
  {
    title: "Vous dormez. Mais au réveil, vous n'êtes pas vraiment reposé.",
    detail: "La fatigue n'est pas physique — elle est cognitive. Votre cortex préfrontal a tourné pendant la nuit sur des problèmes que vous n'avez pas résolus.",
  },
  {
    title: "Vous déléguez. 48h après, vous avez repris.",
    detail: "Pas parce que votre équipe est incompétente. Parce que votre système nerveux interprète la délégation comme une menace — et déclenche automatiquement un comportement de reprise de contrôle. Ce n'est pas de la méfiance. C'est de la biologie.",
  },
  {
    title: "Vous prenez des décisions en réaction, pas en vision.",
    detail: "Les meilleures décisions stratégiques — recruter, repositionner, investir — sont reportées à \"plus tard, quand j'aurai la tête libre.\" Plus tard ne vient jamais.",
  },
  {
    title: "Tout remonte encore à vous. Tout.",
    detail: "Les recrutements, les devis, les conflits clients, les décisions à 300€. Votre équipe a appris que remonter à vous est plus rapide que décider seule.",
  },
  {
    title: "Vous vous dites \"je peux encore pousser.\" Mais à quel prix ?",
  },
];

const SymptomsSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="symptoms" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Ce n'est pas un manque de discipline.<br />C'est votre câblage.
        </h2>
        <p className="reveal section-intro">
          À partir d'un certain niveau de revenu, quelque chose change. Le business
          tourne. Les chiffres sont là. Mais vous, vous êtes saturé — et vous ne
          comprenez pas exactement pourquoi.
        </p>

        <div className="flex flex-col gap-8 my-10">
          {symptoms.map((s, i) => (
            <div key={i} className="reveal">
              <p className="font-semibold text-base mb-2">{s.title}</p>
              {s.detail && <p className="text-n-muted text-sm">{s.detail}</p>}
            </div>
          ))}
        </div>

        <blockquote className="reveal bq-gold">
          "Mon problème c'est pas le CA. Le CA croît. Mon problème c'est que chaque
          euro de plus que je génère, j'en chie proportionnellement plus. C'est
          censé marcher comment ce truc ?"
        </blockquote>

        <p className="reveal text-base text-n-muted mt-8">
          Ce n'est pas une mauvaise période. Ce n'est pas un manque de discipline —
          vous en avez plus que 99% de la population. C'est un mécanisme. Et les
          mécanismes ont un nom.
        </p>
      </div>
    </section>
  );
};

export default SymptomsSection;
