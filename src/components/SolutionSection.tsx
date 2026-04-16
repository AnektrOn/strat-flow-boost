import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Diagnostic complet",
    period: "Semaine 1",
    desc: "CEO Map. Kill List. Baseline mesurable sur 5 indicateurs. Vous repartez avec une cartographie précise de vos frictions invisibles.",
  },
  {
    num: "02",
    title: "Stabilisation neurologique",
    period: "Semaines 2–4",
    desc: "Suppression des cycles hyper-crash. Clarté stable. Fin de la surcharge décisionnelle chronique.",
  },
  {
    num: "03",
    title: "Réarchitecture décisionnelle",
    period: "Semaines 5–8",
    desc: "Decision Rights Map. Cadence < 48h. 3 SOPs sur mesure. Vous cessez d'être le point de friction central.",
  },
  {
    num: "04",
    title: "Friction audit & autorité",
    period: "Semaines 7–10",
    desc: "Suppression des goulots humains. Clarification des rôles. Votre équipe devient plus rapide sans que vous poussiez.",
  },
  {
    num: "05",
    title: "Autonomie systémique",
    period: "Semaines 10–12",
    desc: "Scorecard CEO. Weekly Operating Rhythm. Votre business fonctionne sans dépendre de votre tension.",
  },
];

const SolutionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="solution" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">Le protocole NOMOS 90</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-6">
            Une <em>intervention chirurgicale.</em>
            <br />Pas du coaching.
          </h2>
        </div>

        <div className="reveal reveal-delay-1 text-body space-y-4 mb-16">
          <p>
            Ce n'est pas de la motivation. Pas du mindset. Pas un nouveau framework stratégique.
            NOMOS opère simultanément sur deux niveaux.
          </p>
          <p>
            Parce que reconfigurer votre système sans reconfigurer le business,
            c'est remettre un moteur neuf dans une carrosserie tordue.
          </p>
        </div>

        {/* 2 levels */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-4 mb-20">
          <div className="card-surface card-surface--accent">
            <span className="text-[11px] uppercase tracking-[0.3em] text-n-gold-dim font-medium mb-4 block">
              Niveau 1 : Vous
            </span>
            <p className="text-sm text-n-muted font-light leading-relaxed">
              Stabilisation du système nerveux.
              Suppression des cycles hyper-performance / crash.
              Reconstruction de la capacité à décider vite, clairement, sans tension.
            </p>
            <p className="mt-4 punchline text-sm">→ Clarté stable en moins de 14 jours.</p>
          </div>
          <div className="card-surface card-surface--accent">
            <span className="text-[11px] uppercase tracking-[0.3em] text-n-gold-dim font-medium mb-4 block">
              Niveau 2 : Votre business
            </span>
            <p className="text-sm text-n-muted font-light leading-relaxed">
              Decision Rights Map.
              Cadence décisionnelle &lt; 48h.
              SOPs d'autorité.
            </p>
            <p className="mt-4 punchline text-sm">→ Votre équipe cesse de dépendre de votre énergie.</p>
          </div>
        </div>

        {/* 5 steps */}
        <div className="space-y-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-6 py-6 border-b border-n-border-subtle`}
            >
              <span className="font-display text-[28px] text-n-gold leading-none shrink-0 w-12">
                {s.num}
              </span>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-base font-medium text-n-text">{s.title}</h3>
                  <span className="text-[11px] text-n-subtle tracking-wider uppercase">{s.period}</span>
                </div>
                <p className="text-sm text-n-muted font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a href="#candidature" className="cta-secondary">
            Je veux identifier mon mécanisme
          </a>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default SolutionSection;
