import type { AuditProtocol } from "@/lib/contactEmail";

/** Accent visuel hero par protocole — lie landing (teal/or) aux pages protocole. */
export type HeroProtocolAccent = "nomos" | "ascension" | "aegis" | "metaphysique";

export function auditProtocolToHeroAccent(protocol: AuditProtocol): HeroProtocolAccent | undefined {
  if (protocol === "hub") return undefined;
  return protocol;
}

export type HeroProtocolStyle = {
  objectPosition: string;
  cssFallback: string;
  tintOverlay: string;
  vignetteCenter: string;
};

export const HERO_PROTOCOL_STYLES: Record<HeroProtocolAccent, HeroProtocolStyle> = {
  nomos: {
    objectPosition: "36% 44%",
    cssFallback: [
      "radial-gradient(ellipse 75% 55% at 12% 88%, hsl(var(--color-teal) / 0.16) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 45% at 88% 12%, hsl(var(--color-gold) / 0.1) 0%, transparent 50%)",
      "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(220 10% 8%) 0%, hsl(var(--color-bg)) 100%)",
    ].join(", "),
    tintOverlay:
      "radial-gradient(ellipse 55% 45% at 18% 78%, hsl(var(--color-teal) / 0.14) 0%, transparent 62%)",
    vignetteCenter:
      "radial-gradient(ellipse 72% 58% at 50% 46%, hsl(0 0% 0% / 0.54) 0%, transparent 68%), linear-gradient(to bottom, transparent 55%, hsl(var(--color-bg) / 0.38) 100%)",
  },
  ascension: {
    objectPosition: "42% 40%",
    cssFallback: [
      "radial-gradient(ellipse 70% 50% at 72% 18%, hsl(var(--color-gold-warm) / 0.18) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 40% at 15% 85%, hsl(var(--color-teal) / 0.08) 0%, transparent 50%)",
      "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(220 10% 8%) 0%, hsl(var(--color-bg)) 100%)",
    ].join(", "),
    tintOverlay:
      "radial-gradient(ellipse 50% 42% at 68% 22%, hsl(var(--color-gold-warm) / 0.12) 0%, transparent 58%)",
    vignetteCenter:
      "radial-gradient(ellipse 74% 60% at 50% 46%, hsl(0 0% 0% / 0.58) 0%, transparent 68%), linear-gradient(to bottom, transparent 52%, hsl(var(--color-bg) / 0.4) 100%)",
  },
  aegis: {
    objectPosition: "38% 42%",
    cssFallback: [
      "radial-gradient(ellipse 65% 50% at 50% 30%, hsl(var(--color-gold) / 0.11) 0%, transparent 58%)",
      "radial-gradient(ellipse 50% 40% at 10% 90%, hsl(var(--color-teal) / 0.1) 0%, transparent 50%)",
      "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(220 10% 8%) 0%, hsl(var(--color-bg)) 100%)",
    ].join(", "),
    tintOverlay:
      "radial-gradient(ellipse 48% 38% at 50% 35%, hsl(var(--color-gold) / 0.08) 0%, transparent 60%)",
    vignetteCenter:
      "radial-gradient(ellipse 70% 56% at 50% 46%, hsl(0 0% 0% / 0.52) 0%, transparent 68%), linear-gradient(to bottom, transparent 55%, hsl(var(--color-bg) / 0.35) 100%)",
  },
  metaphysique: {
    objectPosition: "40% 41%",
    cssFallback: [
      "radial-gradient(ellipse 60% 45% at 25% 75%, hsl(var(--color-teal) / 0.12) 0%, transparent 55%)",
      "radial-gradient(ellipse 65% 50% at 75% 20%, hsl(var(--color-gold-warm) / 0.15) 0%, transparent 55%)",
      "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(220 10% 8%) 0%, hsl(var(--color-bg)) 100%)",
    ].join(", "),
    tintOverlay:
      "radial-gradient(ellipse 45% 40% at 30% 70%, hsl(var(--color-teal) / 0.1) 0%, transparent 55%), radial-gradient(ellipse 40% 35% at 70% 25%, hsl(var(--color-gold-warm) / 0.1) 0%, transparent 55%)",
    vignetteCenter:
      "radial-gradient(ellipse 72% 58% at 50% 46%, hsl(0 0% 0% / 0.55) 0%, transparent 68%), linear-gradient(to bottom, transparent 55%, hsl(var(--color-bg) / 0.36) 100%)",
  },
};
