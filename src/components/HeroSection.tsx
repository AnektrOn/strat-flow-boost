import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-[85vh] flex items-center text-center pt-32 pb-20"
    >
      <div className="container-nomos narrow w-full">
        <span className="reveal eyebrow-bordered mb-8">
          Réservé aux fondateurs · 20 000€ – 150 000€/mois
        </span>
        <h1 className="reveal h-hero mb-6">
          Votre entreprise ne plafonne pas.<br />
          C'est <em>votre bande passante</em> qui plafonne.
        </h1>
        <p className="reveal reveal-delay-1 text-base text-n-muted max-w-[56ch] mx-auto mb-4">
          En 90 jours, nous localisons votre Dérive Neuro-Opérationnelle™ et nous
          installons le Protocole APEX™ — pour que votre business grandisse sans
          que chaque palier de revenus vous coûte davantage en tension.
        </p>
        <p className="reveal reveal-delay-1 text-base text-n-teal font-medium mb-8">
          Clarté stable en moins de 14 jours.
        </p>
        <div className="reveal reveal-delay-2 mb-6">
          <a href="#audit" className="btn-primary">
            Candidater pour l'audit stratégique — Offert
          </a>
        </div>
        <p className="reveal reveal-delay-3 text-xs text-n-faint tracking-wider">
          ⬥ 5 dirigeants maximum par trimestre · Intervention 1:1 sans délégation · Garantie de Diagnostic Absolue
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
