import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsla(43,52%,43%,0.06) 0%, transparent 60%)",
      }}
    >
      <div className="relative z-10 max-w-[900px] w-full text-center pt-24 pb-20">
        {/* Badge */}
        <div className="reveal mb-10">
          <span className="badge">Réservé aux fondateurs · 20 000€ – 150 000€/mois</span>
        </div>

        {/* H1 */}
        <h1 className="reveal heading-display text-[clamp(38px,6vw,72px)] mb-8">
          Votre entreprise ne plafonne pas.
          <br />
          C'est <em>votre bande passante</em>
          <br />
          qui plafonne.
        </h1>

        {/* Subheadline */}
        <p className="reveal reveal-delay-1 text-body mx-auto max-w-[580px] mb-12">
          En 90 jours, nous reconfigurons le mécanisme qui transforme
          chaque tentative de croissance en surcharge — et nous installons
          l'architecture qui permet à votre business de grandir
          sans vous consumer.
        </p>

        {/* Video placeholder */}
        <div
          className="reveal reveal-delay-2 mx-auto max-w-[860px] aspect-video border border-n-border mb-12 flex items-center justify-center cursor-pointer group"
          style={{ boxShadow: "0 0 40px hsla(43,52%,43%,0.08)" }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-[72px] h-[72px] rounded-full border-2 border-n-gold flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="hsl(43,52%,56%)" className="w-7 h-7 ml-1">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="text-n-subtle text-sm tracking-wider uppercase">Regarder — 10 min</span>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3">
          <a href="#candidature" className="cta-primary">
            Réserver l'audit stratégique — Offert
          </a>
          <p className="mt-4 text-[12px] text-n-subtle tracking-wider">
            5 dirigeants maximum · Ce trimestre · Audit 45 min offert
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
