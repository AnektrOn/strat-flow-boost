import { Mail, ClipboardList, ArrowRight } from "lucide-react";

export const WHATSAPP_URL = "mailto:contact.nomosprotocol.com";
export const AUDIT_FORM_URL = "https://form.typeform.com/to/p5bvUgrf";

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

const AuditCTABlock = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-[920px] mx-auto text-left">
      {options.map((o) => {
        const isGold = o.accent === "gold";
        const Icon = o.icon;
        return (
          <div
            key={o.name}
            className={`reveal flex flex-col p-8 rounded-lg border bg-n-surface transition-colors ${
              isGold
                ? "border-n-gold-dim hover:border-n-gold"
                : "border-n-border hover:border-n-muted"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 ${
                isGold
                  ? "border-n-gold text-n-gold"
                  : "border-n-border text-n-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>

            <p className="font-display text-2xl text-n-text mb-3 tracking-[0.05em] uppercase">
              {o.name}
            </p>

            <p className="text-sm text-n-muted mb-8 flex-1">{o.description}</p>

            <a
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-between gap-3 px-5 py-3 border text-xs tracking-[0.15em] uppercase transition-colors ${
                isGold
                  ? "border-n-gold text-n-gold hover:bg-n-gold/10"
                  : "border-n-border text-n-text hover:border-n-muted"
              }`}
            >
              <span>{o.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export const AuditIntroHeader = () => (
  <div className="reveal text-center max-w-[640px] mx-auto mb-10">
    <h3 className="h-sub mb-2">Initier l'audit stratégique</h3>
    <p className="text-sm text-n-muted mb-6">(45 min)</p>
    <p className="text-sm text-n-text mb-4">Vous repartez avec :</p>
    <ul className="flex flex-col gap-2 text-sm text-n-muted text-left inline-block mx-auto">
      <li>✔ Lecture des 3 frictions systémiques majeures</li>
      <li>✔ Identification des écarts décision / exécution</li>
      <li>✔ Clarté sur le niveau réel de désalignement</li>
      <li>✔ Décision : intervention NOMOS pertinente ou non</li>
    </ul>
  </div>
);

export default AuditCTABlock;
