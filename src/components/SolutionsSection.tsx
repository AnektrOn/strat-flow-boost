import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  { sol: "Coaching mindset", treat: "Pensées conscientes, croyances", ignore: "Couche biologique (SNA)", why: "\"4 mois de coaching certifié. Bilan : des insights — et les mêmes patterns 6 mois plus tard.\"" },
  { sol: "Consultants", treat: "Process, organigrammes, SOPs", ignore: "Mécanisme de sabotage interne", why: "\"Les outils étaient bons sur le papier. Trois mois plus tard, je m'étais réapproprié tout.\"" },
  { sol: "Masterminds", treat: "Sagesse collective, stratégie partagée", ignore: "Diagnostic individuel du bug", why: "Un pair brillant peut vous inspirer. Il ne peut pas diagnostiquer votre câblage individuel." },
  { sol: "Livres & formations", treat: "Connaissance, frameworks", ignore: "Ancrage neurologique", why: "Vous avez déjà les frameworks. Vous les avez appliqués 3 semaines. Retour au point de départ." },
  { sol: "Vacances / Biohacking", treat: "Symptômes de surcharge", ignore: "Architecture décisionnelle", why: "\"J'ai pris une semaine off. Le troisième jour, j'avais répondu à 40 mails.\"" },
];

const SolutionsSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="solutions" className="section-pad section-dark">
      <div className="container-nomos">
        <h2 className="reveal h-section">
          Vous avez tout essayé. Rien n'a tenu.<br />Voici pourquoi c'est mécanique.
        </h2>
        <p className="reveal section-intro">
          Vous n'avez pas mal exécuté. Les solutions que vous avez essayées avaient
          raison sur ce qu'elles faisaient — et tort sur ce qu'elles ne faisaient pas.
        </p>

        <div className="reveal overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {["Solution", "Ce qu'elle traite", "Ce qu'elle ignore", "Pourquoi ça ne tient pas"].map((h) => (
                  <th key={h} className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sol}>
                  <td className="p-4 border-b border-n-border text-n-text align-top font-semibold">{r.sol}</td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.treat}</td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.ignore}</td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.why}</td>
                </tr>
              ))}
              <tr style={{ background: "hsl(var(--color-teal-glow))" }}>
                <td className="p-4 border-b border-n-border text-n-teal font-semibold align-top">Protocole APEX™</td>
                <td className="p-4 border-b border-n-border text-n-teal font-medium align-top">Les 3 couches simultanément</td>
                <td className="p-4 border-b border-n-border text-n-teal align-top">—</td>
                <td className="p-4 border-b border-n-border text-n-teal font-medium align-top">Biologique + Identitaire + Décisionnel. Le tabouret complet.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="reveal ref-note text-center">
          Résoudre 2 couches sur 3, c'est retirer 2 jambes d'un tabouret à 3 pieds. Ça ne tient pas.
        </p>
      </div>
    </section>
  );
};

export default SolutionsSection;
