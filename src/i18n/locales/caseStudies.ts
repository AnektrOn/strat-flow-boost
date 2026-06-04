export type CaseStudyTableRow = { signal: string; mechanism: string };

export type CaseStudySubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudySection = {
  id: string;
  num: string;
  title: string;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  bullets?: string[];
  numbered?: string[];
  subsections?: CaseStudySubsection[];
  crisisTable?: {
    headers: { signal: string; mechanism: string };
    rows: CaseStudyTableRow[];
  };
  quote?: { text: string; attribution: string };
  outcomes?: string[];
  testimonials?: string[];
};

export type GlossaryEntry = { term: string; definition: string };

export type GlossaryGroup = { title: string; entries: GlossaryEntry[] };

export type CaseStudyGlossary = {
  title: string;
  groups: GlossaryGroup[];
};

export const CASE_STUDY_SLUGS = ["c", "l", "h"] as const;
export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number];

export type CaseStudyStudy = {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    protocol: string;
    entryDoor: string;
    statusLine?: string;
  };
  sections: CaseStudySection[];
  closing: {
    title: string;
    lead: string;
    paragraphs: string[];
    protocolLine: string;
    bullets: string[];
    guaranteeTitle: string;
    guarantee: string;
    cta: string;
  };
};

export const fr = {
  caseStudies: {
    hubTeaser: {
      eyebrow: "Preuve clinique",
      title: "Études de cas · Protocole NOMOS™",
      description:
        "Dirigeantes C., L. et H. : souveraineté, Vaisseau Amiral, identité cognitive du lieu — documentation clinique NOMOS™.",
      cta: "Voir les études de cas",
      linkC: "Étude C.",
      linkL: "Étude L.",
      linkH: "Étude H.",
      ariaLabel: "Voir les études de cas cliniques NOMOS",
    },
    index: {
      eyebrow: "Études de cas cliniques",
      title: "Transformations documentées",
      subtitle:
        "Analyses consolidées sous protocole NOMOS™ : diagnostic, phases d'intervention, résultats et témoignages. Le texte évolue ; la structure reste stable.",
      backHub: "← Retour aux portes",
      readCta: "Lire l'étude complète",
      cardC: {
        label: "Protocole NOMOS™",
        title: "La Restauration de la Souveraineté",
        subject: "Dirigeante C.",
        excerpt:
          "Dissonance identitaire, goudron cognitif, plafond de cohérence — puis filtre vitré, résonance commerciale et indouchabilité opérationnelle.",
      },
      cardL: {
        label: "Protocole NOMOS™",
        title: "Purge du Vaisseau Amiral",
        subject: "Dirigeante L.",
        excerpt:
          "Backdoors énergétiques, charge allostatique somatisée, purge de l'écosystème — puis offre Ultra-Élite et momentum biologique.",
      },
      cardH: {
        label: "Protocole NOMOS™",
        title: "De 40% à 85% d'Occupation",
        subject: "Dirigeante H.",
        excerpt:
          "Identité cognitive du lieu, émanation magnétique, pic à 85% — puis effondrement par refus de purger l'agent pathogène.",
      },
    },
    studies: {
      c: {
        slug: "c",
        hero: {
          eyebrow: "Étude de Cas Clinique — Protocole NOMOS™",
          title: "La Restauration de la Souveraineté",
          subtitle: "Le Cas de la Dirigeante C.",
          protocol: "Protocole NOMOS™",
          entryDoor: "Porte d'entrée NOMOS : Souveraineté",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profil & Diagnostic Initial",
            paragraphs: [
              "La Dirigeante C. est une entrepreneure opérant dans le secteur des immersions et voyages transformationnels de haut niveau (Népal, Bali, Sri Lanka). À l'entrée du protocole, le diagnostic révèle une Dissonance Identitaire et Opérationnelle majeure : une dispersion neuro-cognitive avancée, un burn-out latent, et une hyper-activité dépourvue de vecteur directionnel cohérent.",
              "Le signal endogène de C. — sa propre musique — était totalement annihilé par le bruit exogène. Son système nerveux, saturé, opérait en phase d'entropie : l'action ne visait plus l'expansion, mais l'occupation de l'espace psychique pour masquer un vide directionnel.",
            ],
            crisisTable: {
              headers: { signal: "Signal de Crise", mechanism: "Mécanisme Sous-jacent" },
              rows: [
                {
                  signal: "Surcharge & dispersion",
                  mechanism:
                    "Multiplication d'actions sans architecture → Identity Capping",
                },
                {
                  signal: "Légitimité par acquisition",
                  mechanism:
                    "Accumulation compulsive de formations pour masquer un sentiment d'illégitimité",
                },
                {
                  signal: "Sur-effort sécuritaire",
                  mechanism:
                    "Croyance que la réussite exige une souffrance opérationnelle",
                },
                {
                  signal: "Procrastination active",
                  mechanism:
                    "Mouvement permanent pour éviter de confronter l'incapacité à être",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Neutraliser le « Bruit du Monde »",
            paragraphs: [
              "Le Bruit du Monde désigne les fréquences stratégiques externes qui parasitent la vibration propre du dirigeant. Pour C., ce bruit s'est cristallisé autour de deux vecteurs :",
            ],
            subsections: [
              {
                title: "Le Modèle de la « Meuf en Rouge » (Lauren Bemer)",
                paragraphs: [
                  "Le protocole NOMOS identifie les fréquences Rouge et Jaune dans le marketing comme des zones de haute pression et de confrontation émotionnelle — closing agressif, manipulation, injonction. Ces fréquences sont fondamentalement incompatibles avec la musique intérieure de C. et ont généré une saturation cognitive sévère.",
                ],
              },
              {
                title: "L'Épisode du Goudron Cognitif",
                paragraphs: [
                  "L'investissement de 3 600 € dans une formation inadaptée — structurée autour de vidéos pré-enregistrées et d'un closing manipulatoire — constitue l'événement déclencheur. La découverte de l'inadéquation au jour 16, soit deux jours après le délai légal de rétractation de 14 jours, a transformé la déception en une masse critique d'énergie noire. Selon la loi de rebond cinétique (Bim-Bim), l'énergie engagée contre un mur ne disparaît pas : elle rebondit vers sa source, déclenchant une phase d'autoflagellation intense qui a alourdi davantage le système.",
                ],
              },
            ],
            paragraphsAfter: ["Redéfinition des deux états de mouvement :"],
            bullets: [
              "Inertie : mouvement sans agency, déclenché par une force externe que le sujet subit sans pouvoir l'interrompre.",
              "Momentum : mouvement volontaire et structuré, où chaque itération renforce la puissance de l'émanation.",
            ],
            numbered: [
              "Technique du Mur (« Tilleter le Mur ») : plutôt que de laisser l'énergie d'un échec rebondir frontalement sur le sujet, le protocole consiste à incliner ce mur pour rediriger l'impact vers une intention productive — Conversions, Apprentissage, Itération.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Dissoudre le Plafond de Cohérence Identitaire",
            paragraphs: [
              "Le blocage central résidait dans la corrélation erronée entre légitimité et accumulation théorique. C. cherchait dans les formations externes la validation qu'elle ne s'autorisait pas intérieurement — enfermée dans une posture de consommatrice d'information, elle ne pouvait accéder au statut d'Initiatrice.",
              "La transformation neuro-opérationnelle a exigé trois basculements :",
            ],
            numbered: [
              "Cessation de l'over-identification au Labeur — Déprogrammer la croyance que l'effort permanent est le garant de la visibilité.",
              "Passage de l'Acquisition à la Restitution — Prioriser la restitution de sa propre expertise vibratoire plutôt que la répétition des méthodes d'autrui.",
              "Investissement de la Musique Souveraine — Transition de la posture d'étudiante (recevoir) à celle d'émettrice (projeter).",
            ],
            quote: {
              text: "Tout est musique. Chaque individu est un orchestre évoluant au sein d'un orchestre plus vaste. La défaillance systémique survient lorsque l'on cesse de jouer sa propre partition pour tenter de reproduire, par mimétisme ou peur, la sonorité d'un autre.",
              attribution: "Loi NOMOS",
            },
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Architecture de la Versatilité",
            paragraphs: [
              "Le business de C. a été restructuré selon la métaphore des doigts de la main : chaque offre (Népal, Bali, Sri Lanka) représente un doigt ; sans une main (identité centrale forte) pour les coordonner, l'action reste fragmentée et inefficace. La flexibilité permet à ces offres de fonctionner comme un écosystème vivant plutôt que comme des produits isolés.",
              "Rejet Vibratoire comme Signal Stratégique : le dégoût viscéral exprimé par C. face aux modèles de banques de vidéos préenregistrées n'est pas une préférence — c'est une Incompatibilité Fréquentielle diagnostique. Le modèle de croissance NOMOS pour C. repose exclusivement sur la présence, l'énergie directe et la guidance en temps réel. Son pivot a orienté l'action vers le présentiel concret : Tour de France / Belgique, reconnexion avec ses ambassadrices — court-circuitant les simulacres digitaux pour recréer un momentum organique.",
            ],
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — L'Accomplissement du « Je Suis »",
            paragraphs: [
              "Cette phase acte la fin de la quête d'identité. Le travail n'est plus de chercher qui elle est, mais d'appliquer les compréhensions acquises. C'est le passage de la recherche à l'affirmation.",
              "Les mots d'ancrage définissant la musique intérieure de C. sont désormais :",
            ],
            bullets: [
              "Connexion — Profondeur du lien",
              "Partage — Restitution fluide",
              "Initiatrice — Puissance de mise en mouvement",
              "Immersion — Cadre sacré de transformation",
            ],
          },
          {
            id: "phase5",
            num: "06",
            title: "Phase 5 — Le Blindage du Centre : Le Filtre Vitré",
            paragraphs: [
              "Axiome NOMOS : « Plus on devient fort, plus l'oppression est forte. » L'augmentation de la puissance d'émanation provoque mécaniquement une résistance accrue de l'environnement extérieur.",
              "Le Filtre Vitré (SAS) répond à cette loi par une double dynamique biomécanique asymétrique :",
              "Cette asymétrie — protection contre l'entrée, puissance en sortie — garantit que la dirigeante reste indouchable tout en demeurant une émettrice de haute fréquence.",
            ],
            bullets: [
              "L'Émanation (Expire) : couplée à une respiration profonde, elle projette la Musique souveraine vers l'extérieur — l'énergie sort pour impacter le marché.",
              "La Vitre (Boundary) : contrairement à un bouclier qui absorbe, le Filtre Vitré fait rebondir les projections extérieures (jugements, injonctions) sans qu'elles ne pénètrent l'espace décisionnel. C'est une barrière de neutralité active.",
            ],
          },
          {
            id: "results",
            num: "07",
            title: "Résultats : Création du Momentum par Résonance",
            paragraphs: [
              "Une fois la fréquence identitaire restaurée, les résultats se sont produits par simple résonance — sans recours aux tactiques de closing manipulatoires :",
              "C. a retrouvé sa capacité de « gazelle » : effectuer des pivots rapides sans perdre son centre. Au terme du protocole, elle opère depuis l'état d'Indouchabilité — les bruits extérieurs ne sont plus des interférences, mais des données périphériques traitées sans affect.",
            ],
            outcomes: [
              "3 contrats signés pour l'expédition au Népal, avec acomptes versés, dès le changement de fréquence",
              "Réactivation d'une cliente Sri Lanka — illustration directe de la force d'attraction d'un signal clair",
              "Afflux de nouveaux prospects via des appels fondés sur la rencontre et l'intention",
              "Validation des immersions Bali et Sri Lanka",
              "Vision élargie : création d'un Mouvement International de Femmes",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Témoignages",
            testimonials: [
              "What. Moi, je me suis régalé, c'est une approche totalement différente de ce que j'avais déjà pu réaliser. Je me suis senti hyper à l'aise. Ça m'a élargi cette flexibilité. Maintenant, quand j'ai des idées qui arrivent, c'est me dire : oui, pourquoi pas — alors qu'avant je me serais enfermée dans ce qu'on m'avait dit de faire, ou la voie commune.",
              "Le plus gros shift a été identitaire. Je croyais avoir fait ce travail, mais il restait des couches de conditionnements qui pilotaient mes décisions dans le sur-effort. Revenir à mon propre fonctionnement a été une déprogrammation nécessaire de la personne que je croyais devoir être pour réussir.",
              "C'est dans le 'fer' que je croyais rencontrer ma sécurité. Aujourd'hui, je ne fonctionne plus au forcing. Je vois la possibilité réelle de construire un mouvement international de femmes — un véritable écosystème expansif sans me dénaturer.",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Suite du Protocole : L'Exocortex (ASCENSION)",
            paragraphs: [
              "L'évolution vers le Protocole ASCENSION active l'Exocortex — le Cerveau Extérieur neuro-opérationnel. Ce système comprend :",
            ],
            bullets: [
              "Diagnostic par 100 questions identifiant les Archétypes dominants (Mystique, Sage, Guérisseur)",
              "Monitoring Énergétique : suivi des interactions et surveillance de « l'énergie des lieux » pour optimiser les routines de la dirigeante",
              "Lois Universelles : étude approfondie du Kybalion (Lois du Rythme, de la Vibration et de la Polarité) pour ancrer le centre de pouvoir de manière définitive",
            ],
          },
        ],
        closing: {
          title: "Diagnostic NOMOS — Êtes-Vous Concerné ?",
          lead: "Vous travaillez avec une intensité croissante pour des résultats qui plafonnent ? Votre cerveau ne sature plus — il stagne dans une procrastination active où le mouvement ne génère plus de progrès ? Vous êtes probablement prisonnier d'un Plafond de Cohérence Identitaire.",
          paragraphs: [
            "Le Protocole NOMOS n'est pas un coaching de gestion. C'est une intervention de haute précision sur l'architecture neuro-opérationnelle de votre leadership.",
          ],
          protocolLine: "Places limitées : 5 dirigeants par trimestre (NOMOS) / 5 par semestre (ASCENSION)",
          bullets: [
            "Exigence de Diagnostic : l'accès au protocole est conditionné par un audit préalable",
          ],
          guaranteeTitle: "Garantie Absolue",
          guarantee:
            "Si le mécanisme précis de votre blocage n'est pas identifié lors de l'audit, remboursement intégral de la séance.",
          cta: "Réserver un audit de diagnostic",
        },
      } as CaseStudyStudy,
      l: {
        slug: "l",
        hero: {
          eyebrow: "Étude de Cas Clinique — Protocole NOMOS™",
          title: "Purge du Vaisseau Amiral & Régulation Neuro-Systémique",
          subtitle: "Le Cas de la Dirigeante L.",
          protocol: "Protocole NOMOS™",
          entryDoor: "Porte d'entrée NOMOS : Vaisseau Amiral",
          statusLine:
            "25 mai 2026 · Phase initiale complétée — protocole complet estimé à 12 mois minimum",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profil & Diagnostic Initial",
            paragraphs: [
              "La Dirigeante L. est fondatrice d'une école de formation et de coaching reconnue. Elle sollicite l'intervention NOMOS pour un problème de performance sur ses campagnes d'attraction. L'audit d'entrée révèle rapidement que la défaillance n'est pas technique — elle est systémique et identitaire.",
              "En surface : une entreprise rentable, un delivery délégué, un agenda rempli. En profondeur : le Vaisseau Amiral est percé. La dirigeante s'épuisait à gérer des frictions mineures au lieu de piloter son entreprise depuis son Centre.",
            ],
            crisisTable: {
              headers: { signal: "Signal de Crise", mechanism: "Mécanisme Sous-jacent" },
              rows: [
                {
                  signal: "Parasitage de l'écosystème",
                  mechanism:
                    "Réseau infiltré par des profils toxiques agissant comme des Backdoors énergétiques",
                },
                {
                  signal: "Sur-effort sécuritaire",
                  mechanism:
                    "Croyance encodée que la réussite est une fonction linéaire de l'intensité du travail",
                },
                {
                  signal: "Inversion identitaire",
                  mechanism:
                    "Confusion entre le Moi (pilotage neutre) et le Je (auto-identification péjorative)",
                },
                {
                  signal: "Somatisation du SNA",
                  mechanism:
                    "Le corps traduit la surcharge mentale en signaux physiques d'alarme",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Identification des Frictions & Purge de l'Écosystème",
            paragraphs: [
              "Le Bruit du Monde ne venait pas uniquement du marché — il provenait de l'intérieur même du réseau de L.",
            ],
            subsections: [
              {
                title: "Les Backdoors du Vaisseau",
                paragraphs: [
                  "Trois vecteurs de fuite identifiés : un ancien associé la décrédibilisant publiquement, une ex-collaboratrice forçant les frontières de l'entreprise en mode sangsue énergétique, une partenaire commerciale pratiquant la rétention de ventes par peur de la concurrence. Le Collaborateur S. avait notamment ouvert des Backdoors émotionnelles via un triangle dramatique (victime / sauveur), extrayant les ressources humaines du Vaisseau sans contrepartie.",
                ],
              },
              {
                title: "L'Épisode du Goudron Cognitif",
                paragraphs: [
                  "Un investissement de 3 600 € auprès de l'Expert B. (Fréquence Rouge) sur une offre de contenus pré-enregistrés — découverts inadaptés après le délai légal de rétractation. Selon la loi de rebond cinétique (Bim-Bim), l'énergie engagée contre ce mur ne disparaît pas : elle rebondit vers sa source, déclenchant une boucle d'autoflagellation systémique qui a alourdi davantage le système.",
                ],
              },
            ],
            paragraphsAfter: ["L'axiome appliqué : l'univers amplifie là où le dirigeant place son attention."],
            bullets: [
              "En consacrant son énergie à gérer les profils toxiques, L. les cristallisait.",
              "La première urgence : fermeture définitive des Backdoors.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Nettoyage de l'Information Cristallisée & Régulation Neurologique",
            subsections: [
              {
                title: "Le Nettoyage de l'Information Cristallisée",
                paragraphs: [
                  "Certains collaborateurs s'accrochaient à de vieilles mémoires toxiques, incapables d'évoluer. Application du protocole de réinitialisation fréquentielle pour neutraliser les lignes de résonance néfastes et recalibrer les ancrages à un état vierge — bloquant les lignes de résonance qui maintenaient L. dans l'orbite de ces systèmes dégradés.",
                ],
              },
              {
                title: "Régulation Neurologique & Loi du Rythme",
                paragraphs: [
                  "L'épuisement ne restait pas mental — il s'était inscrit dans le corps. Pour stopper la somatisation, il fallait ralentir le Système Nerveux Autonome — pas seulement le mental. Déploiement d'ancrages biologiques (chocolat noir, palette chromatique sombre et stable) et instauration de cycles rythmiques : 20 min de focus / 10 min de jeu. L'objectif : que le corps cesse de percevoir le business comme une menace pour recommencer à émaner.",
                ],
                bullets: [
                  "Extrémités froides — SNA saturé, incapable de distribuer l'énergie cinétique aux périphéries",
                  "Eczéma inflammatoire des paupières — résidu somatique d'une hyper-imagination forcée ; le cerveau traite la pensée comme une orientation oculaire physique",
                  "Blessure physique (entorse) — signal de rupture systémique, collision entre l'élan interne et la résistance de l'environnement",
                ],
              },
            ],
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Déprogrammation Identitaire : Le « Je Suis »",
            paragraphs: [
              "Le cœur du problème : L. se définissait à travers l'autre. Elle subissait un tango maladroit où l'environnement menait la danse — impossible de piloter un Vaisseau depuis ce positionnement.",
              "La transformation neuro-opérationnelle a exigé trois basculements :",
            ],
            numbered: [
              "Cessation de l'over-identification au Labeur — Déprogrammer la croyance que l'effort permanent est le garant de la réussite.",
              "Dépossession de l'identité relationnelle — Exercice clinique radical : réapprendre à décrire son business et sa vie sans jamais référencer l'existence de l'autre (ni collaborateurs, ni clients, ni concurrents).",
              "Réinstallation du Centre de gravité absolu — En cessant d'être un produit défini par le regard extérieur, L. a retrouvé sa capacité de pilotage neutre.",
            ],
            quote: {
              text: "Tout est musique. Chaque individu est un orchestre évoluant au sein d'un orchestre plus vaste. La défaillance systémique survient lorsque l'on cesse de jouer sa propre partition pour tenter de reproduire, par mimétisme ou peur, la sonorité d'un autre.",
              attribution: "Loi NOMOS",
            },
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — Le Blindage du Centre : Le Filtre Vitré",
            paragraphs: [
              "Axiome NOMOS : « Plus on devient fort, plus l'oppression est forte. » L'augmentation de la puissance d'émanation provoque mécaniquement une résistance accrue de l'environnement extérieur.",
              "Le Filtre Vitré (SAS) répond à cette loi par une double dynamique biomécanique asymétrique :",
              "Cette asymétrie — protection contre l'entrée, puissance en sortie — garantit que la dirigeante reste Indouchable tout en demeurant une émettrice de haute fréquence.",
            ],
            bullets: [
              "La Vitre (Boundary) : contrairement à un bouclier qui absorbe, le Filtre Vitré fait rebondir les projections extérieures (jugements, injonctions, fréquences parasites) sans qu'elles ne pénètrent l'espace décisionnel. C'est une barrière de neutralité active.",
              "L'Émanation (Expire) : couplée à une respiration profonde, elle projette la Musique souveraine vers l'extérieur — l'énergie sort pour impacter le marché.",
            ],
          },
          {
            id: "phase5",
            num: "06",
            title: "Phase 5 — Ascension vers l'Ultra-Élite",
            paragraphs: [
              "Une fois le Vaisseau colmaté et le Centre blindé, il fallait élever la dimension du business.",
            ],
            subsections: [
              {
                title: "Loi de Résonance",
                paragraphs: [
                  "Le système ne peut attirer que des fréquences égales ou inférieures à son propre niveau de conscience. Pour attirer l'excellence, L. devait élever son centre de gravité fréquentiel — et filtrer mécaniquement les profils à faible engagement.",
                ],
              },
              {
                title: "Pivot Structurel",
                paragraphs: [
                  "Abandon du modèle de production de masse (banques de vidéos pré-enregistrées, épuisantes et obsolètes) au profit d'une architecture de haute fréquence : accompagnement en direct, itération en temps réel, rayonnement organique. Restructuration de l'offre en un Programme Ultra-Premium à 15 000 € réservé aux initiés — moins de volume, fréquence stratégique maximale. Ce pivot a mécaniquement rehaussé la valeur perçue de l'ensemble de la marque.",
                ],
              },
            ],
          },
          {
            id: "results",
            num: "07",
            title: "Résultats : Purification de l'Écosystème & Momentum Biologique",
            paragraphs: [
              "Une fois le Centre restauré, les résultats se sont produits par simple résonance — sans recours aux tactiques de closing manipulatoires :",
              "L. a retrouvé sa capacité d'exécution fulgurante — décision actée en moins d'une heure là où l'hésitation chronique régnait. L'arrêt de la définition de soi par le regard des autres a libéré une bande passante cognitive massive pour piloter la croissance.",
            ],
            outcomes: [
              "Séparation actée et assumée avec l'ensemble des profils toxiques de l'écosystème",
              "Lancement de l'offre Ultra-Élite à 15 000 € — rehaussement immédiat de la valeur perçue de la marque",
              "Transition vers un réseau de pairs de haut niveau, indépendants de sa structure",
              "Effondrement de la charge allostatique — cessation de la somatisation",
              "Attraction de collaborateurs qui existent indépendamment d'elle — partenariats de pairs",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Témoignage",
            testimonials: [
              "Je me suis tellement trompée par le passé en engageant des gens. J'ai toujours pris les gens sous mon aile et ils n'étaient personne sans moi. Aujourd'hui, je travaille avec des gens qui existent indépendamment de moi, et c'est vachement reposant.",
              "Je me suis positionnée — le gros du travail est de cibler l'excellence, et d'arrêter de me définir par l'autre.",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Suite du Protocole : L'Exocortex (ASCENSION)",
            paragraphs: [
              "Ce cas illustre une réalité fondamentale du Protocole NOMOS : les dysfonctions de surface (performance publicitaire, conversion) sont rarement la cause réelle du plafonnement — elles en sont le symptôme. Un cas de cette complexité exige 12 mois minimum d'accompagnement pour ancrer durablement les recadrages identitaires et déployer l'Exocortex dans sa totalité.",
              "L'évolution vers le Protocole ASCENSION active l'Exocortex — le Cerveau Extérieur neuro-opérationnel. Ce système comprend :",
            ],
            bullets: [
              "Diagnostic par 100 questions identifiant les Archétypes dominants (Mystique, Sage, Guérisseur, Guerrier)",
              "Monitoring Énergétique : suivi des interactions et surveillance de l'énergie des lieux pour optimiser les routines de la dirigeante",
              "Lois Universelles : étude approfondie du Kybalion (Lois du Rythme, de la Vibration et de la Polarité) pour ancrer le centre de pouvoir de manière définitive",
            ],
          },
        ],
        closing: {
          title: "Diagnostic NOMOS — Êtes-Vous Concerné ?",
          lead: "Votre entreprise tourne, mais les dynamiques toxiques de votre écosystème saturent votre système nerveux ? Vous repoussez les décisions d'élite par manque de bande passante cognitive ? Le problème n'est pas votre stratégie marketing. C'est l'intégrité de votre Vaisseau Amiral.",
          paragraphs: [
            "Le Protocole NOMOS n'est pas un coaching de gestion. C'est une intervention de haute précision sur l'architecture neuro-opérationnelle de votre leadership.",
          ],
          protocolLine: "Places limitées : 5 dirigeants par trimestre (NOMOS) / 5 par semestre (ASCENSION)",
          bullets: [
            "Exigence de Diagnostic : l'accès est conditionné par un audit préalable",
          ],
          guaranteeTitle: "Garantie Absolue",
          guarantee:
            "Si le mécanisme précis de votre blocage n'est pas identifié lors de l'audit, remboursement intégral.",
          cta: "Demandez votre Audit Stratégique NOMOS",
        },
      } as CaseStudyStudy,
      h: {
        slug: "h",
        hero: {
          eyebrow: "Étude de Cas Clinique — Protocole NOMOS™",
          title: "De 40% à 85% d'Occupation : Ascension Fulgurante et Effondrement par Refus de Purge",
          subtitle: "Le Cas de la Dirigeante H.",
          protocol: "Protocole NOMOS™",
          entryDoor: "Porte d'entrée NOMOS : Lieu & Émanation",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profil & Diagnostic Initial",
            paragraphs: [
              "La Dirigeante H. est fondatrice d'un Boutique Hôtel & Retraite en Indonésie, gérant une équipe d'une quinzaine de personnes. À l'entrée du protocole, le diagnostic révèle un état d'épuisement biologique total : sans expérience préalable de direction, son système nerveux était écrasé par la situation. La dirigeante vivait littéralement enfermée dans l'une des chambres de son propre hôtel — investissement de toutes ses économies, devenu prison opérationnelle.",
              "Le signal endogène de H. — et celui de son lieu — était inexistant. L'hôtel n'émanait aucune fréquence propre. Il absorbait passivement le chaos extérieur.",
            ],
            crisisTable: {
              headers: { signal: "Signal de Crise", mechanism: "Mécanisme Sous-jacent" },
              rows: [
                {
                  signal: "Taux d'occupation stagné autour de 40%",
                  mechanism:
                    "Absence d'Identité Cognitive — le lieu absorbe au lieu d'émaner",
                },
                {
                  signal: "Fusion émotionnelle avec le business",
                  mechanism:
                    "Cortex préfrontal saturé, incapacité à prendre de la hauteur",
                },
                {
                  signal: "Absence d'expérience de direction",
                  mechanism:
                    "Système nerveux écrasé par la complexité opérationnelle",
                },
                {
                  signal: "Paradigme d'Absorption",
                  mechanism:
                    "Le lieu subit le bruit du monde au lieu de projeter une fréquence magnétique",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Créer l'Espace Cognitif",
            paragraphs: [
              "La première urgence n'était pas opérationnelle — elle était neurologique. Le cortex préfrontal de H. était saturé, la rendant structurellement incapable de piloter son entreprise avec hauteur et discernement.",
              "L'intervention initiale a reposé sur des protocoles issus des neurosciences et de la physique quantique (concepts de Donald Hoffman) pour stopper la Dérive Neuro-Opérationnelle. L'objectif : réapprendre à la dirigeante à percevoir la réalité de son business à long terme — dissocier la dirigeante du lieu pour qu'elle puisse le piloter plutôt que le subir.",
              "Redéfinition des deux états du système :",
            ],
            bullets: [
              "Absorption : état passif où le lieu réagit aux fréquences extérieures sans identité propre — il capte le chaos ambiant.",
              "Émanation : état actif où le lieu projette une fréquence identitaire cohérente qui attire par résonance les profils alignés.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Forger l'Identité Cognitive du Lieu",
            paragraphs: [
              "Le problème n'était pas l'emplacement, ni l'équipe, ni l'offre. Le problème était métaphysique : l'hôtel n'avait pas de musique.",
              "En s'appuyant sur la science des Champs Morphiques de Résonance (Rupert Sheldrake), le protocole a forgé l'Identité Cognitive de l'hôtel. Chaque lieu, comme chaque individu, possède une fréquence latente. Le travail a consisté à l'identifier, la cristalliser, et la projeter — transformant le lieu d'un espace de survie en un Centre d'Émanation magnétique.",
            ],
            quote: {
              text: "Tout est musique. Chaque individu est un orchestre évoluant au sein d'un orchestre plus vaste. La défaillance systémique survient lorsque l'on cesse de jouer sa propre partition pour tenter de reproduire, par mimétisme ou peur, la sonorité d'un autre.",
              attribution: "Loi NOMOS",
            },
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Identification de l'Agent Pathogène",
            paragraphs: [
              "Lors de l'alignement de la nouvelle identité du lieu, le système a mis en lumière une anomalie toxique.",
            ],
            subsections: [
              {
                title: "Le Praticien-Parasite",
                paragraphs: [
                  "Un praticien / guérisseur externe opérant au sein de l'hôtel agissait comme un agent infectieux du Champ Morphique. L'investigation a prouvé qu'il s'agissait d'un prédateur manipulateur générant de graves dissonances : attouchements et violences psychologiques sur les clientes. Il infectait de l'intérieur la fréquence même du lieu.",
                  "La loi systémique est sans appel : un agent toxique toléré dans l'écosystème perce la coque du Vaisseau Amiral. Cet agent a été cerclé de rouge — sa purge, identifiée comme condition sine qua non de la pérennité du momentum.",
                ],
              },
            ],
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — Le Blindage du Centre : Le Filtre Vitré",
            paragraphs: [
              "Axiome NOMOS : « Plus on devient fort, plus l'oppression est forte. » L'augmentation de la puissance d'émanation provoque mécaniquement une résistance accrue de l'environnement extérieur.",
              "Le Filtre Vitré (SAS) répond à cette loi par une double dynamique biomécanique asymétrique :",
              "Cette asymétrie — protection contre l'entrée, puissance en sortie — conditionne l'état d'Indouchabilité du Vaisseau.",
            ],
            bullets: [
              "La Vitre (Boundary) : contrairement à un bouclier qui absorbe, le Filtre Vitré fait rebondir les projections extérieures sans qu'elles ne pénètrent l'espace décisionnel. C'est une barrière de neutralité active — appliquée ici à l'échelle du lieu et de son écosystème.",
              "L'Émanation (Expire) : couplée à une respiration profonde, elle projette la fréquence souveraine vers l'extérieur — le lieu rayonne pour attirer par résonance.",
            ],
          },
          {
            id: "results",
            num: "06",
            title: "Résultats : Le Pic d'Émanation & l'Effondrement par Refus de Purge",
            paragraphs: [
              "Une fois le Champ Morphique stabilisé et l'agent toxique cerclé, l'écosystème a répondu par résonance — sans aucune campagne publicitaire.",
            ],
            subsections: [
              {
                title: "Le Momentum Quantique",
                paragraphs: [],
                bullets: [
                  "Mise en lumière organique par une influenceuse — sans prospection, sans paid media",
                  "Taux d'occupation passé de 40% à 85% en moins d'une semaine",
                  "Validation que l'Émanation produit des résultats physiques mesurables et immédiats",
                ],
              },
              {
                title: "La Zone de Threshold — La Sanction",
                paragraphs: [
                  "Pour verrouiller ce niveau de succès, la loi exigeait une décision de leadership pur : purger définitivement le praticien toxique. Face à cette décision, la dirigeante a été paralysée par son ancienne architecture identitaire — et a refusé de licencier l'agent pathogène.",
                  "La conséquence clinique fut immédiate : le maintien de la dissonance rendant l'architecture caduque, le cabinet a mis fin à l'accompagnement. Sans Exocortex pour maintenir sa fréquence, et gangrenée par l'agent toxique, l'entreprise est retombée autour de 55% quelques semaines plus tard.",
                ],
              },
            ],
          },
          {
            id: "analyse",
            num: "07",
            title: "Analyse Clinique NOMOS",
            paragraphs: [
              "Le succès organique fulgurant d'une entreprise n'a rien d'un hasard — c'est la conséquence d'une identité cognitive alignée. Mais les lois de la physique quantique et systémique ne négocient pas. Tolérer une dissonance morale ou un profil toxique dans votre écosystème perce instantanément la coque de votre Vaisseau Amiral. La croissance vous sera reprise aussi vite qu'elle vous a été donnée.",
              "Ce cas documente une réalité que peu d'accompagnants osent formuler : le protocole ne peut pas être plus fort que la volonté de la dirigeante à incarner ses propres décisions. NOMOS intervient sur l'architecture — mais la décision d'activer le leadership souverain appartient au sujet.",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Témoignage",
            paragraphs: [
              "Ce cas ne produit pas de témoignage client — l'accompagnement a été interrompu avant complétion du protocole, conformément à l'éthique NOMOS : aucune continuation possible en présence d'une dissonance identitaire non résolue.",
              "Le résultat parle seul :",
            ],
            bullets: [
              "+45 points d'occupation en moins d'une semaine",
              "Retour autour de 55% en quelques semaines par refus de purge",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Suite du Protocole : L'Exocortex (ASCENSION)",
            paragraphs: [
              "Ce cas illustre précisément pourquoi l'Exocortex est indispensable au-delà de la phase initiale. Sans cerveau extérieur pour maintenir la fréquence dans les zones de threshold — là où les anciennes architectures identitaires reprennent le contrôle — la dirigeante ne peut pas survivre à sa propre ascension.",
              "L'évolution vers le Protocole ASCENSION active l'Exocortex — le Cerveau Extérieur neuro-opérationnel. Ce système comprend :",
            ],
            bullets: [
              "Diagnostic par 100 questions identifiant les Archétypes dominants (Mystique, Sage, Guérisseur, Guerrier)",
              "Monitoring Énergétique : suivi des interactions et surveillance de l'énergie des lieux pour optimiser les routines de la dirigeante",
              "Lois Universelles : étude approfondie du Kybalion (Lois du Rythme, de la Vibration et de la Polarité) pour ancrer le centre de pouvoir de manière définitive",
            ],
          },
        ],
        closing: {
          title: "Diagnostic NOMOS — Êtes-Vous Concerné ?",
          lead: "Vous êtes prêt à propulser votre entreprise — mais avez-vous le courage de purger votre écosystème pour survivre à votre propre ascension ?",
          paragraphs: [
            "Le Protocole NOMOS n'est pas un coaching de gestion. C'est une intervention de haute précision sur l'architecture neuro-opérationnelle de votre leadership.",
          ],
          protocolLine: "Places limitées : 5 dirigeants par trimestre (NOMOS) / 5 par semestre (ASCENSION)",
          bullets: [
            "Exigence de Diagnostic : l'accès est conditionné par un audit préalable",
          ],
          guaranteeTitle: "Garantie Absolue",
          guarantee:
            "Si le mécanisme précis de votre blocage n'est pas identifié lors de l'audit, remboursement intégral.",
          cta: "Postulez pour un Audit Stratégique NOMOS",
        },
      } as CaseStudyStudy,
    },
    glossary: {
      title: "Termes Conceptuels NOMOS",
      groups: [
        {
          title: "Termes Conceptuels NOMOS",
          entries: [
            {
              term: "Dissonance Identitaire et Opérationnelle",
              definition:
                "Écart entre qui le dirigeant est profondément et la manière dont il opère au quotidien",
            },
            {
              term: "Fuite Énergétique Systémique",
              definition:
                "Déperdition d'énergie causée par des actions non alignées avec l'identité centrale",
            },
            {
              term: "Identity Capping",
              definition:
                "Plafonnement de la croissance dû à une identité rigide ou sous-développée",
            },
            {
              term: "Musique (intérieure / souveraine)",
              definition:
                "Signal endogène unique du dirigeant ; sa fréquence naturelle d'expression et d'action",
            },
            {
              term: "Bruit du Monde",
              definition:
                "Ensemble des fréquences extérieures (marketing, injonctions, modèles génériques) qui parasitent le signal intérieur",
            },
            {
              term: "Inertie vs Momentum",
              definition:
                "Distinction entre mouvement subi (sans agency) et mouvement intentionnel (souverain)",
            },
            {
              term: "Indouchabilité",
              definition:
                "État de stabilité interne où les stimuli extérieurs ne perturbent plus le centre décisionnel",
            },
            {
              term: "Vaisseau Amiral",
              definition:
                "Métaphore du business comme structure centrale du dirigeant ; son intégrité énergétique et opérationnelle",
            },
            {
              term: "Backdoors énergétiques",
              definition:
                "Profils ou dynamiques relationnelles qui drainent le système depuis l'intérieur de l'écosystème",
            },
            {
              term: "Information Cristallisée",
              definition:
                "Mémoires toxiques figées dans l'organisation qui maintiennent des lignes de résonance néfastes",
            },
            {
              term: "Identité Cognitive (du Lieu)",
              definition:
                "Fréquence propre d'un espace physique ; sa capacité à émaner plutôt qu'à absorber le chaos ambiant",
            },
            {
              term: "Champ Morphique",
              definition:
                "Champ de résonance collective d'un lieu ou d'une organisation, selon la science des champs morphiques",
            },
            {
              term: "Paradigme d'Absorption",
              definition:
                "État où le lieu ou le dirigeant subit les fréquences extérieures sans projection identitaire propre",
            },
            {
              term: "Agent Pathogène",
              definition:
                "Profil toxique infiltré dans l'écosystème qui infecte la fréquence du lieu ou du Vaisseau",
            },
          ],
        },
        {
          title: "Termes Neuro-Opérationnels",
          entries: [
            {
              term: "Procrastination Active",
              definition:
                "Mouvement permanent et apparent qui masque en réalité une incapacité à se positionner dans l'être",
            },
            {
              term: "Charge Allostatique",
              definition:
                "Usure cumulative du système nerveux causée par un sur-effort chronique",
            },
            {
              term: "Goudron Cognitif",
              definition:
                "Résidu mental lourd issu d'une décision mal alignée qui paralyse la fluidité décisionnelle",
            },
            {
              term: "Plafond de Cohérence Identitaire",
              definition:
                "Limite invisible au-delà de laquelle le dirigeant ne peut progresser tant que son identité interne et son positionnement externe restent en contradiction",
            },
            {
              term: "Rebond Cinétique (Bim-Bim)",
              definition:
                "Loi selon laquelle l'énergie engagée contre une résistance revient vers sa source si elle n'est pas redirigée",
            },
          ],
        },
        {
          title: "Termes Techniques du Protocole",
          entries: [
            {
              term: "Filtre Vitré (SAS)",
              definition:
                "Dispositif de visualisation biomécanique permettant d'observer les stimuli externes sans les laisser pénétrer l'espace décisionnel",
            },
            {
              term: "Émanation",
              definition:
                "Projection consciente et respiratoire de la fréquence souveraine vers l'extérieur",
            },
            {
              term: "Exocortex",
              definition:
                "Système neuro-opérationnel externe (Protocole ASCENSION) qui étend les capacités cognitives et stratégiques du dirigeant",
            },
            {
              term: "Tilleter le Mur",
              definition:
                "Technique de redirection de l'énergie d'impact pour transformer un échec en levier productif",
            },
          ],
        },
      ],
    },
    detail: {
      tocLabel: "Sommaire",
      glossaryLabel: "Glossaire NOMOS",
      glossaryOpen: "Ouvrir le glossaire",
      glossaryClose: "Fermer",
      readingTime: "{minutes} min de lecture",
      sectionsCount: "{count} sections",
      backToTop: "Haut de page",
      backIndex: "Toutes les études",
      backHub: "Portes d'entrée",
      auditCta: "Réserver un audit de diagnostic",
      closingEyebrow: "Prochaine étape",
    },
  },
};

export const en = {
  caseStudies: {
    hubTeaser: {
      eyebrow: "Clinical evidence",
      title: "Case studies · NOMOS Protocol™",
      description:
        "Leaders C., L. and H.: sovereignty, vessel purge, place cognitive identity — NOMOS Protocol™ clinical documentation.",
      cta: "View case studies",
      linkC: "Study C.",
      linkL: "Study L.",
      linkH: "Study H.",
      ariaLabel: "View NOMOS clinical case studies",
    },
    index: {
      eyebrow: "Clinical case studies",
      title: "Documented transformations",
      subtitle:
        "Consolidated analyses under NOMOS Protocol™: diagnostic, intervention phases, results, and testimonials.",
      backHub: "← Back to the doors",
      readCta: "Read full study",
      cardC: {
        label: "NOMOS Protocol™",
        title: "Restoration of Sovereignty",
        subject: "Leader C.",
        excerpt:
          "Identity dissonance, cognitive tar, coherence ceiling — then glass filter, commercial resonance, and operational untouchability.",
      },
      cardL: {
        label: "NOMOS Protocol™",
        title: "Flagship Vessel Purge",
        subject: "Leader L.",
        excerpt:
          "Energetic Backdoors, somatized allostatic load, ecosystem purge — then Ultra-Elite offer and biological momentum.",
      },
      cardH: {
        label: "NOMOS Protocol™",
        title: "From 40% to 85% Occupancy",
        subject: "Leader H.",
        excerpt:
          "Place cognitive identity, magnetic emanation, 85% peak — then collapse by refusing to purge pathogenic agent.",
      },
    },
    studies: {
      c: {
        slug: "c",
        hero: {
          eyebrow: "Clinical Case Study — NOMOS Protocol™",
          title: "Restoration of Sovereignty",
          subtitle: "The Case of Leader C.",
          protocol: "NOMOS Protocol™",
          entryDoor: "NOMOS entry door: Sovereignty",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profile & Initial Diagnostic",
            paragraphs: [
              "Leader C. is an entrepreneur in high-level transformational travel and immersions (Nepal, Bali, Sri Lanka). At protocol entry, diagnostic reveals major Identity and Operational Dissonance: advanced neuro-cognitive dispersion, latent burnout, and hyper-activity without coherent directional vector.",
              "C.'s endogenous signal—her own music—was fully annihilated by exogenous noise. Her saturated nervous system operated in entropy phase: action no longer targeted expansion but occupied psychic space to mask a directional void.",
            ],
            crisisTable: {
              headers: { signal: "Crisis Signal", mechanism: "Underlying Mechanism" },
              rows: [
                {
                  signal: "Overload & dispersion",
                  mechanism: "Multiplying actions without architecture → Identity Capping",
                },
                {
                  signal: "Legitimacy through acquisition",
                  mechanism: "Compulsive course accumulation masking illegitimacy feelings",
                },
                {
                  signal: "Security over-effort",
                  mechanism: "Belief that success requires operational suffering",
                },
                {
                  signal: "Active procrastination",
                  mechanism: "Constant movement to avoid confronting inability to be",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Neutralize « World Noise »",
            paragraphs: [
              "World Noise denotes external strategic frequencies parasitizing the leader's own vibration. For C., this noise crystallized around two vectors:",
            ],
            subsections: [
              {
                title: "The « Woman in Red » Model (Lauren Bemer)",
                paragraphs: [
                  "NOMOS identifies Red and Yellow marketing frequencies as high-pressure zones—aggressive closing, manipulation, injunction. Fundamentally incompatible with C.'s inner music; severe cognitive saturation followed.",
                ],
              },
              {
                title: "The Cognitive Tar Episode",
                paragraphs: [
                  "The €3,600 investment in a misaligned course—pre-recorded videos and manipulative closing—was the trigger. Discovering mismatch on day 16, two days after the 14-day withdrawal window, turned disappointment into critical black-energy mass. Per kinetic rebound law (Bim-Bim), energy against a wall returns to source, triggering intense self-flagellation that further burdened the system.",
                ],
              },
            ],
            paragraphsAfter: ["Redefinition of the two movement states:"],
            bullets: [
              "Inertia: movement without agency, triggered by external force the subject cannot interrupt.",
              "Momentum: voluntary structured movement where each iteration strengthens emanation power.",
            ],
            numbered: [
              "Wall Technique (« Tilting the Wall »): rather than letting failure energy rebound frontally, the protocol tilts the wall to redirect impact toward productive intention—Conversions, Learning, Iteration.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Dissolve the Identity Coherence Ceiling",
            paragraphs: [
              "Central blockage: erroneous correlation between legitimacy and theoretical accumulation. C. sought external courses for validation she wouldn't grant internally—trapped as information consumer, unable to reach Initiator status.",
              "Neuro-operational transformation required three shifts:",
            ],
            numbered: [
              "End over-identification with Toil—deprogram belief that permanent effort guarantees visibility.",
              "From Acquisition to Restitution—prioritize restituting her own vibratory expertise over repeating others' methods.",
              "Invest Sovereign Music—transition from student posture (receive) to emitter (project).",
            ],
            quote: {
              text: "Everything is music. Each individual is an orchestra within a greater orchestra. Systemic failure occurs when one stops playing one's own score to mimic another's sound through fear.",
              attribution: "NOMOS Law",
            },
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Versatility Architecture",
            paragraphs: [
              "C.'s business was restructured via the hand-fingers metaphor: each offer (Nepal, Bali, Sri Lanka) is a finger; without a strong hand (central identity) to coordinate, action stays fragmented.",
              "Vibratory Rejection as Strategic Signal: visceral disgust for pre-recorded video banks is diagnosed Frequency Incompatibility—not preference. NOMOS growth model for C. relies on presence, direct energy, real-time guidance. Pivot to concrete in-person: Tour de France/Belgium, reconnecting ambassadors—bypassing digital simulacra for organic momentum.",
            ],
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — Accomplishing « I Am »",
            paragraphs: [
              "This phase ends identity quest. Work is no longer finding who she is but applying acquired understanding—from search to affirmation.",
              "Anchoring words for C.'s inner music:",
            ],
            bullets: [
              "Connection — Depth of bond",
              "Sharing — Fluid restitution",
              "Initiator — Power to set movement",
              "Immersion — Sacred transformation frame",
            ],
          },
          {
            id: "phase5",
            num: "06",
            title: "Phase 5 — Center Armoring: The Glass Filter",
            paragraphs: [
              "NOMOS axiom: « The stronger you become, the stronger the oppression. » Increased emanation power mechanically increases external resistance.",
              "The Glass Filter (airlock) responds via asymmetric biomechanical dynamics:",
              "This asymmetry—protection against entry, power on exit—keeps the leader untouchable while remaining a high-frequency emitter.",
            ],
            bullets: [
              "Emanation (Expire): coupled with deep breath, projects Sovereign Music outward—energy exits to impact the market.",
              "The Glass (Boundary): unlike a shield that absorbs, the Glass Filter rebounds external projections without penetrating decision space—active neutrality barrier.",
            ],
          },
          {
            id: "results",
            num: "07",
            title: "Results: Momentum by Resonance",
            paragraphs: [
              "Once identity frequency was restored, results came through simple resonance—without manipulative closing tactics:",
              "C. regained « gazelle » capacity: rapid pivots without losing center. At protocol end, she operates from Untouchability—external noise is peripheral data processed without affect.",
            ],
            outcomes: [
              "3 Nepal expedition contracts signed with deposits upon frequency shift",
              "Sri Lanka client reactivation—direct illustration of clear signal attraction",
              "New prospect influx via intention-based calls",
              "Bali and Sri Lanka immersion validation",
              "Expanded vision: International Women's Movement creation",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Testimonials",
            testimonials: [
              "What. I really enjoyed it—totally different from anything I'd done. I felt extremely at ease. It expanded my flexibility. Now when ideas come, I say: why not—where before I'd lock into what I was told or the common path.",
              "The biggest shift was identity. I thought I'd done that work, but conditioning layers still drove over-effort decisions. Returning to my own functioning was necessary deprogramming of who I thought I had to be to succeed.",
              "I believed security lived in 'iron.' Today I no longer operate by forcing. I see a real possibility to build an international women's movement—an expansive ecosystem without self-betrayal.",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Protocol Continuation: The Exocortex (ASCENSION)",
            paragraphs: [
              "Evolution to ASCENSION Protocol activates the Exocortex—externalized neuro-operational brain. The system includes:",
            ],
            bullets: [
              "100-question diagnostic identifying dominant Archetypes (Mystic, Sage, Healer)",
              "Energy Monitoring: interaction tracking and « place energy » surveillance to optimize routines",
              "Universal Laws: deep Kybalion study (Rhythm, Vibration, Polarity) to anchor power center definitively",
            ],
          },
        ],
        closing: {
          title: "NOMOS Diagnostic — Does This Concern You?",
          lead: "Working harder for plateauing results? Your brain no longer saturates—it stagnates in active procrastination where movement no longer progresses? You may be trapped in an Identity Coherence Ceiling.",
          paragraphs: [
            "The NOMOS Protocol is not management coaching. It is high-precision intervention on your leadership's neuro-operational architecture.",
          ],
          protocolLine: "Limited places: 5 leaders per quarter (NOMOS) / 5 per semester (ASCENSION)",
          bullets: ["Diagnostic requirement: protocol access is conditioned on a prior audit"],
          guaranteeTitle: "Absolute Guarantee",
          guarantee:
            "If your precise blockage mechanism isn't identified during the audit, full session refund.",
          cta: "Book a diagnostic audit",
        },
      } as CaseStudyStudy,
      l: {
        slug: "l",
        hero: {
          eyebrow: "Clinical Case Study — NOMOS Protocol™",
          title: "Flagship Vessel Purge & Neuro-Systemic Regulation",
          subtitle: "The Case of Leader L.",
          protocol: "NOMOS Protocol™",
          entryDoor: "NOMOS entry door: Flagship Vessel",
          statusLine:
            "May 25, 2026 · Initial phase completed — full protocol estimated at 12 months minimum",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profile & Initial Diagnostic",
            paragraphs: [
              "Leader L. founded a recognized training and coaching school. She sought NOMOS for underperforming attraction campaigns. Entry audit quickly revealed the failure is not technical—it is systemic and identity-based.",
              "On the surface: profitable business, delegated delivery, full agenda. Deep down: the Flagship Vessel is breached. The leader exhausted herself managing minor frictions instead of piloting from her Center.",
            ],
            crisisTable: {
              headers: { signal: "Crisis Signal", mechanism: "Underlying Mechanism" },
              rows: [
                {
                  signal: "Ecosystem parasitism",
                  mechanism: "Network infiltrated by toxic profiles acting as energetic Backdoors",
                },
                {
                  signal: "Security over-effort",
                  mechanism: "Encoded belief that success is linear function of work intensity",
                },
                {
                  signal: "Identity inversion",
                  mechanism: "Confusion between Self (neutral piloting) and Ego (pejorative self-identification)",
                },
                {
                  signal: "ANS somatization",
                  mechanism: "Body translates mental overload into physical alarm signals",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Friction Mapping & Ecosystem Purge",
            paragraphs: [
              "World Noise came not only from the market—it originated inside L.'s own network.",
            ],
            subsections: [
              {
                title: "Vessel Backdoors",
                paragraphs: [
                  "Three leak vectors identified: a former partner publicly discrediting her, an ex-collaborator forcing boundaries in energy-vampire mode, a commercial partner hoarding sales from fear of competition. Collaborator S. notably opened emotional Backdoors via a drama triangle (victim/savior), extracting human resources without return.",
                ],
              },
              {
                title: "The Cognitive Tar Episode",
                paragraphs: [
                  "A €3,600 investment with Expert B. (Red Frequency) on pre-recorded content—found misaligned after the legal withdrawal window. Per kinetic rebound law (Bim-Bim), energy against this wall returns to source, triggering systemic self-flagellation that further burdened the system.",
                ],
              },
            ],
            paragraphsAfter: ["Applied axiom: the universe amplifies where the leader places attention."],
            bullets: [
              "By dedicating energy to toxic profiles, L. crystallized them.",
              "First urgency: definitive closure of Backdoors.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Crystallized Information Cleanup & Neurological Regulation",
            subsections: [
              {
                title: "Crystallized Information Cleanup",
                paragraphs: [
                  "Some collaborators clung to old toxic memories, unable to evolve. Frequency reset protocol applied to neutralize harmful resonance lines and recalibrate anchors to virgin state—blocking lines keeping L. in degraded systems' orbit.",
                ],
              },
              {
                title: "Neurological Regulation & Law of Rhythm",
                paragraphs: [
                  "Exhaustion was not only mental—it was inscribed in the body. To stop somatization, the Autonomic Nervous System had to slow—not just the mind. Biological anchors deployed (dark chocolate, stable dark palette) and rhythmic cycles: 20 min focus / 10 min play. Goal: body stops perceiving business as threat and begins emanating again.",
                ],
                bullets: [
                  "Cold extremities—saturated ANS unable to distribute kinetic energy to peripheries",
                  "Inflammatory eyelid eczema—somatic residue of forced hyper-imagination",
                  "Physical injury (sprain)—systemic rupture signal, collision between inner drive and environmental resistance",
                ],
              },
            ],
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Identity Deprogramming: « I Am »",
            paragraphs: [
              "Core problem: L. defined herself through others. She endured a dysfunctional tango where environment led—impossible to pilot a Vessel from that position.",
              "Neuro-operational transformation required three shifts:",
            ],
            numbered: [
              "End over-identification with Toil—deprogram belief that permanent effort guarantees success.",
              "Dispossession of relational identity—clinical exercise: describe business and life without referencing others (collaborators, clients, competitors).",
              "Reinstall absolute center of gravity—ceasing to be a product defined by external gaze restored neutral piloting capacity.",
            ],
            quote: {
              text: "Everything is music. Each individual is an orchestra within a greater orchestra. Systemic failure occurs when one stops playing one's own score to mimic another's sound through fear.",
              attribution: "NOMOS Law",
            },
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — Center Armoring: The Glass Filter",
            paragraphs: [
              "NOMOS axiom: « The stronger you become, the stronger the oppression. » Increased emanation power mechanically increases external resistance.",
              "The Glass Filter (airlock) responds via asymmetric biomechanical dynamics:",
              "This asymmetry—protection against entry, power on exit—keeps the leader Untouchable while remaining a high-frequency emitter.",
            ],
            bullets: [
              "The Glass (Boundary): unlike a shield that absorbs, the Glass Filter rebounds external projections without penetrating decision space—active neutrality barrier.",
              "Emanation (Expire): coupled with deep breath, projects Sovereign Music outward—energy exits to impact the market.",
            ],
          },
          {
            id: "phase5",
            num: "06",
            title: "Phase 5 — Ascension to Ultra-Elite",
            paragraphs: ["Once the Vessel was sealed and Center armored, business dimension had to rise."],
            subsections: [
              {
                title: "Law of Resonance",
                paragraphs: [
                  "The system can only attract frequencies equal to or below its consciousness level. To attract excellence, L. had to raise her frequency center of gravity—and mechanically filter low-engagement profiles.",
                ],
              },
              {
                title: "Structural Pivot",
                paragraphs: [
                  "Abandoning mass production (pre-recorded video banks) for high-frequency architecture: live accompaniment, real-time iteration, organic radiance. Offer restructured into €15,000 Ultra-Premium Program for initiates—less volume, maximum strategic frequency. This pivot mechanically raised perceived brand value.",
                ],
              },
            ],
          },
          {
            id: "results",
            num: "07",
            title: "Results: Ecosystem Purification & Biological Momentum",
            paragraphs: [
              "Once Center was restored, results came through simple resonance—without manipulative closing tactics:",
              "L. regained lightning execution—decisions in under an hour where chronic hesitation reigned. Stopping self-definition through others' gaze freed massive cognitive bandwidth for growth piloting.",
            ],
            outcomes: [
              "Decisive separation from all toxic ecosystem profiles",
              "Ultra-Elite €15,000 offer launch—immediate perceived brand value increase",
              "Transition to high-level peer network independent of her structure",
              "Allostatic load collapse—somatization ceased",
              "Attraction of collaborators who exist independently of her—peer partnerships",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Testimonial",
            testimonials: [
              "I was so wrong in the past hiring people. I always took people under my wing and they were nobody without me. Today I work with people who exist independently of me—and it's deeply restful.",
              "I positioned myself—the core work is targeting excellence and stopping defining myself through others.",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Protocol Continuation: The Exocortex (ASCENSION)",
            paragraphs: [
              "This case illustrates a NOMOS fundamental: surface dysfunctions (ad performance, conversion) are rarely the real ceiling cause—they are symptoms. This complexity requires 12 months minimum to anchor identity recalibrations and deploy the full Exocortex.",
              "Evolution to ASCENSION Protocol activates the Exocortex—externalized neuro-operational brain. The system includes:",
            ],
            bullets: [
              "100-question diagnostic identifying dominant Archetypes (Mystic, Sage, Healer, Warrior)",
              "Energy Monitoring: interaction tracking and place energy surveillance to optimize routines",
              "Universal Laws: deep Kybalion study (Rhythm, Vibration, Polarity) to anchor power center definitively",
            ],
          },
        ],
        closing: {
          title: "NOMOS Diagnostic — Does This Concern You?",
          lead: "Your business runs, but toxic ecosystem dynamics saturate your nervous system? You postpone elite decisions for lack of cognitive bandwidth? The problem isn't your marketing strategy. It's your Flagship Vessel's integrity.",
          paragraphs: [
            "The NOMOS Protocol is not management coaching. It is high-precision intervention on your leadership's neuro-operational architecture.",
          ],
          protocolLine: "Limited places: 5 leaders per quarter (NOMOS) / 5 per semester (ASCENSION)",
          bullets: ["Diagnostic requirement: access conditioned on a prior audit"],
          guaranteeTitle: "Absolute Guarantee",
          guarantee:
            "If your precise blockage mechanism isn't identified during the audit, full refund.",
          cta: "Request your NOMOS Strategic Audit",
        },
      } as CaseStudyStudy,
      h: {
        slug: "h",
        hero: {
          eyebrow: "Clinical Case Study — NOMOS Protocol™",
          title: "From 40% to 85% Occupancy: Lightning Ascension & Collapse by Refusal to Purge",
          subtitle: "The Case of Leader H.",
          protocol: "NOMOS Protocol™",
          entryDoor: "NOMOS entry door: Place & Emanation",
        },
        sections: [
          {
            id: "profil",
            num: "01",
            title: "Profile & Initial Diagnostic",
            paragraphs: [
              "Leader H. founded a Boutique Hotel & Retreat in Indonesia, managing a team of about fifteen. At protocol entry, diagnostic revealed total biological exhaustion: with no prior leadership experience, her nervous system was crushed by the situation. She literally lived locked in one of her hotel rooms—investment of all her savings, become an operational prison.",
              "H.'s endogenous signal—and her place's—was nonexistent. The hotel emanated no own frequency. It passively absorbed external chaos.",
            ],
            crisisTable: {
              headers: { signal: "Crisis Signal", mechanism: "Underlying Mechanism" },
              rows: [
                {
                  signal: "Occupancy stuck around 40%",
                  mechanism: "Cognitive Identity absence—place absorbs instead of emanating",
                },
                {
                  signal: "Emotional fusion with business",
                  mechanism: "Saturated prefrontal cortex, inability to gain altitude",
                },
                {
                  signal: "No leadership experience",
                  mechanism: "Nervous system crushed by operational complexity",
                },
                {
                  signal: "Absorption Paradigm",
                  mechanism: "Place suffers world noise instead of projecting magnetic frequency",
                },
              ],
            },
          },
          {
            id: "phase1",
            num: "02",
            title: "Phase 1 — Create Cognitive Space",
            paragraphs: [
              "First urgency was not operational—it was neurological. H.'s prefrontal cortex was saturated, structurally unable to pilot with altitude and discernment.",
              "Initial intervention used neuroscience and quantum physics protocols (Donald Hoffman concepts) to stop Neuro-Operational Drift. Goal: relearn perceiving business reality long-term—dissociate leader from place so she pilots rather than suffers it.",
              "Redefinition of two system states:",
            ],
            bullets: [
              "Absorption: passive state where place reacts to external frequencies without own identity—captures ambient chaos.",
              "Emanation: active state where place projects coherent identity frequency attracting aligned profiles by resonance.",
            ],
          },
          {
            id: "phase2",
            num: "03",
            title: "Phase 2 — Forge the Place's Cognitive Identity",
            paragraphs: [
              "Problem wasn't location, team, or offer. Problem was metaphysical: the hotel had no music.",
              "Using Morphic Resonance Field science (Rupert Sheldrake), protocol forged the hotel's Cognitive Identity. Each place, like each individual, has latent frequency. Work: identify, crystallize, project—transforming place from survival space to magnetic Emanation Center.",
            ],
            quote: {
              text: "Everything is music. Each individual is an orchestra within a greater orchestra. Systemic failure occurs when one stops playing one's own score to mimic another's sound through fear.",
              attribution: "NOMOS Law",
            },
          },
          {
            id: "phase3",
            num: "04",
            title: "Phase 3 — Pathogenic Agent Identification",
            paragraphs: [
              "When aligning the place's new identity, the system revealed a toxic anomaly.",
            ],
            subsections: [
              {
                title: "The Practitioner-Parasite",
                paragraphs: [
                  "An external practitioner/healer operating within the hotel acted as Morphic Field infectious agent. Investigation proved a manipulative predator causing severe dissonance: touching and psychological violence on clients. He infected the place's very frequency from within.",
                  "Systemic law is clear: a tolerated toxic agent in the ecosystem breaches the Flagship Vessel hull. This agent was circled in red—purge identified as sine qua non for momentum sustainability.",
                ],
              },
            ],
          },
          {
            id: "phase4",
            num: "05",
            title: "Phase 4 — Center Armoring: The Glass Filter",
            paragraphs: [
              "NOMOS axiom: « The stronger you become, the stronger the oppression. » Increased emanation power mechanically increases external resistance.",
              "The Glass Filter (airlock) responds via asymmetric biomechanical dynamics:",
              "This asymmetry—protection against entry, power on exit—conditions the Vessel's Untouchability state.",
            ],
            bullets: [
              "The Glass (Boundary): rebounds external projections without penetrating decision space—active neutrality barrier applied at place and ecosystem scale.",
              "Emanation (Expire): coupled with deep breath, projects sovereign frequency outward—place radiates to attract by resonance.",
            ],
          },
          {
            id: "results",
            num: "06",
            title: "Results: Emanation Peak & Collapse by Refusal to Purge",
            paragraphs: [
              "Once Morphic Field stabilized and toxic agent circled, ecosystem responded by resonance—with no advertising campaign.",
            ],
            subsections: [
              {
                title: "Quantum Momentum",
                paragraphs: [],
                bullets: [
                  "Organic spotlight by influencer—no prospecting, no paid media",
                  "Occupancy from 40% to 85% in under one week",
                  "Validation that Emanation produces measurable immediate physical results",
                ],
              },
              {
                title: "Threshold Zone — The Sanction",
                paragraphs: [
                  "To lock this success level, law required pure leadership decision: definitively purge the toxic practitioner. Facing this, the leader was paralyzed by old identity architecture—and refused to dismiss the pathogenic agent.",
                  "Immediate clinical consequence: maintaining dissonance voided architecture, firm ended accompaniment. Without Exocortex to maintain frequency, gangrened by toxic agent, business fell back to around 55% within weeks.",
                ],
              },
            ],
          },
          {
            id: "analyse",
            num: "07",
            title: "NOMOS Clinical Analysis",
            paragraphs: [
              "Lightning organic business success is no accident—it's aligned cognitive identity consequence. But quantum and systemic physics laws don't negotiate. Tolerating moral dissonance or toxic profile in your ecosystem instantly breaches your Flagship Vessel hull. Growth will be reclaimed as fast as it was given.",
              "This case documents what few coaches dare state: protocol cannot be stronger than the leader's will to embody their own decisions. NOMOS intervenes on architecture—but activating sovereign leadership belongs to the subject.",
            ],
          },
          {
            id: "testimonials",
            num: "08",
            title: "Testimonial",
            paragraphs: [
              "This case produces no client testimonial—accompaniment was stopped before protocol completion, per NOMOS ethics: no continuation possible with unresolved identity dissonance.",
              "The result speaks alone:",
            ],
            bullets: [
              "+45 occupancy points in under one week",
              "Return to around 55% within weeks by refusal to purge",
            ],
          },
          {
            id: "exocortex",
            num: "09",
            title: "Protocol Continuation: The Exocortex (ASCENSION)",
            paragraphs: [
              "This case shows precisely why Exocortex is indispensable beyond initial phase. Without external brain to maintain frequency in threshold zones—where old identity architectures regain control—the leader cannot survive their own ascension.",
              "Evolution to ASCENSION Protocol activates the Exocortex—externalized neuro-operational brain. The system includes:",
            ],
            bullets: [
              "100-question diagnostic identifying dominant Archetypes (Mystic, Sage, Healer, Warrior)",
              "Energy Monitoring: interaction tracking and place energy surveillance to optimize routines",
              "Universal Laws: deep Kybalion study (Rhythm, Vibration, Polarity) to anchor power center definitively",
            ],
          },
        ],
        closing: {
          title: "NOMOS Diagnostic — Does This Concern You?",
          lead: "Ready to propel your business—but do you have the courage to purge your ecosystem to survive your own ascension?",
          paragraphs: [
            "The NOMOS Protocol is not management coaching. It is high-precision intervention on your leadership's neuro-operational architecture.",
          ],
          protocolLine: "Limited places: 5 leaders per quarter (NOMOS) / 5 per semester (ASCENSION)",
          bullets: ["Diagnostic requirement: access conditioned on a prior audit"],
          guaranteeTitle: "Absolute Guarantee",
          guarantee:
            "If your precise blockage mechanism isn't identified during the audit, full refund.",
          cta: "Apply for a NOMOS Strategic Audit",
        },
      } as CaseStudyStudy,
    },
    glossary: {
      title: "NOMOS Conceptual Terms",
      groups: [
        {
          title: "NOMOS Conceptual Terms",
          entries: [
            {
              term: "Identity and Operational Dissonance",
              definition: "Gap between who the leader deeply is and how they operate day to day",
            },
            {
              term: "Systemic Energy Leakage",
              definition: "Energy loss caused by actions not aligned with central identity",
            },
            {
              term: "Identity Capping",
              definition: "Growth ceiling due to rigid or underdeveloped identity",
            },
            {
              term: "Music (inner / sovereign)",
              definition: "Leader's unique endogenous signal; natural frequency of expression and action",
            },
            {
              term: "World Noise",
              definition:
                "Set of external frequencies (marketing, injunctions, generic models) parasitizing the inner signal",
            },
            {
              term: "Inertia vs Momentum",
              definition: "Distinction between suffered movement (no agency) and intentional (sovereign) movement",
            },
            {
              term: "Untouchability",
              definition:
                "Internal stability state where external stimuli no longer disturb the decision center",
            },
            {
              term: "Flagship Vessel",
              definition:
                "Metaphor for the business as the leader's central structure; its energetic and operational integrity",
            },
            {
              term: "Energetic Backdoors",
              definition:
                "Profiles or relational dynamics draining the system from inside the ecosystem",
            },
            {
              term: "Crystallized Information",
              definition:
                "Toxic memories frozen in the organization maintaining harmful resonance lines",
            },
            {
              term: "Cognitive Identity (of Place)",
              definition:
                "A physical space's own frequency; its capacity to emanate rather than absorb ambient chaos",
            },
            {
              term: "Morphic Field",
              definition:
                "Collective resonance field of a place or organization, per morphic field science",
            },
            {
              term: "Absorption Paradigm",
              definition:
                "State where place or leader suffers external frequencies without own identity projection",
            },
            {
              term: "Pathogenic Agent",
              definition:
                "Toxic profile infiltrating ecosystem, infecting place or Vessel frequency",
            },
          ],
        },
        {
          title: "Neuro-Operational Terms",
          entries: [
            {
              term: "Active Procrastination",
              definition: "Constant apparent movement masking inability to position oneself in being",
            },
            {
              term: "Allostatic Load",
              definition: "Cumulative nervous system wear from chronic over-effort",
            },
            {
              term: "Cognitive Tar",
              definition: "Heavy mental residue from misaligned decision paralyzing decision fluidity",
            },
            {
              term: "Identity Coherence Ceiling",
              definition:
                "Invisible limit beyond which the leader cannot progress while internal identity and external positioning contradict",
            },
            {
              term: "Kinetic Rebound (Bim-Bim)",
              definition:
                "Law that energy engaged against resistance returns to its source if not redirected",
            },
          ],
        },
        {
          title: "Protocol Technical Terms",
          entries: [
            {
              term: "Glass Filter (airlock)",
              definition:
                "Biomechanical visualization device to observe external stimuli without penetrating decision space",
            },
            {
              term: "Emanation",
              definition: "Conscious respiratory projection of sovereign frequency outward",
            },
            {
              term: "Exocortex",
              definition:
                "External neuro-operational system (ASCENSION Protocol) extending leader cognitive and strategic capacity",
            },
            {
              term: "Tilting the Wall",
              definition: "Impact energy redirection technique turning failure into productive leverage",
            },
          ],
        },
      ],
    },
    detail: {
      tocLabel: "Contents",
      glossaryLabel: "NOMOS Glossary",
      glossaryOpen: "Open glossary",
      glossaryClose: "Close",
      readingTime: "{minutes} min read",
      sectionsCount: "{count} sections",
      backToTop: "Back to top",
      backIndex: "All case studies",
      backHub: "Entry doors",
      auditCta: "Book a diagnostic audit",
      closingEyebrow: "Next step",
    },
  },
};
