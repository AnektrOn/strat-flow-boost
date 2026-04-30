type FooterVariant = "nomos" | "ascension" | "hub" | "metaphysique";

const copy: Record<FooterVariant, { brand: string; meta: string }> = {
  nomos: {
    brand: "NOMOS — Intervention Systémique Neuro-Opérationnelle",
    meta: "5 dirigeants par trimestre · 1:1 sans délégation · Garantie de Diagnostic Absolue",
  },
  ascension: {
    brand: "NOMOS — Intervention Systémique · ASCENSION — Élévation Identitaire",
    meta: "Fondé et conduit par Léo · 5 dirigeants par semestre · 1:1 sans délégation · Garantie de Diagnostic Absolue",
  },
  hub: {
    brand: "NOMOS — Système Neuro-Opérationnel pour Dirigeants",
    meta: "Fondé par Léo · Intervention 1:1 · Garantie de Diagnostic Absolue",
  },
  metaphysique: {
    brand: "NOMOS — Dimension Métaphysique · Avant-Gardisme Stratégique",
    meta: "Fondé par Léo · Réservé à une poignée de dirigeants · 1:1 sans délégation",
  },
};

const Footer = ({ variant = "nomos" }: { variant?: FooterVariant }) => {
  const c = copy[variant];
  return (
    <footer className="py-10 border-t border-n-border">
      <div className="container-nomos flex flex-col items-center text-center">
        <p className="text-xs tracking-[0.15em] uppercase text-n-muted mb-2">{c.brand}</p>
        <p className="text-xs text-n-faint">{c.meta}</p>
      </div>
    </footer>
  );
};

export default Footer;
