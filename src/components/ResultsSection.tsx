import { ArrowRight } from "lucide-react";

const ResultsSection = () => {
  return (
    <section className="section-dark py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 animate-fade-up">
            <span className="label-gold mb-8 block">Résultat mesurable en 90 jours</span>
            <h2 className="heading-main mb-8">
              Système plus simple,<br />
              <span className="gold-accent">plus de vitesse</span>
            </h2>
            <div className="space-y-6 text-body-light">
              <p>Moins de boucles, moins de friction, plus de vitesse.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                title: "Délai décisionnel < 48h",
                desc: "Sur les décisions clés de votre entreprise.",
              },
              {
                title: "-30 à -50% d'urgences",
                desc: "Réduction immédiate des interruptions dans votre semaine.",
              },
              {
                title: "-5 à -10h/semaine récupérées",
                desc: "Bande passante restaurée pour le CEO sur les sujets stratégiques.",
              },
              {
                title: "Délégation réelle",
                desc: "Moins de validations, plus d'autonomie pour votre équipe.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 p-8 border-gold-left animate-fade-up animate-fade-up-delay-${i + 2}`}
              >
                <div className="text-2xl gold-accent font-light">{item.title}</div>
                <p className="text-sm opacity-40 mt-2 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + livrables audit */}
        <div className="mt-20 max-w-3xl animate-fade-up animate-fade-up-delay-3">
          <a href="#access" className="cta-link group mb-8 inline-flex">
            <span>Initier l'audit stratégique (45 min)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
          <div className="mt-8 space-y-2 text-sm font-light opacity-50">
            <p>Vous repartez avec :</p>
            <p>✔ baseline complète</p>
            <p>✔ plan 14 jours</p>
            <p>✔ cartographie des frictions invisibles</p>
          </div>
          <div className="mt-8">
            <p className="label-gold">5 dirigeants maximum / trimestre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
