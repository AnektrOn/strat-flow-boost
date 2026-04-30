import { useScrollReveal } from "@/hooks/useScrollReveal";

type GuaranteeVariant = "nomos" | "ascension" | "metaphysique";

const GuaranteeSection = ({ variant = "nomos" }: { variant?: GuaranteeVariant }) => {
  const ref = useScrollReveal();
  const borderClass =
    variant === "ascension" ? "border-n-gold-warm" :
    variant === "metaphysique" ? "border-n-gold/60" :
    "border-n-teal";

  return (
    <section
      ref={ref}
      id="guarantee"
      className={`section-pad text-center bg-n-surface border-y ${borderClass}`}
    >
      <div className="container-nomos narrow">
        <span className="reveal eyebrow block mb-4">La Garantie de Diagnostic Absolue</span>

        {variant === "metaphysique" ? (
          <>
            <h2 className="reveal h-section">
              Si l'angle métaphysique n'ouvre pas<br />
              une perspective radicalement nouvelle — remboursement intégral.
            </h2>
            <p className="reveal section-intro mx-auto">
              Dans les 21 premiers jours, un audit de lecture stratégique est conduit : identification des leviers
              invisibles actifs dans votre trajectoire, cartographie des angles morts décisionnels, diagnostic de
              l'écart entre ce que vous pilotez et ce qui vous pilote réellement.
            </p>
            <p className="reveal section-intro mx-auto">
              Si ce diagnostic ne vous donne pas une lecture de votre situation plus précise et plus actionnaire que
              tout ce que vous avez eu jusqu'ici —{" "}
              <strong className="text-n-text">remboursement intégral. Sans conditions. Sans délai.</strong>
            </p>
            <div className="reveal inline-block p-6 border border-n-border rounded-lg text-left mt-8 max-w-xl mx-auto">
              <p className="text-sm text-n-text mb-2">
                <strong>Ce que vous risquez :</strong> 21 jours et une remise en question.
              </p>
              <p className="text-sm text-n-text">
                <strong>Ce que vous gagnez au minimum :</strong> la carte la plus précise de ce qui vous retient — même
                si vous ne continuez pas.
              </p>
            </div>
          </>
        ) : variant === "nomos" ? (
          <>
            <h2 className="reveal h-section">
              Si le mécanisme exact n'est pas identifié —<br />
              remboursement intégral.
            </h2>
            <p className="reveal section-intro mx-auto">
              Si, à la fin de l'Audit Stratégique de 45 minutes, le mécanisme exact qui bloque votre expansion n'est
              pas identifié avec précision —{" "}
              <strong className="text-n-text">l'acompte est remboursé intégralement. Sans conditions. Sans questions.</strong>
            </p>
            <p className="reveal section-intro mx-auto">
              Cette garantie n'est pas du marketing. C'est une preuve en acte : si le diagnostic est si précis que nous
              pouvons le garantir, c'est que le mécanisme est réel, mesurable et identifiable.
            </p>
            <p className="reveal section-intro mx-auto">
              Aucun coaching, aucun consultant, aucune formation ne peut proposer cette garantie.
            </p>
            <div className="reveal inline-block p-6 border border-n-border rounded-lg text-left mt-8 max-w-xl mx-auto">
              <p className="text-sm text-n-text mb-2">
                <strong>Ce que vous risquez :</strong> 45 minutes de votre temps.
              </p>
              <p className="text-sm text-n-text">
                <strong>Ce que vous gagnez :</strong> une carte précise de votre bug — même si vous ne continuez pas.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="reveal h-section">
              Si le diagnostic identitaire n'est pas plus précis —<br />
              remboursement intégral.
            </h2>
            <p className="reveal section-intro mx-auto">
              Dans les 21 premiers jours du protocole, un audit identitaire complet est conduit : cartographie de votre
              Plafond de Cohérence Identitaire™, identification précise des zones de désalignement, diagnostic des
              décisions bloquées et de leur cause réelle.
            </p>
            <p className="reveal section-intro mx-auto">
              Si, à l'issue de ces 21 jours, le diagnostic produit n'est pas significativement plus précis que ce que vous
              pouviez formuler seul avant de commencer — remboursement intégral. Sans conditions. Sans questions. Sans
              délai.
            </p>
            <p className="reveal section-intro mx-auto">
              Cette garantie n'est pas du marketing. C'est une preuve en acte : si le diagnostic est assez précis pour
              être garanti, c'est que le mécanisme est réel, mesurable, identifiable — et que le protocole qui en découle
              a une base solide.
            </p>
            <p className="reveal section-intro mx-auto">
              <strong>Aucun consultant, aucun coach, aucune formation ne peut proposer cette garantie. ASCENSION, si.</strong>
            </p>
            <div className="reveal inline-block p-6 border border-n-border rounded-lg text-left mt-8 max-w-xl mx-auto">
              <p className="text-sm text-n-text mb-2">
                <strong>Ce que vous risquez :</strong> 21 jours et 15 000€.
              </p>
              <p className="text-sm text-n-text">
                <strong>Ce que vous gagnez au minimum :</strong> la cartographie la plus précise de votre identité de
                dirigeant que vous ayez jamais eue — même si vous ne continuez pas.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GuaranteeSection;
