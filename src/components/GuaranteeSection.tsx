import { useScrollReveal } from "@/hooks/useScrollReveal";

const GuaranteeSection = () => {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      id="guarantee"
      className="section-pad text-center"
      style={{
        background: "hsl(var(--color-surface))",
        borderTop: "1px solid hsl(var(--color-teal))",
        borderBottom: "1px solid hsl(var(--color-teal))",
      }}
    >
      <div className="container-nomos narrow">
        <span className="reveal eyebrow block mb-4">La Garantie de Diagnostic Absolue</span>
        <h2 className="reveal h-section">
          Si le mécanisme exact n'est pas identifié — remboursement intégral.
        </h2>

        <p className="reveal text-base max-w-[60ch] mx-auto mb-4">
          Si, à la fin de l'Audit Stratégique de 45 minutes, le mécanisme exact
          qui bloque votre expansion n'est pas identifié avec précision —{" "}
          <strong>l'acompte est remboursé intégralement. Sans conditions. Sans questions.</strong>
        </p>
        <p className="reveal text-n-muted max-w-[60ch] mx-auto mb-4">
          Cette garantie n'est pas du marketing. C'est une preuve en acte : si le
          diagnostic est si précis que nous pouvons le garantir, c'est que le
          mécanisme est réel, mesurable et identifiable.
        </p>
        <p className="reveal text-n-muted max-w-[60ch] mx-auto mb-4">
          Aucun coaching, aucun consultant, aucune formation ne peut proposer
          cette garantie.
        </p>

        <div className="reveal mt-8 p-6 border border-n-border rounded-lg inline-block text-left">
          <p className="mb-2 text-n-text"><strong>Ce que vous risquez :</strong> 45 minutes de votre temps.</p>
          <p className="text-n-text"><strong>Ce que vous gagnez :</strong> une carte précise de votre bug — même si vous ne continuez pas.</p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
