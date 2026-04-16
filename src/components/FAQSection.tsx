import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Pourquoi pas un COO ?",
    a: "Un COO exécute et optimise le système existant. Sans stabilité interne et architecture décisionnelle, le COO devient un tampon. Nous recalibrons le centre décisionnel et le système.",
  },
  {
    q: "Pourquoi pas un consultant ops ?",
    a: "Un consultant touche aux process. Nous touchons au centre de gravité : décisions, autorité, frictions humaines.",
  },
  {
    q: "Pourquoi pas un coach mindset ?",
    a: "La motivation ne supprime pas les boucles décisionnelles. Nous installons des systèmes mesurables.",
  },
  {
    q: "Comment mesurez-vous ?",
    a: "Baseline initiale + Scorecard : charge mentale, délai décision, urgences hebdo, boucles de validation, heures CEO, friction équipe (et selon cas : marge / priorités / cadence).",
  },
  {
    q: "Et si mon équipe résiste ?",
    a: "La résistance signale une incohérence d'autorité. Elle est intégrée au diagnostic et traitée à la source.",
  },
  {
    q: "Je suis souvent en déplacement ?",
    a: "Interventions hybrides. Immersion planifiée stratégiquement.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-light py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="label-gold mb-8 block">Questions fréquentes</span>
          <h2 className="heading-main">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-gold-left pl-8 py-6 cursor-pointer animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 6)}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 opacity-40 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-4 text-sm font-light opacity-60 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Ce que ce programme n'est pas / est */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="animate-fade-up">
            <h3 className="text-xl font-light mb-6 uppercase tracking-widest opacity-40">Ce que ce programme n'est pas</h3>
            <ul className="space-y-3 text-sm font-light opacity-50">
              <li>• une solution de crise</li>
              <li>• une thérapie</li>
              <li>• une motivation temporaire</li>
              <li>• un consulting PowerPoint</li>
            </ul>
          </div>
          <div className="animate-fade-up animate-fade-up-delay-2">
            <h3 className="text-xl font-light mb-6 uppercase tracking-widest gold-accent">Ce que c'est</h3>
            <p className="text-sm font-light opacity-60 leading-relaxed">
              Une restructuration du système à travers le leader, installée, mesurée, stabilisée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
