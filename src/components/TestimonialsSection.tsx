import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    role: "CEO · Agence Marketing",
    metric: "65 000€/mois · 8 personnes",
    bug: "Dérive de type \"Sur-contrôle Défensif\" — 3 décisions bloquées en permanence, 65h/semaine.",
    results: [
      { num: "+18%", label: "Marge en 90 jours" },
      { num: "-10h", label: "Par semaine" },
      { num: "3×25k€", label: "Contrats signés en 2 semaines" },
    ],
    quote: "Je pensais avoir un problème de lead gen. En réalité, je bloquais inconsciemment ma croissance. Une fois le mécanisme corrigé, on a signé 3 contrats à 25 000€ en deux semaines. Sans changer d'offre.",
  },
  {
    role: "Fondateur · SaaS",
    metric: "42 000€ MRR · 5 personnes",
    bug: "Dérive de type \"Goulot Décisionnel Chronique\" — recrutement bloqué 4 mois, charge mentale 8/10.",
    results: [
      { num: "8→4", label: "Charge mentale /10" },
      { num: "-3", label: "Boucles hiérarchiques" },
      { num: "3 sem.", label: "Recrutement validé (bloqué 4 mois)" },
    ],
    quote: "Mon équipe est bonne. Mais le système l'empêchait d'être autonome. Une fois l'architecture installée, j'ai arrêté d'être indispensable.",
  },
  {
    role: "Infopreneur",
    metric: "90 000€/mois · 4 collaborateurs",
    bug: "Dérive de type \"Cycle Hyper-Crash\" — 0% délégation delivery, décisions à 3 semaines.",
    results: [
      { num: "30j", label: "Sorti du cycle hyper-crash" },
      { num: "100%", label: "Délégation du delivery" },
      { num: "10 min", label: "Décisions (vs 3 semaines)" },
    ],
    quote: "Les décisions qui me prenaient 3 semaines me prennent maintenant 10 minutes. Ce n'était pas un problème de courage. C'était un problème de câblage.",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="proof" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Ce que ça ressemble en données réelles.</h2>

        {testimonials.map((t) => (
          <div key={t.role} className="reveal border border-n-border rounded-lg p-8 mb-8">
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <span className="font-semibold text-sm">{t.role}</span>
              <span className="text-xs text-n-muted">{t.metric}</span>
            </div>
            <p className="text-sm text-n-muted mb-6">
              <strong className="text-n-text">Bug identifié :</strong> {t.bug}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {t.results.map((r) => (
                <div key={r.label} className="text-center p-4 bg-n-surface-2 rounded">
                  <span className="block text-xl font-bold text-n-teal leading-tight">
                    {r.num}
                  </span>
                  <span className="text-xs text-n-muted">{r.label}</span>
                </div>
              ))}
            </div>
            <blockquote className="bq-teal">{t.quote}</blockquote>
          </div>
        ))}

        <div className="reveal text-center mt-8">
          <a href="#audit" className="btn-primary">Je veux ces résultats</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
