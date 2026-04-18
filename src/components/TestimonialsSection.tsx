import { useScrollReveal } from "@/hooks/useScrollReveal";

const results = [
  {
    role: "CEO · Agence Marketing",
    metric: "65 000€/mois · 8 personnes",
    profile: "Dérive de type \"Sur-contrôle Défensif\" — 3 décisions bloquées en permanence, 65h/semaine.",
    metrics: [
      { num: "+18%", label: "Marge en 90 jours" },
      { num: "-10h", label: "Par semaine" },
      { num: "3×25k€", label: "Contrats signés en 2 sem." },
    ],
    note: "Le mécanisme identifié : la croissance n'était pas bloquée par le marché mais par le sur-contrôle décisionnel du fondateur. Correction en 90 jours sans changement d'offre.",
  },
  {
    role: "Fondateur · SaaS",
    metric: "42 000€ MRR · 5 personnes",
    profile: "Dérive de type \"Goulot Décisionnel Chronique\" — recrutement bloqué 4 mois, charge mentale 8/10.",
    metrics: [
      { num: "8→4", label: "Charge mentale /10" },
      { num: "-3", label: "Boucles hiérarchiques" },
      { num: "3 sem.", label: "Recrutement débloqué" },
    ],
    note: "L'architecture décisionnelle absente forçait chaque micro-décision à remonter. Installation de la Decision Rights Map → autonomie équipe en 21 jours.",
  },
  {
    role: "Infopreneur",
    metric: "90 000€/mois · 4 collaborateurs",
    profile: "Dérive de type \"Cycle Hyper-Crash\" — 0% délégation delivery, décisions à 3 semaines.",
    metrics: [
      { num: "30j", label: "Sorti du cycle hyper-crash" },
      { num: "100%", label: "Délégation du delivery" },
      { num: "10 min", label: "Décisions (vs 3 semaines)" },
    ],
    note: "Le cycle 2-mois-à-fond / effondrement était maintenu par un câblage identitaire \"si je ne fais pas tout, ça s'effondre.\" Recalibration identitaire + SOPs de delivery → sortie du cycle en 30 jours.",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="proof" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Résultats de protocole.<br />Données réelles. Métriques mesurées.
        </h2>
        <p className="reveal section-intro">
          Chaque protocole produit des résultats quantifiables. Voici les données
          de 3 protocoles récents.
        </p>

        {results.map((t) => (
          <div key={t.role} className="reveal border border-n-border rounded-lg p-8 mb-8">
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <span className="font-semibold text-sm">{t.role}</span>
              <span className="text-xs text-n-muted">{t.metric}</span>
            </div>
            <p className="text-sm text-n-muted mb-6">
              <strong className="text-n-text">Profil identifié :</strong> {t.profile}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {t.metrics.map((r) => (
                <div key={r.label} className="text-center p-4 bg-n-surface-2 rounded">
                  <span className="block text-xl font-bold text-n-teal leading-tight">
                    {r.num}
                  </span>
                  <span className="text-xs text-n-muted">{r.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-n-faint italic mt-4">{t.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
