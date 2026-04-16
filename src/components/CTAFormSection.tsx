import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormState = "idle" | "submitting" | "success" | "disqualified" | "not-decider" | "error";

const CTAFormSection = () => {
  const ref = useScrollReveal();
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);

    if (data.revenue === "moins-20k") {
      setState("disqualified");
      return;
    }
    if (data.decision_maker === "non") {
      setState("not-decider");
      return;
    }

    setState("submitting");

    try {
      // Placeholder webhook – replace VOTRE_WEBHOOK_URL
      // await fetch("VOTRE_WEBHOOK_URL", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     ...data,
      //     source: "page-vente-nomos",
      //     timestamp: new Date().toISOString(),
      //     page_url: window.location.href,
      //   }),
      // });

      // Simulate success
      await new Promise((r) => setTimeout(r, 800));
      setState("success");

      // Redirect to Calendly after 2s
      // setTimeout(() => {
      //   window.location.href = "https://calendly.com/VOTRE_LIEN";
      // }, 2000);
    } catch {
      setState("error");
    }
  };

  const inputClasses =
    "w-full bg-transparent border border-n-border-subtle px-4 py-3 text-sm text-n-text font-light placeholder:text-n-subtle focus:outline-none focus:border-n-gold transition-colors";
  const selectClasses = `${inputClasses} appearance-none`;
  const labelClasses = "block text-[11px] uppercase tracking-[0.2em] text-n-subtle mb-2";

  return (
    <section ref={ref} id="candidature" className="py-20 md:py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="badge badge--danger mb-8 inline-block">⚠ Places limitées · Ce trimestre</span>
          <h2 className="heading-h2 text-[clamp(28px,4vw,44px)] mb-6">
            Commencez par
            <br /><em>l'audit stratégique.</em>
            <br />45 minutes. Offert.
          </h2>
          <p className="text-body mx-auto">
            Nous identifions votre niveau exact de saturation.
            Vous repartez avec un plan, une clarté, une direction — quoi qu'il arrive.
          </p>
        </div>

        {/* 3 deliverables */}
        <div className="reveal reveal-delay-1 grid sm:grid-cols-3 gap-4 mb-16 text-center">
          {[
            "Niveau exact de saturation neurologique",
            "3 frictions systémiques majeures identifiées",
            "Plan d'action 14 jours + estimation des pertes",
          ].map((d) => (
            <div key={d} className="card-surface !py-6 !px-4">
              <span className="text-n-gold text-lg block mb-2">◈</span>
              <span className="text-[13px] text-n-muted font-light">{d}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        {state === "idle" || state === "submitting" || state === "error" ? (
          <form onSubmit={handleSubmit} className="reveal reveal-delay-2 space-y-5">
            <div>
              <label className={labelClasses}>Prénom *</label>
              <input name="firstname" required className={inputClasses} placeholder="Votre prénom" />
            </div>

            <div>
              <label className={labelClasses}>Email professionnel *</label>
              <input name="email" type="email" required className={inputClasses} placeholder="nom@votreentreprise.com" />
            </div>

            <div>
              <label className={labelClasses}>Chiffre d'affaires mensuel actuel *</label>
              <select name="revenue" required className={selectClasses} defaultValue="">
                <option value="" disabled>Sélectionner</option>
                <option value="moins-20k">Moins de 20 000€/mois</option>
                <option value="20k-50k">20 000€ – 50 000€/mois</option>
                <option value="50k-100k">50 000€ – 100 000€/mois</option>
                <option value="100k-150k">100 000€ – 150 000€/mois</option>
                <option value="plus-150k">Plus de 150 000€/mois</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>Taille de votre équipe *</label>
              <select name="team_size" required className={selectClasses} defaultValue="">
                <option value="" disabled>Sélectionner</option>
                <option value="solo">Solopreneur</option>
                <option value="2-5">2 à 5 personnes</option>
                <option value="6-15">6 à 15 personnes</option>
                <option value="16-25">16 à 25 personnes</option>
                <option value="25+">Plus de 25 personnes</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>Problème principal en ce moment ? *</label>
              <textarea
                name="problem"
                required
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Décrivez en quelques lignes…"
              />
            </div>

            <div>
              <label className={labelClasses}>Êtes-vous le décideur final pour un investissement à 15 000€ ? *</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 text-sm text-n-muted font-light cursor-pointer">
                  <input type="radio" name="decision_maker" value="oui" required className="accent-[hsl(43,52%,43%)]" />
                  Oui
                </label>
                <label className="flex items-center gap-2 text-sm text-n-muted font-light cursor-pointer">
                  <input type="radio" name="decision_maker" value="non" className="accent-[hsl(43,52%,43%)]" />
                  Non
                </label>
              </div>
            </div>

            {state === "error" && (
              <p className="text-sm text-n-danger">Une erreur est survenue. Veuillez réessayer.</p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="cta-primary w-full mt-4 disabled:opacity-50"
            >
              {state === "submitting" ? "Envoi en cours…" : "Soumettre ma candidature"}
            </button>

            <p className="text-[12px] text-n-subtle text-center tracking-wider">
              Votre candidature est lue personnellement. Réponse sous 24h ouvrées.
            </p>

            <p className="text-[12px] text-n-subtle text-center leading-relaxed mt-4">
              Si votre système est prêt · Nous vous proposerons NOMOS
              <br />Sinon · Vous repartirez avec une lucidité que 99% des fondateurs n'ont jamais
            </p>
          </form>
        ) : state === "success" ? (
          <div className="reveal card-surface text-center !py-12">
            <p className="text-n-gold-bright text-lg font-display mb-2">Candidature reçue.</p>
            <p className="text-sm text-n-muted font-light">
              Vous allez être redirigé pour choisir votre créneau d'audit.
            </p>
          </div>
        ) : state === "disqualified" ? (
          <div className="reveal card-surface text-center !py-12">
            <p className="text-n-text text-lg font-display mb-2">Ce programme est réservé aux fondateurs à partir de 20k€/mois.</p>
            <p className="text-sm text-n-muted font-light">
              Si vous n'êtes pas encore à ce niveau, revenez nous voir quand vous l'aurez atteint.
            </p>
          </div>
        ) : (
          <div className="reveal card-surface text-center !py-12">
            <p className="text-n-text text-lg font-display mb-2">Parfait.</p>
            <p className="text-sm text-n-muted font-light">
              Parlez-en à la personne concernée et revenez.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTAFormSection;
