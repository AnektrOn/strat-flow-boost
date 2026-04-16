import { useScrollReveal } from "@/hooks/useScrollReveal";

const FutureSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Imaginez. Pas dans 5 ans.<br />Dans 90 jours.
        </h2>

        <div className="my-10 space-y-4">
          <p className="reveal text-n-text font-medium">Mardi matin. 8h15. Vous avez dormi 7 heures d'un seul bloc.</p>
          <p className="reveal text-n-muted">Vous ouvrez votre ordinateur. Le Dashboard AEGIS affiche votre score de clarté mentale : 7.4/10, en hausse depuis 3 semaines. Votre équipe a traité les 4 décisions opérationnelles du lundi sans vous pinger.</p>
          <p className="reveal text-n-muted">Il y a une décision stratégique à prendre : un partenariat à 80 000€. Vous y réfléchissez 20 minutes. Vous avez la tête claire, le contexte complet. Vous décidez. La décision est prise avant 9h.</p>
          <p className="reveal text-n-muted">À 12h30, vous fermez l'ordinateur et vous déjeunez avec votre fils. Votre téléphone est en mode silencieux. Vous n'avez pas vérifié Slack une seule fois pendant le repas.</p>
          <p className="reveal text-n-muted">L'après-midi, 3 heures de travail stratégique. Pas de réunion d'urgence. Pas de livrable repris. Trois heures de pensée nette sur les 90 prochains jours du business.</p>
          <p className="reveal text-n-muted">Le soir, 18h30. Vous fermez l'ordinateur. Votre cerveau fait la même chose. Le système tourne. Vous, vous existez en dehors de lui.</p>
        </div>

        <div className="reveal mt-10 p-8 bg-n-surface border border-n-border rounded-lg">
          <p className="text-n-text mb-3"><strong>Ce n'est pas une promesse. C'est ce que nous mesurons.</strong></p>
          <p className="text-n-muted">
            Clarté mentale +4 points en moyenne entre J0 et J+90. Charge
            opérationnelle -12h/semaine. Vitesse décisionnelle : de 5-7 jours à
            moins de 48h. Ce sont des courbes, pas des témoignages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
