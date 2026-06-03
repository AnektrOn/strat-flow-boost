import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type SolutionRow = { sol: string; treat: string; ignore: string; why: string };

const SolutionsSection = () => {
  const ref = useScrollReveal();
  const { t, getTr } = useLanguage();
  const headers = getTr("nomos.solutions.tableHeaders") as string[];
  const rows = getTr("nomos.solutions.rows") as SolutionRow[];
  const apexRow = getTr("nomos.solutions.apexRow") as SolutionRow;

  return (
    <section ref={ref} id="solutions" className="section-pad section-dark">
      <div className="container-nomos">
        <h2 className="reveal h-section">
          {t("nomos.solutions.title")}
          <br />
          {t("nomos.solutions.titleLine2")}
        </h2>
        <p className="reveal section-intro">{t("nomos.solutions.intro")}</p>

        <div className="reveal overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {headers.map((h) => (
                  <th
                    key={h}
                    className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sol}>
                  <td className="p-4 border-b border-n-border text-n-text align-top font-semibold">
                    {r.sol}
                  </td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.treat}</td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.ignore}</td>
                  <td className="p-4 border-b border-n-border text-n-muted align-top">{r.why}</td>
                </tr>
              ))}
              <tr style={{ background: "hsl(var(--color-teal-glow))" }}>
                <td className="p-4 border-b border-n-border text-n-teal font-semibold align-top">
                  {apexRow.sol}
                </td>
                <td className="p-4 border-b border-n-border text-n-teal font-medium align-top">
                  {apexRow.treat}
                </td>
                <td className="p-4 border-b border-n-border text-n-teal align-top">{apexRow.ignore}</td>
                <td className="p-4 border-b border-n-border text-n-teal font-medium align-top">
                  {apexRow.why}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="reveal ref-note text-center">{t("nomos.solutions.footnote")}</p>
      </div>
    </section>
  );
};

export default SolutionsSection;
