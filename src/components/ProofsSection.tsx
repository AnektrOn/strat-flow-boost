import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    profile: "CEO · Agence marketing",
    revenue: "65k€/mois",
    metrics: [
      { value: "5j → 36h", label: "Temps de décision moyen" },
      { value: "+18%", label: "Marge en 90 jours" },
      { value: "−10h", label: "De travail par semaine" },
    ],
    quote:
      "Je pensais avoir un problème de lead gen. En réalité, je bloquais inconsciemment ma croissance. Une fois le mécanisme corrigé, on a signé 3 contrats à 25 000€ en deux semaines. Sans changer d'offre.",
  },
  {
    profile: "Fondateur · SaaS",
    revenue: "42k€ MRR",
    metrics: [
      { value: "8/10 → 4/10", label: "Charge mentale" },
      { value: "−3", label: "Boucles hiérarchiques supprimées" },
      { value: "3 sem.", label: "Recrutement clé validé (bloqué 4 mois)" },
    ],
    quote:
      "Mon équipe est bonne. Mais le système l'empêchait d'être autonome. Une fois l'architecture installée, j'ai arrêté d'être indispensable.",
  },
  {
    profile: "Infopreneur",
    revenue: "90k€/mois",
    metrics: [
      { value: "30j", label: "Sorti du cycle hyper-crash" },
      { value: "100%", label: "Délégation du delivery" },
    ],
    quote:
      "J'ai arrêté de forcer. Les décisions qui me prenaient 3 semaines me prennent maintenant 10 minutes. Ce n'était pas un problème de courage. C'était un problème de câblage.",
  },
];

const ProofsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="preuves" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">Résultats documentés</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-12">
            Ils n'ont pas appris plus.
            <br /><em>Ils ont été recalibrés.</em>
          </h2>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 3)} card-surface`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Left: profile */}
                <div className="md:border-r md:border-n-border-subtle md:pr-10 shrink-0 md:w-48">
                  <span className="text-sm text-n-muted block">{c.profile}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-n-subtle">{c.revenue}</span>
                </div>

                {/* Right: metrics + quote */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-6 mb-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="font-display text-[28px] text-n-gold-bright leading-none block">
                          {m.value}
                        </span>
                        <span className="text-[12px] text-n-subtle tracking-wider">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="punchline text-[15px] leading-relaxed">
                    "{c.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default ProofsSection;
