import { useState } from "react";

type Lang = "fr" | "en";

const content = {
  fr: {
    brand: "NOMOS",
    title: "PROPOSITION D'INTERVENTION",
    subtitle: "Protocole NOMOS × CHORA UBUD — Ingénierie Somatique & Système AEGIS™",
    meta: "Référence : PROP-CHORA-2026-07 · Émise par PT MEMBIMBING DRACO TERBANG · Cycle d'intervention : 6 mois (180 jours) · Engagement : 270 000 000 IDR (13 000 € HT) — Tarif Partenariat",
    langLabel: "EN",
    printLabel: "Exporter en PDF",
    sections: [
      {
        h: "◈ Le constat",
        blocks: [
          { type: "p", text: "Chora n'a pas un problème d'exécution. 5 000 avis. 4,9 de moyenne. Une salle pleine. L'excellence opérationnelle est acquise — et c'est précisément pourquoi le prochain palier ne viendra pas d'elle." },
          { type: "p", text: "Votre promesse publique, elle, vise plus haut :" },
          { type: "quote", text: "« People are looking for new ways to reach altered states naturally. They want to elevate their body and mind. A holistic approach... can be a vital component of this transformation. »" },
          { type: "p", text: "Cette promesse est écrite. Notre intervention consiste à la rendre biologiquement vraie — dans l'assiette, dans la salle, et dans le système nerveux de l'équipe qui la sert. Aujourd'hui, l'écart se joue à deux niveaux :" },
          { type: "ul", items: [
            "L'exécution visible — l'esthétique, jusqu'à la présentation même des plats, peut évoluer pour traduire pleinement la dimension holistique annoncée. L'assiette et les process physiques doivent devenir le déclencheur visuel de l'état que vous promettez.",
            "L'exécution invisible — un exemple observé lors de notre échange : une équipe qui raconte des plats qu'elle n'a jamais goûtés ne les vend pas, elle les récite. Le discours holistique est là ; l'incarnation ne suit pas encore. Ce type de désalignement ne s'entend pas — il se ressent."
          ]},
          { type: "mark", text: "Il existe une contrainte biologique que ni le marketing ni le prix ne contournent : un client n'entre pas en état d'ouverture dans une salle dont l'équipe opère en surchauffe. Les micro-frictions logistiques deviennent du stress ; le stress du staff est palpable ; le client l'absorbe, et son expérience se verrouille. L'ouverture somatique du client exige l'immunité nerveuse de votre équipe." }
        ]
      },
      {
        h: "✦ La thèse d'intervention — Sekala / Niskala",
        blocks: [
          { type: "p", text: "Bali nomme depuis toujours ce que la neurophysiologie mesure aujourd'hui : le monde visible (sekala) et le monde invisible (niskala). Notre travail consiste à coder l'infrastructure de Chora sur cet équilibre — et à le convertir en indicateurs froids et mesurables : rentabilité, fluidité logistique et esthétique d'un côté ; régulation nerveuse du staff et énergie du lieu de l'autre." },
          { type: "p", text: "Concrètement, le Protocole NOMOS extrait l'intelligence opérationnelle de votre manager pour la figer dans un système autonome : le système AEGIS™ et des procédures d'autorité sur mesure. Le manager cesse d'être le système nerveux central de l'établissement — le système le devient. Libérée du micro-management, l'équipe opère depuis un espace régulé, sans entropie. C'est cette régulation, et elle seule, qui rend possibles une montée durable du panier moyen et une fidélisation qui ne dépend plus de personne." },
          { type: "p", text: "L'intervention opère simultanément sur trois couches : biologique (le système nerveux du dirigeant et de l'équipe), identitaire (l'alignement entre ce que Chora dit et ce que Chora est) et opérationnelle (l'architecture décisionnelle). Traiter une couche sans les deux autres est la raison pour laquelle les interventions classiques ne tiennent pas." }
        ]
      },
      {
        h: "◈ Le déploiement — 5 phases sur 6 mois",
        blocks: [
          { type: "em", text: "Loi d'adaptation systémique : les points d'action ci-dessous sont donnés à titre illustratif. Le protocole s'adapte à la pathologie du système, pas l'inverse — c'est l'audit en conditions réelles qui révèle les anomalies du terrain et dicte la feuille de route finale. Les livrables listés plus bas, eux, sont fermes." },
          { type: "h3", text: "Phase 1 — Onboarding & Ingénierie Stratégique (mois 1)" },
          { type: "ul", items: [
            "Audit clinique du dirigeant et structuration interne du business",
            "Cartographie archétypale (102 variables) : identification des points de surcharge opérationnelle",
            "Audit physique et humain de l'espace (sekala/niskala) : dynamique spatiale, agencement, esthétique des plats, affinités individuelles du staff",
            "Génération des schémas directeurs et du cahier des charges qui dicteront les actions des phases suivantes"
          ]},
          { type: "h3", text: "Phase 2 — Implémentation & Réalisation" },
          { type: "ul", items: [
            "Déploiement du système AEGIS™ au sein de l'équipe désignée",
            "Remplacement des scripts de vente génériques par une véritable passation d'expérience : la distribution de l'information s'adapte à l'identité du staff — l'employé passionné par la cuisine se voit confier la narration des plats, parce qu'il les vendra par sa propre résonance, pas par un script",
            "Les décisions récurrentes du manager sont figées dans des procédures claires : la prise de décision devient asynchrone, l'établissement cesse d'attendre"
          ]},
          { type: "h3", text: "Phase 3 — Redirection & Anti-Friction" },
          { type: "ul", items: [
            "Revue clinique de l'implémentation : ce qui génère de la vélocité, ce qui crée de l'entropie",
            "Recalibrage des micro-détails : position des tables, esthétique des assiettes, dynamique spatiale — suppression méthodique de toute friction visuelle ou logistique",
            "Ajustements continus sur la base des retours opérationnels"
          ]},
          { type: "h3", text: "Phase 4 — Consultations & Consolidation" },
          { type: "ul", items: [
            "La nouvelle posture devient la norme ; la fluidité logistique s'automatise",
            "L'équipe opère de manière autonome, libérée du micro-management"
          ]},
          { type: "h3", text: "Phase 5 — Expansion" },
          { type: "ul", items: [
            "Ouverture de l'architecture vers le palier suivant : nouveaux volumes, nouveaux projets — y compris l'ambition hôtelière — sans dégradation nerveuse du système"
          ]}
        ]
      },
      {
        h: "✦ Les livrables — Data de haute résolution",
        blocks: [
          { type: "p", text: "Pendant toute la durée du protocole, le système AEGIS™ agit comme le cortex auxiliaire de l'opérationnel : il cartographie la fatigue, les décisions et les dynamiques d'équipe, et génère en autonomie :" },
          { type: "ul", items: [
            "Analyse Archétypale Jungienne — deux versions à l'onboarding (rapport de base + rapport clinique), puis une nouvelle version chaque mois. Elle traque l'évolution de la posture du dirigeant et sera étendue au staff après la période de stabilisation.",
            "Pulse Knowledge Cards — minimum 100 sur la durée du protocole : des protocoles d'intervention distillés en continu, dérivés de votre semaine réelle, pour corriger l'entropie opérationnelle à mesure qu'elle apparaît.",
            "Tracker People Board Report — rapport hebdomadaire ou mensuel de la santé opérationnelle de l'équipe : affinités individuelles, frictions logistiques, signaux faibles.",
            "Neuro Health Report — suivi biométrique (humeur, sommeil, stress). Le tracking de la fatigue garantit que le leadership conserve sa clarté décisionnelle.",
            "Support continu — rétroaction clinique asynchrone de l'Architecte du protocole, pendant toute la durée du contrat, pour les ajustements immédiats face aux imprévus."
          ]}
        ]
      },
      {
        h: "◈ Le cadre — ce que cette intervention n'est pas",
        blocks: [
          { type: "ul", items: [
            "Pas une agence marketing. Nous ne vendons ni contenus, ni publicité. Nous alignons ce que Chora dit avec ce que Chora est — le marketing devient vrai, donc plus puissant.",
            "Pas du coaching, ni du team building. Une intervention structurée, conduite en direct par l'Architecte du protocole, sans délégation.",
            "Pas de promesse chiffrée. Aucun chiffre d'affaires, aucun taux de remplissage n'est garanti — notre contrat l'écrit noir sur blanc. Ce qui est garanti : les livrables listés ci-dessus, le cadre d'intervention, et votre point de décision à J+30."
          ]}
        ]
      },
      {
        h: "⚖ Architecture de paiement & d'engagement",
        blocks: [
          { type: "p", text: "Investissement total : 270 000 000 IDR (13 000 € HT) pour 6 mois d'intervention — Tarif Partenariat, dans une logique de collaboration long terme avec votre société." },
          { type: "table", head: ["Échéance", "Montant", "Équivalent", "Date"], rows: [
            ["Acompte d'amorçage (20 %) — déclenche la Phase 1. Non remboursable.", "54 000 000 IDR", "2 600 € HT", "À la signature (J1)"],
            ["Mensualité 1 (40 %) — lancement de l'implémentation. Point de Décision.", "108 000 000 IDR", "5 200 € HT", "J+30"],
            ["Mensualité 2 (40 %) — solde de la transformation", "108 000 000 IDR", "5 200 € HT", "J+60"],
            ["Total", "270 000 000 IDR", "13 000 € HT", "—"]
          ]},
          { type: "quote", text: "Le vrai engagement ne se joue pas à la signature. Il se joue à J+30. À l'issue du premier mois — l'audit complet réalisé, l'analyse archétypale et les schémas directeurs entre vos mains — vous décidez : arrêter là, sans frais supplémentaires et sans justification, ou lancer l'implémentation en réglant la Mensualité 1, qui vaut alors engagement ferme sur le solde. Vous ne financez jamais à l'aveugle. Nous ne travaillons jamais avec un client qui doute." }
        ]
      },
    ],
    footer: "PT MEMBIMBING DRACO TERBANG — NPWP : 39.582.563.1-907.000 · Proposition établie le 11 juillet 2026 · Montants hors taxes ; taxes applicables (PPN) en sus · Document non contractuel : seules les stipulations du contrat signé font foi."
  },
  en: {
    brand: "NOMOS",
    title: "INTERVENTION PROPOSAL",
    subtitle: "NOMOS Protocol × CHORA UBUD — Somatic Engineering & AEGIS™ System",
    meta: "Reference: PROP-CHORA-2026-07 · Issued by PT MEMBIMBING DRACO TERBANG · Intervention cycle: 6 months (180 days) · Engagement: 270,000,000 IDR (€13,000 excl. tax) — Partnership Rate",
    langLabel: "FR",
    printLabel: "Export as PDF",
    sections: [
      {
        h: "◈ The observation",
        blocks: [
          { type: "p", text: "Chora does not have an execution problem. 5,000 reviews. 4.9 average. A full room. Operational excellence is established — and that is precisely why the next tier will not come from it." },
          { type: "p", text: "Your public promise, however, aims higher:" },
          { type: "quote", text: "\"People are looking for new ways to reach altered states naturally. They want to elevate their body and mind. A holistic approach... can be a vital component of this transformation.\"" },
          { type: "p", text: "This promise is written. Our intervention consists of making it biologically true — on the plate, in the room, and in the nervous system of the team that serves it. Today, the gap plays out on two levels:" },
          { type: "ul", items: [
            "Visible execution — aesthetics, down to the very presentation of the dishes, can evolve to fully translate the announced holistic dimension. The plate and the physical processes must become the visual trigger of the state you promise.",
            "Invisible execution — an example observed during our exchange: a team that recounts dishes it has never tasted does not sell them, it recites them. The holistic discourse is there; the embodiment does not yet follow. This type of misalignment is not heard — it is felt."
          ]},
          { type: "mark", text: "There is a biological constraint that neither marketing nor pricing can circumvent: a customer does not enter a state of openness in a room where the team is operating in overheat. Logistical micro-frictions become stress; the staff's stress is palpable; the customer absorbs it, and their experience locks up. The customer's somatic opening requires your team's nervous immunity." }
        ]
      },
      {
        h: "✦ The intervention thesis — Sekala / Niskala",
        blocks: [
          { type: "p", text: "Bali has always named what neurophysiology measures today: the visible world (sekala) and the invisible world (niskala). Our work consists of coding Chora's infrastructure on this balance — and converting it into cold, measurable indicators: profitability, logistical fluidity and aesthetics on one side; nervous regulation of the staff and energy of the place on the other." },
          { type: "p", text: "Concretely, the NOMOS Protocol extracts your manager's operational intelligence and freezes it into an autonomous system: the AEGIS™ system and custom authority procedures. The manager ceases to be the central nervous system of the establishment — the system becomes it. Freed from micro-management, the team operates from a regulated space, without entropy. It is this regulation, and it alone, that makes possible a sustainable rise in average ticket and a loyalty that no longer depends on anyone." },
          { type: "p", text: "The intervention operates simultaneously on three layers: biological (the nervous system of the leader and the team), identity (the alignment between what Chora says and what Chora is) and operational (the decision architecture). Treating one layer without the other two is the reason why classical interventions do not hold." }
        ]
      },
      {
        h: "◈ The deployment — 5 phases over 6 months",
        blocks: [
          { type: "em", text: "Systemic adaptation law: the action points below are given for illustrative purposes. The protocol adapts to the pathology of the system, not the other way around — it is the audit under real conditions that reveals the anomalies of the field and dictates the final roadmap. The deliverables listed below, however, are firm." },
          { type: "h3", text: "Phase 1 — Onboarding & Strategic Engineering (month 1)" },
          { type: "ul", items: [
            "Clinical audit of the leader and internal structuring of the business",
            "Archetypal mapping (102 variables): identification of operational overload points",
            "Physical and human audit of the space (sekala/niskala): spatial dynamics, layout, plate aesthetics, individual staff affinities",
            "Generation of the master schematics and specifications that will dictate the actions of the following phases"
          ]},
          { type: "h3", text: "Phase 2 — Implementation & Execution" },
          { type: "ul", items: [
            "Deployment of the AEGIS™ system within the designated team",
            "Replacement of generic sales scripts with a genuine experience handover: information distribution adapts to the staff's identity — the employee passionate about cooking is entrusted with the narration of the dishes, because he will sell them through his own resonance, not through a script",
            "The manager's recurring decisions are frozen into clear procedures: decision-making becomes asynchronous, the establishment stops waiting"
          ]},
          { type: "h3", text: "Phase 3 — Redirection & Anti-Friction" },
          { type: "ul", items: [
            "Clinical review of the implementation: what generates velocity, what creates entropy",
            "Recalibration of micro-details: position of tables, aesthetics of plates, spatial dynamics — methodical removal of any visual or logistical friction",
            "Continuous adjustments based on operational feedback"
          ]},
          { type: "h3", text: "Phase 4 — Consultations & Consolidation" },
          { type: "ul", items: [
            "The new posture becomes the norm; logistical fluidity becomes automated",
            "The team operates autonomously, freed from micro-management"
          ]},
          { type: "h3", text: "Phase 5 — Expansion" },
          { type: "ul", items: [
            "Opening the architecture toward the next tier: new volumes, new projects — including the hotel ambition — without nervous degradation of the system"
          ]}
        ]
      },
      {
        h: "✦ The deliverables — High-resolution data",
        blocks: [
          { type: "p", text: "Throughout the duration of the protocol, the AEGIS™ system acts as the auxiliary cortex of operations: it maps fatigue, decisions and team dynamics, and autonomously generates:" },
          { type: "ul", items: [
            "Jungian Archetypal Analysis — two versions at onboarding (base report + clinical report), then a new version every month. It tracks the evolution of the leader's posture and will be extended to the staff after the stabilization period.",
            "Pulse Knowledge Cards — minimum 100 over the duration of the protocol: intervention protocols continuously distilled, derived from your real week, to correct operational entropy as it appears.",
            "Tracker People Board Report — weekly or monthly report of the operational health of the team: individual affinities, logistical frictions, weak signals.",
            "Neuro Health Report — biometric monitoring (mood, sleep, stress). Fatigue tracking ensures that leadership maintains its decision-making clarity.",
            "Continuous support — asynchronous clinical feedback from the Protocol Architect, throughout the duration of the contract, for immediate adjustments in the face of unforeseen events."
          ]}
        ]
      },
      {
        h: "◈ The framework — what this intervention is not",
        blocks: [
          { type: "ul", items: [
            "Not a marketing agency. We sell neither content nor advertising. We align what Chora says with what Chora is — marketing becomes true, therefore more powerful.",
            "Not coaching, nor team building. A structured intervention, conducted directly by the Protocol Architect, without delegation.",
            "No numerical promise. No revenue, no occupancy rate is guaranteed — our contract writes it in black and white. What is guaranteed: the deliverables listed above, the intervention framework, and your decision point at D+30."
          ]}
        ]
      },
      {
        h: "⚖ Payment & engagement architecture",
        blocks: [
          { type: "p", text: "Total investment: 270,000,000 IDR (€13,000 excl. tax) for 6 months of intervention — Partnership Rate, in a logic of long-term collaboration with your company." },
          { type: "table", head: ["Installment", "Amount", "Equivalent", "Date"], rows: [
            ["Priming deposit (20%) — triggers Phase 1. Non-refundable.", "54,000,000 IDR", "€2,600 excl. tax", "At signing (D1)"],
            ["Monthly payment 1 (40%) — launch of implementation. Decision Point.", "108,000,000 IDR", "€5,200 excl. tax", "D+30"],
            ["Monthly payment 2 (40%) — balance of the transformation", "108,000,000 IDR", "€5,200 excl. tax", "D+60"],
            ["Total", "270,000,000 IDR", "€13,000 excl. tax", "—"]
          ]},
          { type: "quote", text: "The real engagement does not play out at signing. It plays out at D+30. At the end of the first month — the complete audit carried out, the archetypal analysis and the master schematics in your hands — you decide: stop there, without additional cost and without justification, or launch the implementation by paying Monthly Payment 1, which then constitutes a firm commitment on the balance. You never finance blindly. We never work with a client who doubts." }
        ]
      },
    ],
    footer: "PT MEMBIMBING DRACO TERBANG — NPWP: 39.582.563.1-907.000 · Proposal issued on July 11, 2026 · Amounts excluding tax; applicable taxes (PPN) additional · Non-contractual document: only the stipulations of the signed contract are authoritative."
  }
} as const;

