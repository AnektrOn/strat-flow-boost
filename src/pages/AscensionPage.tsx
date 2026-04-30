import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import GuaranteeSection from "@/components/GuaranteeSection";
import QualifySection from "@/components/QualifySection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AUDIT_FORM_URL } from "@/components/AuditCTABlock";
import { ascensionSymptoms, ascensionFaqs, ascensionResults } from "@/data/ascensionContent";

function ResultTable({ rows }: { rows: { indicator: string; before: string; after: string }[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              Indicateur
            </th>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              Avant
            </th>
            <th className="text-left p-4 border-b border-n-border text-n-muted font-medium text-xs uppercase tracking-wide">
              Après 6 mois
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.indicator}>
              <td className="p-4 border-b border-n-border text-n-text">{r.indicator}</td>
              <td className="p-4 border-b border-n-border text-n-muted align-top">{r.before}</td>
              <td className="p-4 border-b border-n-border text-n-muted align-top">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const AscensionPage = () => {
  return (
    <div className="ascension-theme overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="ascension" />
      <main>
        <AscensionHero />
        <AscensionConstat />
        <AscensionSignes />
        <AscensionMechanism />
        <AscensionProtocol />
        <AscensionConcrete />
        <AscensionResults />
        <AscensionFuture />
        <AscensionFounder />
        <AscensionRoi />
        <GuaranteeSection variant="ascension" />
        <QualifySection variant="ascension" />
        <AscensionFaq />
        <AscensionCta />
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>
              <em>Vous pensez être plutôt en crise ?</em>
            </p>
            <Link to="/nomos">Découvrir le Protocole NOMOS →</Link>
          </div>
        </section>
      </main>
      <Footer variant="ascension" />
      <MobileCTABar href="#audit" label="Candidater pour l'audit ASCENSION" />
    </div>
  );
};

function AscensionHero() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="hero" className="min-h-[85vh] flex items-center text-center pt-32 pb-20">
      <div className="container-nomos narrow w-full">
        <span className="reveal eyebrow-bordered mb-8 inline-block">
          Réservé aux fondateurs · 45 000€ – 150 000€/mois · Phase d'expansion
        </span>
        <h1 className="reveal h-hero mb-6">
          Votre business a grandi.<br />
          <em>Vous, non.</em>
        </h1>
        <p className="reveal section-intro mx-auto">
          Votre chiffre d'affaires a évolué. Votre équipe est en place. Les systèmes tournent. Mais entre ce que vous
          incarnez aujourd'hui et ce que votre business appelle — il y a un écart. Précis. Mesurable. Et structurel.
        </p>
        <p className="reveal text-base text-n-gold-warm font-medium mb-8">Clarté de vision en 21 jours.</p>
        <div className="reveal mb-6">
          <a href="#audit" className="btn-primary">
            Candidater pour l'audit ASCENSION — Offert
          </a>
        </div>
        <p className="reveal text-xs text-n-faint tracking-wide">
          ⬥ 5 dirigeants maximum par semestre · Intervention 1:1 · Accompagnement 6 mois
        </p>
      </div>
    </section>
  );
}

function AscensionConstat() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="constat" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Ce n'est pas que ça va mal.<br />
          C'est que vous savez que ça peut aller plus loin.
        </h2>
        <p className="reveal section-intro">
          Vous n'êtes pas épuisé. Vous n'êtes pas en crise. Votre business génère des revenus réguliers, votre équipe tient
          le quotidien, et vous avez passé le stade où tout reposait sur votre seule présence.
        </p>
        <p className="reveal font-display text-lg italic text-n-text my-8">Et pourtant.</p>
        <p className="reveal text-n-muted mb-6">
          Il y a un décalage. Discret, mais constant. Comme une fréquence légèrement désaccordée — imperceptible sauf pour
          ceux qui savent écouter. Vous prenez des décisions qui restent en dessous de l'ambition que vous portez. Votre
          positionnement public date d'une version antérieure de vous-même. Les sujets stratégiques majeurs —
          repositionnement, expansion, vision à trois ans — sont perpétuellement reportés à{" "}
          <em>plus tard, quand j'aurai l'espace</em>.
        </p>
        <p className="reveal text-n-muted mb-6">
          Ce n'est pas de la procrastination. Ce n'est pas un manque de méthode. C'est un phénomène précis : votre
          identité de dirigeant n'a pas grandi au même rythme que votre business. Et cette asymétrie — silencieuse,
          jamais nommée — est exactement ce qu'ASCENSION est conçu pour traiter.
        </p>
        <blockquote className="reveal bq-gold">
          Pas la douleur. La lucidité inconfortable d'un dirigeant qui sait qu'il y a un palier au-dessus — et qui n'a pas
          encore le câblage pour le franchir.
        </blockquote>
      </div>
    </section>
  );
}

