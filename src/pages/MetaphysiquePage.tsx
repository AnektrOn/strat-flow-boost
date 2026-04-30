import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import GuaranteeSection from "@/components/GuaranteeSection";
import QualifySection from "@/components/QualifySection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AUDIT_FORM_URL } from "@/components/AuditCTABlock";

// ─── Typewriter intro ────────────────────────────────────────────────────────

const luxuryScript = [
  "Tu te demandes ce que la métaphysique peut apporter à ton business.",
  "La vraie réponse ?",
  "Un avantage que le marché ne sait pas encore nommer.",
  "Si tu es ici, ce n'est pas un hasard.",
  "Tu as déjà testé le développement personnel.",
  "L'optimisation. Le scale. Les méthodes nouvelle génération.",
  "Ici, on change de dimension.",
  "Vingt ans d'avance.",
  "Une vision plus nette. Des décisions plus souveraines.",
  "On ne parle plus de tendance.",
  "On parle d'avant-gardisme.",
];

// ─── Page ────────────────────────────────────────────────────────────────────

const MetaphysiquePage = () => {
  const introLines = luxuryScript.map((line) => line.toUpperCase());
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [introFadingOut, setIntroFadingOut] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    if (showMainPage || isIntroComplete) return;

    if (lineIndex >= introLines.length) {
      setIsIntroComplete(true);
      return;
    }

    const line = introLines[lineIndex];
    const lineDone = charIndex >= line.length;
    let delay = 55;

    if (lineDone) {
      delay = Math.min(2800, 1800 + line.length * 10);
    } else {
      const char = line[charIndex];
      if (/[.?!]/.test(char)) delay = 420;
      else if (/[,;:]/.test(char)) delay = 200;
      else if (char === " ") delay = 45;
    }

    const timer = window.setTimeout(() => {
      if (lineDone) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        return;
      }
      setCharIndex((prev) => prev + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, introLines, isIntroComplete, lineIndex, showMainPage]);

  useEffect(() => {
    if (!isIntroComplete || showMainPage) return;

    const fadeTimer = window.setTimeout(() => setIntroFadingOut(true), 700);
    const revealTimer = window.setTimeout(() => setShowMainPage(true), 1200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(revealTimer);
    };
  }, [isIntroComplete, showMainPage]);

  if (!showMainPage) {
    return (
      <div
        className={`min-h-dvh bg-black text-white relative overflow-hidden flex items-center justify-center px-6 py-14 transition-opacity duration-500 ${
          introFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <p
          className="relative z-10 w-full max-w-[702px] min-h-[128px] text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[0.12em]"
          style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
          aria-label="Introduction en ecriture progressive"
        >
          {(introLines[lineIndex] ?? "").slice(0, charIndex)}
          {!isIntroComplete && (
            <span className="ml-2 inline-block w-[0.08em] align-middle text-white/90 animate-pulse" aria-hidden="true">
              |
            </span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="ascension-theme overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="metaphysique" />
      <main>
        <MetaphysiqueHero />
        <MetaphysiqueConstat />
        <MetaphysiqueSignes />
        <MetaphysiqueMechanism />
        <MetaphysiqueProtocol />
        <MetaphysiqueFuture />
        <MetaphysiqueProof />
        <MetaphysiqueFounder />
        <MetaphysiqueRoi />
        <GuaranteeSection variant="metaphysique" />
        <QualifySection variant="metaphysique" />
        <MetaphysiqueFaq />
        <MetaphysiqueCta />
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>
              <em>Vous êtes en crise ou cherchez à passer un palier concret ?</em>
            </p>
            <Link to="/nomos">Protocole CRISIS →</Link>
            <span className="mx-3 text-n-faint">·</span>
            <Link to="/ascension">Protocole LEVEL UP →</Link>
          </div>
        </section>
      </main>
      <Footer variant="metaphysique" />
      <MobileCTABar href="#audit" label="Candidater — Avant-garde" />
    </div>
  );
};

// ─── Sections ────────────────────────────────────────────────────────────────

function MetaphysiqueHero() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="hero" className="min-h-[85vh] flex items-center text-center pt-32 pb-20">
      <div className="container-nomos narrow w-full">
        <span className="reveal eyebrow-bordered mb-8 inline-block">
          Réservé à une poignée de dirigeants · Dimension hors-marché · Vision à 20 ans
        </span>
        <h1 className="reveal h-hero mb-6">
          Ce que les autres appellent invisible,<br />
          <em>nous appelons avantage.</em>
        </h1>
        <p className="reveal section-intro mx-auto">
          Vous avez épuisé les outils classiques. L'optimisation, le scale, les méthodes nouvelle génération —
          tout ça, vous avez déjà donné. Ce qui vous manque n'est pas une méthode de plus. C'est une couche de
          lecture que 99 % des dirigeants n'ont pas encore activée.
        </p>
        <p className="reveal text-base text-n-gold-warm font-medium mb-8">
          Vision nette en 21 jours. Décisions plus souveraines. Vingt ans d'avance.
        </p>
        <div className="reveal mb-6">
          <a href="#audit" className="btn-primary">
            Identifier mes leviers invisibles — Audit offert
          </a>
        </div>
        <p className="reveal text-xs text-n-faint tracking-wide">
          ⬥ Places extrêmement limitées · Intervention 1:1 · Accompagnement 6 mois
        </p>
      </div>
    </section>
  );
}

function MetaphysiqueConstat() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="constat" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Ce n'est pas que les outils ne marchent pas.<br />
          C'est qu'ils ne voient pas tout.
        </h2>
        <p className="reveal section-intro">
          Vous avez appliqué les méthodes. Vous avez optimisé, délégué, scalé. Les résultats sont là — ou presque.
          Mais il y a une friction que vous ne parvenez pas à nommer. Une limite que les tableaux de bord ne capturent
          pas. Une décision que vous repoussez depuis des mois sans comprendre pourquoi.
        </p>
        <p className="reveal font-display text-lg italic text-n-text my-8">Et pourtant, vous sentez qu'il y a quelque chose.</p>
        <p className="reveal text-n-muted mb-6">
          Ce quelque chose a un nom. Il opère dans la couche que les outils de management ne lisent pas : la couche
          invisible — intention, timing, fréquence stratégique, alignement profond entre ce que vous voulez construire
          et comment vous le portez réellement. Ce n'est pas de la philosophie. C'est de la précision.
        </p>
        <p className="reveal text-n-muted mb-6">
          Ce n'est pas de la spiritualité non plus. C'est une discipline de lecture : identifier ce que vos outils
          classiques ne capturent pas, le rendre précisément lisible, et en faire un levier décisionnel direct. Le mot
          «&nbsp;métaphysique&nbsp;» désigne ce qui opère au-delà de ce que vos dashboards mesurent — pas au-delà de
          ce qui est réel.
        </p>
        <p className="reveal text-n-muted mb-6">
          Les dirigeants qui ont un avantage durable ne le doivent pas seulement à leur exécution. Ils le doivent à
          une lecture plus fine de leur réalité — une lecture qui intègre ce que les concurrents ignorent parce qu'ils
          ne savent pas encore que ça existe.
        </p>
        <blockquote className="reveal bq-gold">
          L'avant-garde ne se construit pas avec les outils de l'époque précédente. Elle se construit avec les leviers
          que l'époque n'a pas encore nommés.
        </blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueSignes() {
  const ref = useScrollReveal();
  const signes = [
    {
      title: "Vous avez tout testé — et ça ne tient pas.",
      detail:
        "Coaching, optimisation, nouvelles méthodes : les résultats arrivent, puis s'érodent. Pas parce que les outils sont mauvais, mais parce qu'ils n'atteignent pas la couche où le problème vit réellement.",
    },
    {
      title: "Vos décisions les plus importantes se prennent dans le flou.",
      detail:
        "Vous avez les données. Vous avez les conseillers. Et pourtant, certaines décisions stratégiques majeures restent dans un brouillard de lenteur ou d'inconfort que vous n'arrivez pas à lever.",
    },
    {
      title: "Vous sentez un écart entre ce que vous portez et ce que vous incarnez.",
      detail:
        "La vision est là. L'ambition est là. Mais quelque chose entre vous et le monde extérieur crée une distortion — votre positionnement public ne reflète pas encore ce que vous êtes vraiment capable de délivrer.",
    },
    {
      title: "Vous opérez en dessous de votre propre fréquence.",
      detail:
        "Vous prenez des décisions de dirigeant de votre stade d'il y a deux ans. Vos critères d'évaluation sont calibrés sur une ancienne version de vous — et vous le savez, mais vous ne savez pas comment recalibrer.",
    },
    {
      title: "Les opportunités majeures ne se présentent pas — ou se présentent mal.",
      detail:
        "Les bons partenariats, les bons clients, les bons talents : vous avez l'impression d'attirer les mauvaises fréquences ou de rater le timing sur les bonnes. Ce n'est pas de la malchance. C'est de l'alignement.",
    },
    {
      title: "Vous sentez que vous jouez la mauvaise partie.",
      detail:
        "Le marché dans lequel vous opérez n'est pas celui où se jouera vraiment la suite. Vous le sentez sans pouvoir le nommer. L'avant-garde, c'est être positionné dans la prochaine partie avant que les autres sachent qu'elle a commencé.",
    },
  ];
  return (
    <section ref={ref} id="signes" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Les 6 signatures de la couche invisible.</h2>
        <p className="reveal section-intro">
          Ce ne sont pas des symptômes de faiblesse. Ce sont les indices que vous opérez à la limite de ce que vos
          outils actuels peuvent lire.
        </p>
        <div className="reveal flex flex-col gap-8 my-10">
          {signes.map((s) => (
            <div key={s.title}>
              <p className="font-semibold text-base text-n-text mb-2">{s.title}</p>
              <p className="text-sm text-n-muted">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center font-medium text-n-gold-warm">
          Si vous reconnaissez 4 signatures ou plus — la couche invisible est active dans votre trajectoire.
        </p>
      </div>
    </section>
  );
}

function MetaphysiqueMechanism() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="mechanism" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          Ce que vous vivez a un nom.<br />
          Un mécanisme. Et une correction.
        </h2>
        <p className="reveal section-intro">
          Ce qui vous ralentit n'est pas dans vos KPIs. C'est dans la couche que vos outils ne lisent pas encore —
          précisément documentée, précisément traitable.
        </p>
        <div className="reveal bg-n-surface-2 border border-n-border rounded-lg p-8 my-10">
          <h3 className="mechanism-name font-display text-xl mb-4">Le Désalignement de Fréquence Stratégique™</h3>
          <p className="text-n-text">
            L'état dans lequel la vision d'un dirigeant, son positionnement public et ses décisions quotidiennes opèrent
            sur des fréquences différentes. Le business génère, mais sans cohérence interne profonde. L'énergie se
            disperse. Les opportunités majeures n'atterrissent pas — ou atterrissent au mauvais moment. Ce désalignement
            n'est pas visible dans les chiffres tant qu'il n'est pas nommé. Mais il se mesure précisément.
          </p>
        </div>
        <p className="reveal">
          Depuis une vingtaine d'années, la recherche en psychologie de la décision et en leadership stratégique a
          documenté un phénomène précis : les dirigeants dont les décisions majeures sont cohérentes avec leur cadre
          de valeurs profond et leur vision à long terme surperforment structurellement leurs pairs — pas parce qu'ils
          ont de meilleures informations, mais parce qu'ils opèrent depuis un niveau de clarté que les autres n'ont
          pas encore atteint{" "}
          <span className="text-xs text-n-faint">(Seligman, 2011 · Damasio, 1994 · Kahneman, 2011)</span>.
        </p>
        <p className="reveal">
          La métaphysique appliquée à la stratégie d'entreprise n'est pas une croyance. C'est une discipline de
          précision : identifier les couches de réalité que les outils classiques ne capturent pas, les rendre lisibles,
          et les transformer en levier décisionnel. Ce que nous appelons "invisible" aujourd'hui sera nommé et enseigné
          dans vingt ans. Nous travaillons simplement avec vingt ans d'avance.
        </p>
        <p className="reveal text-n-text">
          <strong>Ce n'est pas une question de croyance. C'est une question d'architecture décisionnelle.</strong>
        </p>
        <blockquote className="reveal bq-gold">
          Le Désalignement de Fréquence Stratégique™ est auto-occultant par nature. Le dirigeant qui est dedans ne peut
          pas le voir depuis l'intérieur — parce que ses propres outils de lecture sont calibrés sur la couche
          précédente.
        </blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueProtocol() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="protocol" className="section-pad section-dark">
      <div className="container-nomos">
        <div className="reveal text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Le Protocole</span>
          <h3 className="font-display text-xl text-n-text mt-2 mb-4">Alignement Invisible™</h3>
          <p className="section-intro mx-auto text-center">
            Trois couches simultanées. Chaque couche est nécessaire. Aucune ne suffit seule.
          </p>
        </div>
        <div className="reveal flex flex-col gap-10 max-w-3xl mx-auto">
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">01</span>

            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 1 · Lecture
            </h4>
            <p className="text-xs text-n-faint mb-4">Qu'est-ce qui opère réellement dans votre trajectoire ?</p>
            <p className="text-sm text-n-muted mb-3">
              Cartographie de la couche invisible active dans votre business : quelles intentions pilotent réellement vos
              décisions, quels patterns se répètent, quels leviers sont présents mais non activés.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Identification du Désalignement de Fréquence Stratégique™ dans sa forme spécifique à votre trajectoire :
              où précisément la vision, le positionnement et les décisions divergent.
            </p>
            <p className="layer-result text-sm font-medium mt-4">
              → Cartographie précise de la couche invisible · Diagnostic du désalignement actif.
            </p>
          </div>
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">02</span>
            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 2 · Alignement
            </h4>
            <p className="text-xs text-n-faint mb-4">Recalibrer vision, décisions et positionnement sur la même fréquence.</p>
            <p className="text-sm text-n-muted mb-3">
              Reconstruction de la cohérence entre ce que vous portez profondément, ce que vous dites publiquement et
              ce que vous décidez quotidiennement. Pas comme exercice intellectuel — comme architecture opératoire.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Formulation de la vision directrice à fréquence alignée : une vision qui filtre les décisions,
              attire les bons acteurs et positionne le business dans la partie qui se jouera dans 10 ans.
            </p>
            <p className="layer-result text-sm font-medium mt-4">→ Cohérence interne restaurée · Vision directrice à fréquence alignée.</p>
          </div>
          <div className="border border-n-border rounded-lg p-8 relative">
            <span className="absolute top-4 right-6 text-4xl font-bold text-n-surface-2 leading-none">03</span>
            <h4 className="font-body font-semibold text-lg text-n-text mb-1 tracking-normal normal-case">
              Couche 3 · Avant-garde
            </h4>
            <p className="text-xs text-n-faint mb-4">Vous positionner dans la prochaine partie avant qu'elle commence.</p>
            <p className="text-sm text-n-muted mb-3">
              Identification des leviers invisibles à activer maintenant pour être structurellement positionné dans
              10 à 20 ans : quels marchés, quels positionnements, quels acteurs, quels formats émergents.
            </p>
            <p className="text-sm text-n-muted mb-3">
              Plan d'incarnation de l'avant-garde : comment rendre visible ce que vous portez, dans les bons formats,
              aux bons interlocuteurs, au bon moment — sans brûler d'énergie sur des fréquences qui ne sont pas les vôtres.
            </p>
            <p className="layer-result text-sm font-medium mt-4">→ Positionnement avant-garde structuré · Incarnation publique alignée.</p>
          </div>
        </div>
        <div className="reveal max-w-3xl mx-auto mt-12 p-8 border border-n-gold-dim rounded-lg text-center">
          <p className="text-n-muted text-sm leading-relaxed">
            Les concepts opèrent en profondeur. Les livrables arrivent dès la première session.{" "}
            Cartographie des désalignements actifs, vision directrice reformulée, décisions bloquées débloquées,
            positionnement public refondé.{" "}
            <strong className="text-n-text">Ce protocole ne produit pas des insights — il produit des architectures.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueFuture() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="future" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Dans 6 mois.<br />
          Voici à quoi ressemble un mardi matin.
        </h2>
        <div className="reveal space-y-4 text-n-muted my-10">
          <p className="text-n-text font-medium">Mardi. 8h00.</p>
          <p>
            Vous ouvrez votre agenda avec une clarté que vous n'aviez pas il y a six mois. Vous savez exactement dans
            quelle partie vous jouez — et tout ce qui n'est pas cette partie, vous le voyez immédiatement. La décision
            sur laquelle vous bloquiez depuis trois mois a été prise il y a deux semaines. Pas parce que vous aviez
            plus d'informations. Parce que vous aviez changé de couche de lecture. La décision était là depuis le
            début. Vous ne pouviez pas la voir depuis l'ancienne couche.
          </p>
          <p>
            À 10h, vous avez un appel avec un partenaire stratégique que vous n'auriez jamais rencontré il y a un an.
            Il vous a contacté parce qu'un de vos contenus publics — rédigé depuis votre positionnement refondu — a
            résonné avec sa vision. Ce n'était pas du networking. C'était de l'alignement de fréquence.
          </p>
          <p>
            L'après-midi est libre. Pas parce que votre business tourne seul — mais parce que vous avez arrêté de
            répondre à des sollicitations qui n'étaient pas à votre fréquence. Votre équipe sait quoi faire. Vous
            avez défini le cap avec suffisamment de précision pour que les décisions quotidiennes se prennent sans vous.
          </p>
          <p>
            <strong className="text-n-gold-warm font-display italic text-lg">
              Ce n'est pas du luxe. C'est ce qui se passe quand vous êtes enfin dans la bonne partie.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueProof() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-pad">
      <div className="container-nomos narrow">
        <blockquote className="reveal bq-gold text-center">
          Parmi les dirigeants accompagnés dans cette dimension : fondateurs d'agences et de scale-ups ayant atteint
          un plateau stratégique, opérateurs positionnés sur des marchés en transformation profonde, architectes de
          structures à horizon 10–20 ans. Tous avaient un point commun : les outils classiques avaient produit des
          résultats — mais pas la lecture.
        </blockquote>
      </div>
    </section>
  );
}

function MetaphysiqueFounder() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">L'architecte du protocole.</h2>
        <div className="reveal space-y-4 text-n-muted">
          <p>
            Ce protocole est conçu et conduit par <strong className="text-n-text">Léo</strong> — fondateur de NOMOS.
          </p>
          <p>
            Ce protocole n'est pas né d'une théorie. Il est né d'une observation répétée : les dirigeants qui
            franchissaient vraiment un palier de trajectoire — pas juste de revenus — avaient tous, à un moment,
            accédé à une lecture de leur situation que leurs outils habituels ne leur donnaient pas. Pas un meilleur
            consultant. Pas un meilleur framework. Une couche différente. C'est cette couche que la Dimension
            Métaphysique cartographie et active.
          </p>
          <p>
            NOMOS a été construit sur une conviction : les problèmes des dirigeants à haut niveau ne sont pas des
            problèmes de méthode. Ce sont des problèmes de couche de lecture. NOMOS traite la couche biologique et
            décisionnelle (Protocole CRISIS). ASCENSION traite la couche identitaire (Protocole LEVEL UP). La Dimension
            Métaphysique traite la couche la plus profonde — et la plus rentable : l'alignement invisible entre
            intention, vision et positionnement.
          </p>
          <p>
            <strong className="text-n-text">Ce n'est pas du coaching. Ce n'est pas du consulting. Ce n'est pas de la thérapie.</strong>
          </p>
          <p>
            C'est une architecture de précision appliquée à la couche que les autres outils ne lisent pas encore. Léo
            intervient comme <strong className="text-n-text">architecte stratégique de fréquence</strong> — avec la
            rigueur d'un diagnostic clinique et la vision d'un opérateur qui a vingt ans d'avance sur son marché.
          </p>
          <p>
            Comme pour NOMOS et ASCENSION : places extrêmement limitées, 1:1, sans délégation.
          </p>
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold">
              L
            </div>
            <div className="text-sm">
              <p className="font-semibold text-n-text">Léo</p>
              <p className="text-n-muted">Fondateur NOMOS · Architecte stratégique de fréquence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueRoi() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="roi" className="section-pad">
      <div className="container-nomos narrow space-y-4 text-n-muted">
        <h2 className="reveal h-section text-n-text">
          La vraie question n'est pas<br />
          « est-ce que ça vaut le coup ? »
        </h2>
        <p className="reveal section-intro">
          C'est : <em>combien me coûte chaque mois de décisions prises depuis la mauvaise couche ?</em>
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          Les décisions prises depuis la mauvaise couche
        </h3>
        <p className="reveal">
          Un dirigeant dont le positionnement public est désaligné avec sa fréquence réelle attire structurellement
          les mauvais clients, les mauvais partenaires, les mauvais talents. Pas parce que son offre est mauvaise —
          parce que son signal n'est pas calibré sur sa cible réelle. Chaque mois de désalignement est un mois de
          volume généré au mauvais endroit.
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          Les opportunités de prochaine génération
        </h3>
        <p className="reveal">
          Les opportunités majeures — les partenariats stratégiques, les marchés émergents, les décisions qui
          changent de trajectoire — ne se présentent pas à ceux qui opèrent depuis la couche précédente. Elles
          vont à ceux qui sont déjà positionnés dans la prochaine. L'avant-garde ne se rattrape pas — elle se
          construit, ou elle se manque.
        </p>
        <h3 className="reveal font-body font-semibold text-lg mt-10 mb-2 text-n-gold-warm tracking-normal normal-case">
          L'asymétrie qui s'installe
        </h3>
        <p className="reveal">
          Pendant que vous opérez depuis les outils de l'époque précédente, une poignée de dirigeants opèrent déjà
          depuis la couche suivante. Cette asymétrie ne se réduit pas avec le temps — elle se creuse. Dans cinq ans,
          la différence sera mesurable. Dans dix ans, elle sera structurelle. Dans vingt ans, elle sera irréversible.
        </p>
        <div className="reveal my-8 space-y-0">
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Par mois de désalignement</span>
            <span className="text-n-muted sm:text-right">10 000€ à 40 000€ en signal non calibré</span>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Sur 6 mois</span>
            <span className="text-n-muted sm:text-right">60 000€ à 240 000€</span>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 border-b border-n-border text-sm">
            <span className="font-medium">Avantage compétitif généré</span>
            <span className="text-n-muted sm:text-right">Non chiffrable — structurel et durable</span>
          </div>
          <div
            className="flex justify-between flex-col sm:flex-row gap-1 px-6 py-4 rounded mt-2 text-sm font-semibold"
            style={{ background: "hsl(var(--color-gold-glow))" }}
          >
            <span className="text-n-gold-warm">ROI conservateur du protocole</span>
            <span className="text-n-gold-warm sm:text-right">10:1 à 50:1 sur 24 mois</span>
          </div>
        </div>
        <p className="reveal font-display text-xl text-center my-10 text-n-text">
          <strong>Puis-je me permettre de jouer la mauvaise partie vingt ans de plus ?</strong>
        </p>
      </div>
    </section>
  );
}

const metaphysiqueFaqs = [
  {
    q: "Qu'est-ce que la métaphysique a à voir avec mon business ?",
    a: "Tout. La métaphysique, au sens où nous l'utilisons, c'est la discipline qui traite ce que les outils classiques ne lisent pas encore : intention, alignement profond, timing stratégique, fréquence de positionnement. Ce n'est pas de la spiritualité. C'est de la précision appliquée à la couche invisible de votre trajectoire.",
  },
  {
    q: "En quoi est-ce différent d'ASCENSION ou de NOMOS ?",
    a: "NOMOS traite la couche biologique et décisionnelle (surcharge, dérive neuro-opérationnelle). ASCENSION traite la couche identitaire (plafond de cohérence). La Dimension Métaphysique traite la couche la plus profonde : l'alignement entre intention, vision et positionnement — et la capacité à opérer depuis la prochaine partie avant qu'elle commence.",
  },
  {
    q: "C'est concret ? Ou c'est théorique ?",
    a: "Ultra-concret. Chaque session produit des livrables précis : cartographie des désalignements actifs, vision directrice reformulée, décisions bloquées débloquées, positionnement public refondé. Les concepts sont profonds. L'application est immédiate.",
  },
  {
    q: "Combien de temps dure le protocole ?",
    a: "Six mois. Trois phases : lecture et diagnostic (M1–M2), alignement et reconstruction (M3–M4), incarnation et positionnement avant-garde (M5–M6). Conduit en 1:1, sans délégation, par Léo du premier au dernier jour.",
  },
  {
    q: "Pour quel profil de dirigeant ?",
    a: "Pour les dirigeants qui ont épuisé les outils classiques et qui sentent qu'il manque une couche de lecture dans leur trajectoire. Vous n'avez pas besoin d'être en crise. Vous avez besoin de sentir qu'il y a un palier au-dessus — et que vous ne savez pas encore comment le lire.",
  },
  {
    q: "Comment savoir si je suis prêt ?",
    a: "Si vous reconnaissez au moins 4 des 6 signatures listées plus haut — vous êtes prêt. Si vous n'êtes pas sûr, l'audit de 45 minutes est là exactement pour ça : identifier si la couche invisible est active dans votre trajectoire, et si ce protocole est adapté à votre phase.",
  },
];

function MetaphysiqueFaq() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="faq" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">Ce que vous vous demandez probablement.</h2>
        <div className="flex flex-col">
          {metaphysiqueFaqs.map((f) => {
            const openByDefault =
              f.q === "Qu'est-ce que la métaphysique a à voir avec mon business ?" ||
              f.q === "C'est concret ? Ou c'est théorique ?";
            return (
              <details key={f.q} open={openByDefault} className="reveal border-b border-n-border group">
                <summary className="py-5 font-medium cursor-pointer flex justify-between items-center text-base list-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="text-lg text-n-faint group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-5 text-n-muted text-sm max-w-[60ch]">{f.a}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetaphysiqueCta() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="audit" className="section-pad text-center pb-24">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          La prochaine partie ne se jouera pas<br />
          <em>avec les outils de celle-ci.</em>
        </h2>
        <p className="reveal section-intro mx-auto text-center">
          Vous avez déjà prouvé que vous pouvez opérer à haut niveau avec les outils classiques. Ce que vous n'avez
          pas encore, c'est l'accès à la couche qui déterminera votre trajectoire dans dix, vingt ans. C'est ça que
          nous allons construire.
        </p>
        <div className="reveal flex flex-col gap-6 my-10 text-left max-w-[560px] mx-auto">
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">Votre Désalignement de Fréquence Stratégique™ identifié</strong> —
              cartographié avec précision pour votre trajectoire spécifique.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">Les 3 leviers invisibles actifs dans votre business</strong> — ceux
              qui bloquent vos décisions majeures et votre positionnement réel.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-n-gold-warm shrink-0">⬥</span>
            <p className="text-sm text-n-muted">
              <strong className="text-n-text">La prochaine étape claire</strong> — si la Dimension Métaphysique est
              adaptée à votre phase, vous le saurez. Sinon aussi.
            </p>
          </div>
        </div>
        <p className="reveal guarantee-reminder text-sm mb-8">
          Si l'audit ne vous donne pas la lecture la plus précise que vous ayez jamais eue sur votre trajectoire —
          remboursement intégral.
        </p>
        <div className="reveal inline-block p-6 bg-n-surface border border-n-border rounded-lg mb-8 text-left">
          <p className="text-sm text-n-text mb-2">
            <strong>Places extrêmement limitées.</strong>
          </p>
          <p className="text-sm text-n-muted max-w-[50ch]">
            Chaque protocole est conduit en direct, 1:1, sans délégation. Si vous êtes sélectionné et choisissez de
            ne pas avancer — la place revient au prochain sur liste d'attente.
          </p>
        </div>
        <div className="reveal my-8">
          <a href={AUDIT_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary lg">
            Candidater pour l'audit Métaphysique — Offert
          </a>
          <p className="text-xs text-n-faint mt-3">
            Questionnaire de pré-qualification · Audit 45 min offert · Garantie de Diagnostic Absolue
          </p>
        </div>
      </div>
    </section>
  );
}

export default MetaphysiquePage;
