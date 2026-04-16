import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "\"C'est encore du coaching déguisé, non ?\"",
    a: "Non. Le mot \"coaching\" n'apparaît pas dans le protocole. Le coaching travaille sur la couche consciente — vos pensées, vos croyances. Le Protocole APEX intervient sur la couche biologique (votre SNA), la couche identitaire (votre câblage) et la couche décisionnelle (votre architecture business). C'est la différence entre repeindre les murs et traiter les fondations.",
  },
  {
    q: "\"15 000€ c'est beaucoup d'argent.\"",
    a: "C'est 15 000€ versus 15 000€ à 50 000€ par mois que vous perdez en revenus non capturés. Sur 12 mois, votre bug vous coûte entre 180 000€ et 600 000€. Le protocole coûte 15 000€ une seule fois. La Garantie de Diagnostic Absolue signifie qu'à l'entrée, votre risque réel est 45 minutes.",
  },
  {
    q: "\"J'ai déjà essayé du coaching et du consulting. Ça n'a rien changé.\"",
    a: "C'est la raison pour laquelle le Protocole APEX existe. Ce que vous avez essayé traitait 2 couches sur 3 — et sans la couche biologique, les résultats ne tiennent pas. L'audit de 45 minutes démontre une profondeur diagnostique que les solutions précédentes n'avaient pas. Si elle n'est pas au rendez-vous — remboursement intégral.",
  },
  {
    q: "\"Je n'ai pas le temps de faire ça en ce moment.\"",
    a: "Le \"moment idéal\" n'arrivera pas — parce que le système qui crée le manque de temps est précisément ce que le protocole corrige. Votre investissement : 2-3 heures par semaine. Dès la semaine 6, vous récupérez 5 à 10 heures nettes. Le protocole se finance en temps avant sa fin.",
  },
  {
    q: "\"Comment je sais que ça va marcher pour MON cas ?\"",
    a: "C'est exactement pourquoi l'audit existe. En 45 minutes, nous identifions votre bug précis parmi les 4 profils documentés de Dérive Neuro-Opérationnelle. Si votre bug n'est pas identifié avec précision : remboursement. C'est la garantie.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Ce que vous vous demandez probablement.</h2>

        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="reveal border-b border-n-border group">
              <summary className="py-5 font-medium cursor-pointer flex justify-between items-center text-base list-none [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-lg text-n-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 text-n-muted text-sm max-w-[60ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