function AscensionSignes() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="signes" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Les 6 signatures du Plafond d'Expansion.</h2>
        <p className="reveal section-intro">
          Le Plafond de Cohérence Identitaire™ ne fait pas mal. Il plafonne. Voici ses six signatures les plus
          fréquentes.
        </p>
        <div className="reveal flex flex-col gap-8 my-10">
          {ascensionSymptoms.map((s) => (
            <div key={s.title}>
              <p className="font-semibold text-base text-n-text mb-2">{s.title}</p>
              <p className="text-sm text-n-muted">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center font-medium text-n-gold-warm">
          Si vous reconnaissez 4 signatures ou plus — le Plafond de Cohérence Identitaire™ est actif.
        </p>
      </div>
    </section>
  );
}

function AscensionMechanism() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="mechanism" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          Ce que vous vivez a un nom.<br />
          Un mécanisme. Et une correction.
        </h2>
        <p className="reveal section-intro">
          Ce qui vous retient n'est pas un manque de stratégie. C'est une asymétrie identitaire précise, déjà formalisée
          par la recherche académique — et traitable systématiquement.
        </p>
        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="mechanism-name font-display text-xl mb-4">Le Plafond de Cohérence Identitaire™</h3>
          <p className="text-n-text">
            L'état dans lequel l'identité de dirigeant n'a pas évolué au rythme du business. L'entreprise a changé de
            taille, de complexité et d'impact — mais le système de référence identitaire du fondateur est resté calibré
            sur le stade antérieur. Le business tire vers le haut. L'identité retient vers l'arrière. Le plafond, c'est
            cette tension.
          </p>
        </div>
        <p className="reveal">
          Quand vous avez construit votre premier palier de revenus, votre identité de dirigeant s'est structurée en
          cohérence avec ce stade : les décisions que vous preniez, le positionnement que vous défendiez, la taille
          d'ambition que vous portiez — tout était aligné. Cette cohérence interne était un avantage : clarté, vitesse,
          autorité naturelle.
        </p>
        <p className="reveal">
          Mais le business a continué à grandir. Et l'identité, elle, n'a pas été explicitement reconstruite pour le
          stade suivant. Elle a été <em>étirée</em> — comme on étire un vêtement devenu trop petit. Ça tient encore. Mais
          ça ne va plus vraiment.
        </p>
        <p className="reveal">
          La psychologue Patricia Linville a formalisé en 1987 le concept de <em>self-complexity</em> — la capacité d'un
          individu à maintenir plusieurs représentations distinctes et cohérentes de lui-même face aux exigences
          changeantes de son environnement <span className="text-xs text-n-faint">(Linville, 1987)</span>. Herminia
          Ibarra (2003) a documenté ce phénomène spécifiquement chez les leaders en transition : les dirigeants qui
          échouent à franchir des paliers de responsabilité le font rarement par déficit de compétence — mais par
          incapacité à reconstruire leur identité professionnelle à la hauteur du nouveau rôle{" "}
          <span className="text-xs text-n-faint">(Ibarra, 2003)</span>.
        </p>
        <p className="reveal text-n-text">
          <strong>Ce n'est pas une question de confiance en soi. C'est une question d'architecture identitaire.</strong>
        </p>
        <p className="reveal">
          Un dirigeant peut être pleinement confiant dans ses capacités opérationnelles et être simultanément plafonné
          identitairement — parce que la confiance est ancrée dans le stade précédent, pas dans le stade à construire. Ce
          qu'ASCENSION traite n'est pas un doute. C'est un décalage structurel entre l'identité actuelle et l'identité
          requise pour le prochain niveau.
        </p>
        <blockquote className="reveal bq-gold">
          Le Plafond de Cohérence Identitaire™ est auto-occultant par nature. Le dirigeant qui est dedans ne peut pas le
          voir depuis l'intérieur — parce que sa propre grille d'évaluation est calibrée sur le stade actuel.
        </blockquote>
      </div>
    </section>
  );
}

