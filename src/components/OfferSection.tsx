import { useScrollReveal } from "@/hooks/useScrollReveal";

const deliverables = [
  "Audit Neuro-Opérationnel Initial — Cartographie complète",
  "6 Interventions Stratégiques 1:1 — 90 minutes chacune",
  "Decision Rights Map sur mesure",
  "3 SOPs : Décision, Délégation, Priorisation",
  "Support Vocal Asynchrone Prioritaire — 5j/7 — 90 jours",
  "Scorecard CEO + Weekly Operating Rhythm",
  "Founder Intensive 4 jours sur site (10 premiers dossiers)",
];

const OfferSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="offre" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">L'offre NOMOS 90</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-12">
            Une <em>intervention.</em>
            <br />Pas une formation.
          </h2>
        </div>

        {/* Main offer card */}
        <div className="reveal reveal-delay-1 card-surface !p-8 md:!p-12">
          {/* Price */}
          <div className="mb-8 pb-8 border-b border-n-border-subtle">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-display text-[52px] leading-none text-n-text">15 000€</span>
              <span className="text-[22px] text-n-muted font-light">/engagement 90 jours</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-n-gold-dim">
              Programme complet · 5 dossiers max / trimestre
            </p>
          </div>

          {/* Deliverables */}
          <div className="space-y-3 mb-10">
            {deliverables.map((d) => (
              <div key={d} className="flex gap-3 text-sm text-n-muted font-light">
                <span className="text-n-gold shrink-0">✓</span>
                {d}
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-n-gold-glow border border-n-border p-6 md:p-8">
            <span className="label-gold mb-4 block">Garantie de diagnostic absolue</span>
            <p className="text-sm text-n-muted font-light leading-relaxed">
              Si, à la fin du premier appel d'audit de 45 minutes, le mécanisme exact
              qui bloque votre expansion n'est pas identifié avec précision —
              l'acompte est remboursé intégralement. Sans conditions. Sans questions.
            </p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default OfferSection;
