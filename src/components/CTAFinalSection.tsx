import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    title: "Votre Dérive Neuro-Opérationnelle™ identifiée",
    detail: "parmi les 4 profils documentés, le vôtre est cartographié.",
  },
  {
    title: "Votre Kill List opérationnelle",
    detail: "les 3 comportements qui coûtent le plus de bande passante à votre organisation.",
  },
  {
    title: "La prochaine étape claire",
    detail: "si le Protocole APEX est adapté, vous le saurez. Sinon aussi.",
  },
];

const CTAFinalSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="audit" className="section-pad text-center">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Commencez par l'audit.<br />45 minutes. Garanti.
        </h2>

        <p className="reveal section-intro mx-auto">
          L'Audit Stratégique NOMOS n'est pas un appel de vente. C'est un
          diagnostic réel de 45 minutes avec le fondateur.
        </p>

        <div className="flex flex-col gap-6 my-10 text-left max-w-[560px] mx-auto">
          {items.map((it) => (
            <div key={it.title} className="reveal flex gap-4">
              <span className="text-n-teal text-base shrink-0">⬥</span>
              <p className="text-sm text-n-muted">
                <strong className="text-n-text">{it.title}</strong> — {it.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal text-sm text-n-teal mb-8">
          Si le mécanisme exact n'est pas identifié à la fin de ces 45 minutes — remboursement intégral. Sans conditions.
        </p>

        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2"><strong>Ce trimestre : 5 places disponibles.</strong></p>
          <p className="text-sm text-n-muted max-w-[50ch]">
            Chaque protocole est conduit en direct, 1:1, sans délégation. Si vous
            êtes sélectionné et choisissez de ne pas avancer — la place revient
            au prochain sur liste d'attente.
          </p>
        </div>

        <div className="reveal my-8">
          <a href="#audit" className="btn-primary lg">
            Candidater pour l'audit stratégique
          </a>
          <p className="text-xs text-n-faint mt-3">
            Questionnaire de pré-qualification · Audit 45 min offert · Garantie de Diagnostic Absolue
          </p>
        </div>

        <div className="reveal mt-12 pt-8 border-t border-n-border">
          <p className="text-sm text-n-muted mb-3">Pas encore prêt pour l'audit ?</p>
          <p className="text-sm text-n-muted mb-4">
            Téléchargez <strong className="text-n-text">"Le Bug Invisible™"</strong> — les 4 profils de Dérive
            Neuro-Opérationnelle qui bloquent les dirigeants 20k-150k€/mois.
          </p>
          <a href="#" className="btn-outline">Télécharger le diagnostic gratuit</a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
