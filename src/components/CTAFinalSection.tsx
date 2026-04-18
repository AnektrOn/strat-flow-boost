import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, ClipboardList, ArrowRight } from "lucide-react";

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

// TODO: remplacer par les vrais liens
const WHATSAPP_URL = "https://wa.me/33600000000";
const AUDIT_FORM_URL = "https://form.typeform.com/to/xxxxxx";

const options = [
  {
    name: "Contact Direct",
    icon: Mail,
    description:
      "Premier point de contact pour évaluer rapidement la pertinence d'un audit. Aucun diagnostic n'est réalisé à ce stade.",
    cta: "Envoyer un message",
    href: WHATSAPP_URL,
    accent: "muted" as const,
  },
  {
    name: "Audit Initial",
    icon: ClipboardList,
    description:
      "Session de lecture stratégique. Objectif : déterminer si le système nécessite une intervention ou non.",
    cta: "Réserver l'audit",
    href: AUDIT_FORM_URL,
    accent: "gold" as const,
  },
];

const CTAFinalSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="audit" className="section-pad text-center">
      <div className="container-nomos">
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

        <p className="reveal text-sm text-n-teal mb-12">
          Si le mécanisme exact n'est pas identifié — remboursement intégral. Sans conditions.
        </p>

        {/* Two-card contact block */}
        <div className="mb-12">
          <AuditCTABlock />
        </div>

        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2"><strong>Ce trimestre : 5 places disponibles.</strong></p>
          <p className="text-sm text-n-muted max-w-[50ch]">
            Chaque protocole est conduit en direct, 1:1, sans délégation. Si vous
            êtes sélectionné et choisissez de ne pas avancer — la place revient
            au prochain sur liste d'attente.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTAFinalSection;
