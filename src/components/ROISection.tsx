import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  { label: "Ce mois", value: "15 000 à 50 000€ de revenus non capturés" },
  { label: "Sur 90 jours", value: "45 000 à 150 000€" },
  { label: "Sur 12 mois", value: "180 000 à 600 000€" },
];

const ROISection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          La vraie question n'est pas "ai-je les moyens ?"
        </h2>
        <p className="reveal section-intro">Faites le calcul.</p>

        <div className="reveal my-8">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border">
              <span className="font-medium text-sm">{r.label}</span>
              <span className="text-sm text-n-muted text-right">{r.value}</span>
            </div>
          ))}
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2"
            style={{ background: "hsl(var(--color-teal-glow))" }}
          >
            <span className="font-semibold text-sm text-n-teal">Investissement Protocole APEX™</span>
            <span className="text-sm text-n-teal text-right font-semibold">15 000€ — une seule fois</span>
          </div>
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2"
            style={{ background: "hsl(var(--color-teal-glow))" }}
          >
            <span className="font-semibold text-sm text-n-teal">ROI conservateur</span>
            <span className="text-sm text-n-teal text-right font-semibold">12:1</span>
          </div>
        </div>

        <p className="reveal font-display text-xl text-center my-10">
          <strong>Ai-je les moyens de ne pas le faire ?</strong>
        </p>

        <blockquote className="reveal bq-gold">
          "C'était tellement une douleur avant de me faire accompagner que quand
          vous m'avez dit le prix c'était 'où est-ce que je signe ?' Le coût
          d'inaction pour moi est monstrueux." — Quentin, CEO
        </blockquote>

        <p className="reveal text-sm text-n-muted text-center mt-6">
          Pendant que vous lisez ceci, votre bug actif vous coûte entre 500€ et
          1 600€ aujourd'hui. Pas en théorie. En revenus non capturés.
        </p>
      </div>
    </section>
  );
};

export default ROISection;
