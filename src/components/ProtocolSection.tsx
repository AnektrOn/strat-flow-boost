import { useScrollReveal } from "@/hooks/useScrollReveal";

const layers = [
  {
    num: "01",
    title: "Couche Biologique",
    sub: "SNA désrégulé · cortisol chronique · cycles hyper-crash",
    body: "Le Protocole Neurological Bypass intervient directement sur le système nerveux autonome via des protocoles de régulation polyvagale (Porges, 2011). Ce n'est pas de la méditation. C'est de la recalibration du set-point biologique — de \"mode survie\" à \"mode expansion.\"",
    result: "Résultat mesurable : clarté stable en moins de 14 jours.",
  },
  {
    num: "02",
    title: "Couche Identitaire",
    sub: "Thermostat financier · équation \"contrôle = sécurité\"",
    body: "La Recalibration Neuro-Identitaire reconfigure l'équation \"contrôle = sécurité\" en \"délégation structurée = sécurité\" — par neurological imprinting ancré dans le réel business.",
    result: "Résultat mesurable : fin des reprises de délégation à 48h.",
  },
  {
    num: "03",
    title: "Couche Décisionnelle",
    sub: "Absence d'architecture des droits décisionnels",
    body: "L'Alignement Exécutif installe la Decision Rights Map + 3 SOPs d'autorité sur mesure. Qui décide quoi, jusqu'à quel seuil, sans remonter au dirigeant.",
    result: "Résultat mesurable : cadence décisionnelle < 48h.",
  },
];

const timeline = [
  { time: "Avant J+1", event: "Bug principal identifié + Kill List des 3 frictions majeures" },
  { time: "J+1", event: "CEO Map complète — pour la première fois, une carte précise de votre système interne" },
  { time: "J+7 à J+14", event: "Clarté mentale stable — fin des réveils nocturnes" },
  { time: "J+21", event: "Première décision déléguée tenue sans escalade" },
  { time: "J+45", event: "Cadence décisionnelle < 48h opérationnelle" },
  { time: "J+90", event: "Business documenté, scorecard actif, autonomie systémique" },
];

const ProtocolSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="protocol" className="section-pad">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Une intervention chirurgicale.<br />Pas du coaching.
        </h2>
        <p className="reveal section-intro">
          La Dérive Neuro-Opérationnelle™ est un problème tri-dimensionnel. C'est
          pourquoi les solutions mono-couche ne tiennent jamais.
        </p>

        <div className="reveal text-center mb-12">
          <span className="eyebrow block mb-2">
            Le Protocole de Recalibration Tri-Couche™
          </span>
          <h3 className="font-display text-xl">
            Protocole APEX™ — Architecture & Performance Exécutive
          </h3>
        </div>

        <div className="flex flex-col gap-10 mb-12">
          {layers.map((l) => (
            <div
              key={l.num}
              className="reveal border border-n-border rounded-lg p-8 relative"
            >
              <span
                className="absolute top-4 right-6 text-5xl font-bold leading-none font-body"
                style={{ color: "hsl(var(--color-surface-2))" }}
              >
                {l.num}
              </span>
              <h4 className="text-lg text-n-text font-semibold mb-1">{l.title}</h4>
              <p className="text-xs text-n-faint mb-4">{l.sub}</p>
              <p className="text-n-muted">{l.body}</p>
              <p className="text-n-teal font-medium mt-4">{l.result}</p>
            </div>
          ))}
        </div>

        <h3 className="reveal h-sub text-center mb-8">Timeline des résultats</h3>
        <div className="flex flex-col mb-10">
          {timeline.map((t) => (
            <div
              key={t.time}
              className="reveal grid gap-6 py-4 border-b border-n-border"
              style={{ gridTemplateColumns: "120px 1fr" }}
            >
              <span className="font-semibold text-sm text-n-teal whitespace-nowrap">
                {t.time}
              </span>
              <span className="text-sm text-n-muted">{t.event}</span>
            </div>
          ))}
        </div>

        <p className="reveal text-sm text-n-muted text-center mb-8">
          Ce protocole exige de vous : <strong className="text-n-text">2 à 3 heures par semaine.</strong>{" "}
          Nous en investissons 20 à 30 en parallèle. Le protocole se finance en
          temps dès la 6ème semaine.
        </p>

        <div className="reveal text-center mt-8">
          <a href="#audit" className="btn-primary">
            Je veux identifier mon mécanisme
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
