import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  {
    approach: "Consultants / Agences",
    does: "Ajoutent des process et outils",
    fails: "Alourdissent un système qui surchauffe déjà",
    highlight: false,
  },
  {
    approach: "Coachs mindset",
    does: "Pensée positive, méditation",
    fails: "Traitent le symptôme, pas la cause structurelle",
    highlight: false,
  },
  {
    approach: "Mentors business",
    does: "Partagent leurs stratégies",
    fails: "Optimisent le système existant, ne le réécrivent pas",
    highlight: false,
  },
  {
    approach: "NOMOS",
    does: "Met à jour le système d'exploitation interne",
    fails: "Supprime la cause, pas le symptôme",
    highlight: true,
  },
];

const FalseSolutionsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="fausses-solutions" className="py-20 md:py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <span className="label-gold mb-8 block">Les fausses solutions</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-6">
            Vous avez tout essayé.
            <br /><em>Rien n'a tenu.</em>
          </h2>
          <p className="text-body mb-12">
            Pas parce que ces solutions sont mauvaises.
            Parce qu'elles traitent toutes les symptômes.
            Pas la cause.
          </p>
        </div>

        {/* Table */}
        <div className="reveal reveal-delay-1 overflow-x-auto mb-12">
          <table className="w-full text-left text-sm font-light">
            <thead>
              <tr className="border-b border-n-border">
                <th className="py-3 pr-4 text-[11px] uppercase tracking-[0.2em] text-n-subtle font-medium">Approche</th>
                <th className="py-3 pr-4 text-[11px] uppercase tracking-[0.2em] text-n-subtle font-medium">Ce qu'elle fait</th>
                <th className="py-3 text-[11px] uppercase tracking-[0.2em] text-n-subtle font-medium">Pourquoi elle échoue</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.approach}
                  className={`border-b border-n-border-subtle ${
                    r.highlight
                      ? "bg-n-gold-glow border-l-[3px] border-l-n-gold"
                      : ""
                  }`}
                >
                  <td className={`py-4 pr-4 ${r.highlight ? "text-n-text font-medium pl-4" : "text-n-muted"}`}>
                    {r.approach}
                  </td>
                  <td className={`py-4 pr-4 ${r.highlight ? "text-n-text pl-0" : "text-n-muted"}`}>
                    {r.does}
                  </td>
                  <td className={`py-4 ${r.highlight ? "text-n-gold-bright font-medium" : "text-n-muted"}`}>
                    {r.fails}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quote */}
        <div className="reveal reveal-delay-2 text-center max-w-[600px] mx-auto">
          <p className="punchline text-[clamp(18px,2.5vw,24px)] leading-relaxed">
            "Un système ne peut pas être corrigé
            depuis le niveau de conscience qui l'a créé."
          </p>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default FalseSolutionsSection;
