import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { AUDIT_FORM_URL } from "@/components/AuditCTABlock";

const OnboardingPage = () => {
  return (
    <div className="overflow-x-hidden min-h-dvh">
      <Header mode="hub" />
      <main>
        <section className="text-center pt-24 pb-12 px-4">
          <div className="container-nomos narrow">
            <span className="reveal eyebrow-bordered mb-8 inline-block">
              Réservé aux fondateurs · 20 000€ – 150 000€/mois
            </span>
            <h1 className="font-display font-normal text-[clamp(2.4rem,1rem+5vw,4.5rem)] leading-tight text-n-text mb-6">
              Deux portes.<br />
              Deux états. <em className="italic text-n-gold">Une même exigence.</em>
            </h1>
            <p className="text-base text-n-muted max-w-[56ch] mx-auto">
              Crise ou level up : deux façons d&apos;entrer dans le diagnostic. Derrière, la même rigueur — méthode
              systémique et protocole NOMOS ou ASCENSION selon votre situation réelle.
            </p>
          </div>
        </section>

        <section id="gateway" className="section-pad pt-8">
          <div className="container-nomos max-w-[1280px]">
            <div className="gateway-grid">
              <Link
                to="/nomos"
                className="gateway-card gateway-crise"
                aria-label="Porte Crise — continuer vers le protocole NOMOS"
              >
                <div className="gateway-label">Crise</div>
                <h2 className="gateway-title">
                  Mon business<br />
                  me dépasse.
                </h2>
                <p className="gateway-description">
                  Vous travaillez plus que jamais.
                  <br />
                  Les résultats ne suivent plus.
                  <br />
                  Votre équipe dépend de vous pour tout.
                  <br />
                  Le soir, votre cerveau ne s&apos;éteint pas.
                </p>
                <ul className="gateway-signals">
                  <li>Délégation impossible</li>
                  <li>Décisions lentes ou repoussées</li>
                  <li>Charge mentale permanente</li>
                  <li>Sommeil dégradé</li>
                  <li>Sentiment d&apos;être prisonnier de son propre business</li>
                </ul>
                <div className="gateway-cta-wrap">
                  <span className="btn-primary btn-large gateway-cta">Protocole CRISIS</span>
                  <p className="gateway-note">Neuro-opérationnel · 90 jours intensifs</p>
                </div>
              </Link>

              <Link
                to="/ascension"
                className="gateway-card gateway-levelup"
                aria-label="Porte Level up — continuer vers le protocole ASCENSION"
              >
                <div className="gateway-label gateway-label-levelup">Level up</div>
                <h2 className="gateway-title">
                  Je veux passer<br />
                  au niveau supérieur.
                </h2>
                <p className="gateway-description">
                  Votre business tourne.
                  <br />
                  Vos systèmes sont en place.
                  <br />
                  Mais vous sentez que vous n&apos;êtes pas à votre plein potentiel.
                  <br />
                  Vous voulez incarner davantage ce que vous pouvez devenir.
                </p>
                <ul className="gateway-signals gateway-signals-levelup">
                  <li>Business stable mais plafonné identitairement</li>
                  <li>Vision long terme à clarifier</li>
                  <li>Positionnement d&apos;autorité à bâtir</li>
                  <li>Identité de dirigeant à incarner</li>
                  <li>Prochain palier stratégique à franchir</li>
                </ul>
                <div className="gateway-cta-wrap">
                  <span className="btn-primary btn-large gateway-cta">Protocole LEVEL UP</span>
                  <p className="gateway-note">Identité &amp; stratégie · 6 mois</p>
                </div>
              </Link>

            </div>

            <div className="gateway-doubt">
              <p className="gateway-doubt-text">Pas sûr par quelle porte entrer ?</p>
              <p className="gateway-doubt-sub">
                En 45 minutes d&apos;audit, nous identifions où vous en êtes — et si un protocole opérationnel est le
                bon cadre.
              </p>
              <a href={AUDIT_FORM_URL} target="_blank" rel="noopener noreferrer" className="gateway-doubt-link">
                Réserver un audit de diagnostic →
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad section-dark pt-16 pb-16">
          <div className="container-nomos narrow text-center">
            <span className="eyebrow">Méthode commune</span>
            <h2 className="h-section mt-4">Deux portes. Une même rigueur.</h2>
            <p className="section-intro mx-auto">
              Même refus du coaching déguisé et des recettes génériques. Diagnostic exigeant avant toute décision
              d&apos;engagement sur les protocoles opérationnels. Garantie de Diagnostic Absolue lorsque l&apos;audit
              précède un protocole NOMOS ou ASCENSION.
            </p>
            <div className="reassure-grid">
              <div className="reassure-item">
                <h4>1:1 sans délégation</h4>
                <p>
                  Chaque protocole opérationnel est conduit par le fondateur en direct. Aucune sous-traitance, aucune
                  équipe de coachs intermédiaires.
                </p>
              </div>
              <div className="reassure-item">
                <h4>Places limitées</h4>
                <p>
                  NOMOS : 5 dirigeants par trimestre. ASCENSION : 5 par semestre. Aucune extension possible.
                </p>
              </div>
              <div className="reassure-item">
                <h4>Garantie de Diagnostic</h4>
                <p>
                  Si le mécanisme précis n&apos;est pas identifié à l&apos;issue de l&apos;audit — remboursement
                  intégral. Sans condition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="hub" />
    </div>
  );
};

export default OnboardingPage;