function AscensionProtocol() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="protocol" className="section-pad section-dark">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Le Protocole</span>
          <h3 className="font-display text-xl text-n-text mt-2 mb-4">Élévation Systémique™</h3>
          <p className="section-intro mx-auto text-center">
            Trois couches simultanées. Chaque couche est nécessaire. Aucune ne suffit seule.
          </p>
        </div>
        <div className="reveal flex flex-col gap-10 max-w-3xl mx-auto">
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">01</span>
            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 1 · Identité
            </h4>
            <p className="text-xs text-n-faint mb-4">De qui êtes-vous aujourd'hui → à qui êtes-vous prêt à devenir ?</p>
            <p className="text-sm text-n-muted mb-3">
              Cartographie précise de votre identité de dirigeant actuelle : comment vous vous définissez, ce que vous
              valorisez, ce que vous évitez, comment vous décidez sous pression.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Identification des zones de désalignement : là où votre comportement réel diverge de l'identité que vous
              projetez ou aspirez à incarner.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Reconstruction de l'architecture identitaire de palier supérieur : formulation de la version de dirigeant
              que votre business appellera dans 36 mois — et protocole de transition pour y accéder.
            </p>
            <p className="layer-result text-sm font-medium mt-4">
              → Architecture identitaire reconstruite, alignée sur le stade à venir.
            </p>
          </div>
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">02</span>
            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 2 · Vision
            </h4>
            <p className="text-xs text-n-faint mb-4">
              De quelle vision opérez-vous aujourd'hui → à quelle vision directrice aspirez-vous ?
            </p>
            <p className="text-sm text-n-muted mb-3">
              Audit de la vision actuelle : est-elle écrite, partagée, opératoire ? Guide-t-elle les décisions
              quotidiennes ou reste-t-elle un document de façade ?
            </p>
            <p className="text-sm text-n-muted mb-3">
              Formulation de la vision directrice à 3 ans : concrète, testable, suffisamment précise pour filtrer les
              décisions et suffisamment inspirante pour mobiliser une équipe.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Connexion décisionnelle : chaque décision stratégique majeure lue à l'aune de la vision directrice — levier
              ou friction ?
            </p>
            <p className="layer-result text-sm font-medium mt-4">→ Vision directrice opératoire, filtre décisionnel actif.</p>
          </div>
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">03</span>
            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 3 · Présence
            </h4>
            <p className="text-xs text-n-faint mb-4">
              Comment vous vous positionnez aujourd'hui → comment vous incarnez publiquement votre autorité ?
            </p>
            <p className="text-sm text-n-muted mb-3">
              Audit de cohérence publique : bio, site, prises de parole, décisions visibles — votre présence publique
              est-elle alignée avec qui vous êtes réellement devenu ?
            </p>
            <p className="text-sm text-n-muted mb-3">
              Structuration du positionnement d'autorité : une formulation précise, défendable et mémorable de ce que
              vous représentez — pas un slogan, une architecture.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Plan d'incarnation publique : quels canaux, quels formats, quels sujets, quelle cadence — pour une présence
              publique qui amplifie l'autorité sans absorber du temps de delivery.
            </p>
            <p className="layer-result text-sm font-medium mt-4">→ Présence publique alignée, autorité structurée.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AscensionConcrete() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="concrete" className="section-pad">
      <div className="container-nomos narrow">
        <div className="reveal bg-n-surface border border-n-border rounded-lg p-10">
          <h3 className="font-display text-xl text-n-gold-warm font-normal mb-8">
            Six mois. Trois phases. Un protocole sans délégation, 1:1, conduit par Léo du premier au dernier jour.
          </h3>
          <div className="space-y-8">
            <div className="pb-8 border-b border-n-border last:border-0 last:pb-0">
              <h4 className="text-sm text-n-gold-warm font-semibold mb-3">Phase 1 · M1–M2 — Cartographie identitaire · Audit de cohérence</h4>
              <p className="text-sm text-n-muted">
                La phase d'investigation. Pas de prescriptions prématurées — d'abord, une radiographie précise. Où
                êtes-vous réellement dans votre trajectoire identitaire ? Quel est l'écart entre l'identité que vous
                incarnez et celle que votre business appelle ? Quelles décisions sont bloquées — et par quoi ? Ce
                travail produit un document que la plupart des dirigeants n'ont jamais eu : une cartographie précise de
                leur identité de dirigeant actuelle, avec les zones de cohérence, les zones de tension, et le diagnostic
                du Plafond de Cohérence Identitaire™ dans sa forme spécifique à votre trajectoire.
              </p>
              <p className="text-sm text-n-gold-warm font-medium mt-3">Livrable : cartographie identitaire complète + diagnostic précis.</p>
            </div>
            <div className="pb-8 border-b border-n-border last:border-0 last:pb-0">
              <h4 className="text-sm text-n-gold-warm font-semibold mb-3">Phase 2 · M3–M4 — Reconstruction de vision · Refonte du positionnement</h4>
              <p className="text-sm text-n-muted">
                La phase de construction. Sur la base de la cartographie Phase 1, le travail commence : formulation de la
                vision directrice à 3 ans, reconstruction de l'architecture identitaire de palier supérieur, et refonte du
                positionnement public. C'est ici que les grandes décisions stratégiques — celles qui étaient reportées
                depuis des mois — trouvent leur cadre : pas parce que la décision devient évidente, mais parce que vous
                avez maintenant une vision directrice suffisamment précise pour l'évaluer correctement.
              </p>
              <p className="text-sm text-n-gold-warm font-medium mt-3">
                Livrable : vision directrice formulée + positionnement refondu + décisions majeures tranchées.
              </p>
            </div>
            <div>
              <h4 className="text-sm text-n-gold-warm font-semibold mb-3">Phase 3 · M5–M6 — Incarnation publique · Consolidation systémique</h4>
              <p className="text-sm text-n-muted">
                La phase d'ancrage. Tout ce qui a été construit en Phase 1 et 2 doit maintenant être incarné — pas
                seulement compris. Incarné dans les décisions quotidiennes, dans les prises de parole publiques, dans la
                façon dont vous conduisez votre équipe et dont vous vous présentez sur le marché. Cette phase inclut un
                travail sur la présence publique concrète : quels formats, quels canaux, quels sujets — et une révision
                complète des artefacts publics existants (bio, positionnement, messages clés) pour les aligner avec
                l'identité construite en Phase 2.
              </p>
              <p className="text-sm text-n-gold-warm font-medium mt-3">
                Livrable : cohérence complète entre identité, vision et incarnation publique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AscensionResults() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="results" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Résultats de protocole.<br />
          Métriques identitaires et stratégiques.
        </h2>
        <p className="reveal section-intro">
          Trois profils. Trois Plafonds de Cohérence Identitaire™ distincts. Trois trajectoires d'expansion documentées.
        </p>
        {ascensionResults.map((card) => (
          <div key={card.role} className="reveal border border-n-border rounded-lg p-8 mb-8">
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <span className="font-semibold text-sm text-n-text">{card.role}</span>
              <span className="text-xs text-n-muted">{card.metric}</span>
            </div>
            <p className="text-sm text-n-muted mb-4">
              <strong className="text-n-text">Point de départ :</strong> {card.bug}
            </p>
            <ResultTable rows={card.rows} />
            <p className="text-xs text-n-faint italic mt-4">{card.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AscensionFuture() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Dans 6 mois.<br />
          Voici à quoi ressemble un jeudi.
        </h2>
        <div className="reveal space-y-4 text-n-muted my-10">
          <p className="text-n-text font-medium">Jeudi matin. 7h45.</p>
          <p>
            Vous avez dormi. Pas "récupéré" — dormi. La différence est perceptible depuis quelques semaines. Les sujets
            stratégiques ouverts ne tournent plus en fond pendant la nuit. Ils ont leur espace dédié — et quand vous
            fermez cet espace, il se ferme.
          </p>
          <p>
            Vous ouvrez votre agenda. La matinée est bloquée pour un travail de fond : la décision d'expansion sur un
            nouveau marché géographique. Vous avez les données. Vous avez la vision directrice qui sert de filtre. La
            décision prend 40 minutes de réflexion structurée. Vous la prenez. Elle est documentée. Elle sera communiquée
            à l'équipe à 14h.
          </p>
          <p>
            À 10h, une prise de parole que vous avez préparée il y a dix jours : un format long sur LinkedIn autour d'un
            sujet de fond de votre marché. Le texte est déjà écrit — calibré sur votre positionnement, cohérent avec la
            vision que vous défendez publiquement depuis trois mois. Vous le relisez une fois. Vous publiez.
          </p>
          <p>
            À midi, déjeuner. Pas de téléphone. Pas de "juste ce mail rapide". Le business tourne. Vos équipes ont les
            droits décisionnels pour les sujets de leur périmètre. Ce qui remonte à vous mérite d'y remonter.
          </p>
          <p>
            L'après-midi : deux appels. Un potentiel partenaire stratégique — vous évaluez en 30 minutes si c'est cohérent
            avec la direction des 36 prochains mois. Réponse claire avant la fin de l'appel. Un point équipe mensuel :
            vous posez le cap, vous vérifiez l'alignement, vous prenez les décisions que seul vous pouvez prendre.
          </p>
          <p>À 18h, vous fermez. Le business continue à tourner. Vous, vous avez une vie en dehors de lui.</p>
          <p>
            <strong className="text-n-gold-warm font-display italic text-lg">
              Ce n'est pas de l'équilibre. C'est de la gouvernance.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function AscensionFounder() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">L'architecte du protocole.</h2>
        <div className="reveal space-y-4 text-n-muted">
          <p>
            ASCENSION est conçu et conduit par <strong className="text-n-text">Léo</strong> — fondateur de NOMOS.
          </p>
          <p>
            Le protocole NOMOS a été construit pour les dirigeants en crise : ceux dont le business dépasse la bande
            passante, dont la Dérive Neuro-Opérationnelle™ a transformé chaque euro de croissance en tension supplémentaire.
            C'est un protocole de recalibration — intervention clinique, 90 jours, résultats mesurables.
          </p>
          <p>
            <strong className="text-n-text">ASCENSION est une architecture différente, pour une phase différente.</strong>
          </p>
          <p>
            Là où NOMOS répare, ASCENSION construit. Là où NOMOS intervient sur le câblage biologique et décisionnel,
            ASCENSION travaille sur l'identité de dirigeant, la vision stratégique et la présence publique. Ce ne sont pas
            les mêmes couches. Ce ne sont pas les mêmes outils. Ce ne sont pas les mêmes indicateurs de résultat.
          </p>
          <p>
            Léo intervient en tant qu'<strong className="text-n-text">architecte d'identité de dirigeant</strong> — pas
            comme thérapeute, pas comme coach, pas comme consultant opérationnel. Le travail est structurel. Le résultat
            est mesurable. Et comme pour NOMOS : 5 dirigeants maximum par semestre, 1:1, sans délégation.
          </p>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold">
              L
            </div>
            <div className="text-sm">
              <p className="font-semibold text-n-text">Léo</p>
              <p className="text-n-muted">Fondateur NOMOS &amp; ASCENSION · Architecte d'identité de dirigeant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AscensionRoi() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          La vraie question n'est pas<br />« ai-je les moyens d'ASCENSION ? »
        </h2>
        <p className="reveal section-intro">
          C'est : <em>ai-je les moyens de ne pas incarner mon prochain niveau ?</em>
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          Les opportunités qui passent
        </h3>
        <p className="reveal">
          Un dirigeant à 100 000€/mois avec un positionnement public non aligné avec son stade réel manque structurellement
          des opportunités qui exigent une incarnation visible de son autorité : partenariats stratégiques, accords de
          distribution, recrutements de profils seniors, décisions d'investissement, accès aux réseaux de son niveau réel.
        </p>
        <p className="reveal">
          Ces opportunités ne se présentent pas deux fois. Elles évaluent en quelques minutes si le dirigeant qu'elles ont
          en face incarne le niveau requis — ou s'il est encore dans l'identité du stade précédent.
        </p>
        <p className="reveal">
          Un dirigeant à 100 000€/mois qui laisse 20% de ces opportunités sur la table faute d'incarnation publique calibrée
          = <strong className="text-n-gold-warm">240 000€/an en manque à gagner identifié</strong>. Pas en théorie. En
          deals non signés, en profils qui ont dit non, en positionnements stratégiques qui sont allés chez quelqu'un
          d'autre.
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          Les décisions sous-calibrées
        </h3>
        <p className="reveal">
          Un dirigeant dont l'identité est calibrée sur un business à 50 000€/mois prend des décisions de 50 000€/mois —
          même quand son business tourne à 100 000€/mois. Il négocie des contrats trop prudemment. Il recrute en dessous du
          niveau requis. Il investit avec les critères d'un stade dépassé. Chaque décision sous-calibrée est un frein
          invisible à la trajectoire réelle du business.
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          La stagnation qui s'installe
        </h3>
        <p className="reveal">
          Le Plafond de Cohérence Identitaire™ ne reste pas stable. Laissé sans intervention, il se renforce. L'identité
          non mise à jour génère des décisions non mises à jour, qui génèrent des résultats non mis à jour, qui confirment
          l'identité existante. C'est une boucle fermée — et elle se referme un peu plus chaque mois.
        </p>
        <div className="reveal my-8 space-y-0">
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Par mois</span>
            <span className="text-n-muted sm:text-right">15 000€ à 50 000€ en opportunités non saisies</span>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Sur 6 mois</span>
            <span className="text-n-muted sm:text-right">90 000€ à 300 000€</span>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Sur 12 mois</span>
            <span className="text-n-muted sm:text-right">180 000€ à 600 000€</span>
          </div>
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2 text-sm font-semibold"
            style={{ background: "hsl(var(--color-gold-glow))" }}
          >
            <span className="text-n-gold-warm">ROI conservateur d'ASCENSION</span>
            <span className="text-n-gold-warm sm:text-right">6:1 à 40:1 selon le profil</span>
          </div>
        </div>
        <p className="reveal font-display text-xl text-center my-10 text-n-text">
          <strong>Ai-je les moyens de rester au palier actuel ?</strong>
        </p>
      </div>
    </section>
  );
}

function AscensionFaq() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Ce que vous vous demandez probablement.</h2>
        <div className="flex flex-col">
          {ascensionFaqs.map((f) => (
            <details key={f.q} className="reveal border-b border-n-border group">
              <summary className="py-5 font-medium cursor-pointer flex justify-between items-center text-base list-none [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-lg text-n-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 text-n-muted text-sm max-w-[60ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function AscensionCta() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="audit" className="section-pad text-center pb-24">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Le palier suivant n'est pas opérationnel.<br />
          <em>Il est identitaire.</em>
        </h2>
        <p className="reveal section-intro mx-auto text-center">
          Vous avez déjà résolu les problèmes opérationnels. Vos systèmes tiennent. Vos chiffres progressent. Ce qui vous
          retient maintenant n'est pas dans le business — c'est dans l'écart entre ce que vous incarnez et ce que votre
          business mérite de porter.
        </p>
        <div className="reveal flex flex-col gap-6 my-10 text-left max-w-[560px] mx-auto">
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">Votre Plafond de Cohérence Identitaire™ identifié</strong> — cartographié
              avec précision pour votre trajectoire spécifique.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">Les 3 zones de désalignement actives</strong> — celles qui bloquent vos
              décisions majeures et votre positionnement public.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">La prochaine étape claire</strong> — si ASCENSION est adapté à votre phase,
              vous le saurez. Sinon aussi.
            </p>
          </div>
        </div>
        <p className="reveal guarantee-reminder text-sm mb-8">
          Si le diagnostic n'est pas le plus précis que vous ayez jamais eu sur votre trajectoire — remboursement intégral.
        </p>
        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>Ce semestre : 5 places disponibles.</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">
            Chaque protocole est conduit en direct, 1:1, sans délégation. Si vous êtes sélectionné et choisissez de ne pas
            avancer — la place revient au prochain sur liste d'attente.
          </p>
        </div>
        <div className="reveal my-8">
          <a href={AUDIT_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary lg">
            Candidater pour l'audit ASCENSION
          </a>
          <p className="text-xs text-n-faint mt-3">
            Questionnaire de pré-qualification · Audit 45 min offert · Garantie de Diagnostic Absolue
          </p>
        </div>
      </div>
    </section>
  );
}

export default AscensionPage;
