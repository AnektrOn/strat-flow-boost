import { useScrollReveal } from "@/hooks/useScrollReveal";

const FounderSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="founder" className="section-pad section-dark">
      <div className="container-nomos narrow">
        <h2 className="reveal h-section">
          Qui est derrière NOMOS — et comment ce protocole a été découvert.
        </h2>

        <div className="space-y-4 text-n-muted">
          <p className="reveal">Ce protocole n'est pas né dans une certification. Il est né d'une observation qui se répétait.</p>
          <p className="reveal">Pendant des années, j'ai accompagné des dirigeants brillants, informés, volontaires — qui avaient fait tout ce qu'il fallait faire. Lu Traction. Appliqué EOS. Embauché des consultants. Essayé le coaching ICF. Et qui revenaient, quelques mois plus tard, avec les mêmes symptômes.</p>
          <p className="reveal">Pas parce qu'ils avaient mal exécuté. Parce que les solutions qu'ils avaient utilisées traitaient la mauvaise couche.</p>
          <p className="reveal"><strong className="text-n-text">La première observation critique :</strong> chaque fois qu'une solution traitait uniquement l'organisation ou uniquement la psychologie consciente, les résultats ne tenaient pas au-delà de 60-90 jours.</p>
          <p className="reveal"><strong className="text-n-text">La deuxième observation :</strong> les rares fois où un dirigeant sortait vraiment du plafond, il y avait toujours eu une intervention simultanée sur les 3 couches — biologique, identitaire, décisionnelle. Accidentellement.</p>
          <p className="reveal">Ce n'était pas de la chance. C'était mécanique. Et si c'était mécanique, c'était reproductible. C'est l'origine du Protocole de Recalibration Tri-Couche™.</p>
          <p className="reveal">D'où la limitation à <strong className="text-n-text">5 dirigeants par trimestre</strong>. Ce n'est pas du marketing de rareté — c'est la contrainte physique d'une intervention 1:1 sans délégation. 20 à 30 heures de delivery par protocole.</p>

          <div className="reveal flex items-center gap-6 mt-8 pt-8 border-t border-n-border">
            <div className="w-16 h-16 rounded-full bg-n-surface-2 border-2 border-n-gold-dim flex items-center justify-center font-display text-xl text-n-gold shrink-0">
              L
            </div>
            <div className="text-sm">
              <div className="font-semibold text-n-text">Léo — Fondateur NOMOS</div>
              <div className="text-n-muted">
                Consultant systémique &amp; neuroscientifique · Intervention neuro-opérationnelle pour dirigeants en scaling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