type Block =
  | { type: "p" | "quote" | "mark" | "em" | "h3"; text: string }
  | { type: "ul" | "ol"; items: readonly string[] }
  | { type: "table"; head: readonly string[]; rows: readonly (readonly string[])[] };

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p": return <p key={i} className="my-3 leading-relaxed">{b.text}</p>;
    case "em": return <p key={i} className="my-3 italic text-neutral-400 leading-relaxed">{b.text}</p>;
    case "quote": return <blockquote key={i} className="my-4 border-l-2 border-amber-500/60 pl-4 italic text-neutral-300">{b.text}</blockquote>;
    case "mark": return <p key={i} className="my-4 rounded bg-amber-500/10 border border-amber-500/30 p-4 leading-relaxed">{b.text}</p>;
    case "h3": return <h3 key={i} className="mt-5 mb-2 font-semibold text-amber-200">{b.text}</h3>;
    case "ul": return <ul key={i} className="my-3 list-disc pl-6 space-y-1.5">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
    case "ol": return <ol key={i} className="my-3 list-decimal pl-6 space-y-1.5">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
    case "table": return (
      <div key={i} className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>{b.head.map((h, j) => <th key={j} className="border border-neutral-700 bg-neutral-900 p-2 text-left font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {b.rows.map((r, j) => (
              <tr key={j}>{r.map((c, k) => <td key={k} className="border border-neutral-700 p-2 align-top">{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default function PropositionChoraPage() {
  const [lang, setLang] = useState<Lang>("fr");
  const c = content[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-neutral-800 bg-neutral-950/90 px-4 py-3 backdrop-blur">
        <span className="text-xs tracking-widest text-neutral-500">PROPOSITION · CONFIDENTIEL</span>
        <div className="flex gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded border border-neutral-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
          >
            {c.langLabel}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded border border-amber-500/60 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200 hover:bg-amber-500/20"
          >
            {c.printLabel}
          </button>
        </div>
      </div>

      <article className="proposition-doc mx-auto max-w-3xl px-6 py-10">
        <div className="text-sm tracking-[0.3em] text-amber-200">{c.brand}</div>
        <h1 className="mt-2 text-3xl font-bold">{c.title}</h1>
        <p className="mt-1 text-neutral-300">{c.subtitle}</p>
        <p className="mt-3 text-xs text-neutral-500">{c.meta}</p>
        <hr className="my-6 border-neutral-800" />

        {c.sections.map((s, i) => (
          <section key={i} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">{s.h}</h2>
            {(s.blocks as readonly Block[]).map(renderBlock)}
          </section>
        ))}

        <hr className="my-6 border-neutral-800" />
        <p className="text-xs text-neutral-500">{c.footer}</p>
      </article>

      <style>{`
        @media print {
          @page { size: A4; margin: 18mm 16mm; }
          .no-print { display: none !important; }
          html, body, #root { background: #ffffff !important; color: #111 !important; }

          .proposition-doc {
            color: #111 !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            font-size: 11pt;
            line-height: 1.5;
          }
          .proposition-doc * {
            color: #111 !important;
            background: transparent !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          .proposition-doc h1 { font-size: 20pt; margin: 0 0 6pt; }
          .proposition-doc h2 { font-size: 14pt; margin: 14pt 0 6pt; page-break-after: avoid; break-after: avoid; }
          .proposition-doc h3 { font-size: 12pt; color: #7a5a00 !important; page-break-after: avoid; break-after: avoid; }
          .proposition-doc p, .proposition-doc li { orphans: 3; widows: 3; }
          .proposition-doc section { page-break-inside: avoid; break-inside: avoid; }
          .proposition-doc blockquote {
            color: #333 !important;
            border-left: 3px solid #b8860b !important;
            padding-left: 10pt;
            margin: 8pt 0;
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .proposition-doc table {
            width: 100% !important;
            border-collapse: collapse !important;
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .proposition-doc thead { display: table-header-group; }
          .proposition-doc tr, .proposition-doc td, .proposition-doc th { page-break-inside: avoid; break-inside: avoid; }
          .proposition-doc th, .proposition-doc td {
            border: 1px solid #666 !important;
            padding: 6pt 8pt !important;
          }
          .proposition-doc th {
            background: #eeeeee !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .proposition-doc hr { border: 0; border-top: 1px solid #999; margin: 12pt 0; }
          .proposition-doc a { color: #111 !important; text-decoration: none; }
        }
      `}</style>
    </div>
  );
}
