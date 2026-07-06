/**
 * Calibrage visuel synapse par viewport.
 *
 * ┌──────────────────────────────────────────────────────────────────────────────┐
 * │ TABLE VIEWPORT — position réseau · zoom caméra · scale groupe               │
 * ├─────────┬────────────────────────────┬──────────┬───────────┬──────────────┤
 * │ Tier    │ Hero group pos (x,y,z)     │ heroScale│ methodSc. │ cam dist     │
 * ├─────────┼────────────────────────────┼──────────┼───────────┼──────────────┤
 * │ desktop │ 0, 0, 0 (centré)           │ 2.3      │ 1.25      │ 200 / 158*   │
 * │ tablet  │ 24, 18, 0                  │ 1.6      │ 1.1       │ 205 / 168*   │
 * │ mobile  │ 0, 22, 0                   │ 1.55     │ 1.0       │ 225 / 195*   │
 * └─────────┴────────────────────────────┴──────────┴───────────┴──────────────┘
 * * repos / hero zoom — getSynapseCameraDistance / getHeroCameraDistance
 *
 * Hélice : HELIX_SHAPE height 220 · radius 38 · turns 2.5
 * Method desktop : x -170, y 12, z -80
 */
export type SynapseViewportTier = "mobile" | "tablet" | "desktop";

export type SynapseCamera = { x: number; y: number; z: number };

export function getSynapseViewportTier(width = window.innerWidth): SynapseViewportTier {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

/**
 * Position du réseau dans la scène 3D (x/y/z).
 * Hero desktop : x/y = 0 → centré viewport. y positif = monte à l'écran.
 */
const TIER_CAMERAS: Record<SynapseViewportTier, Record<"hero" | "gateway" | "method", SynapseCamera>> = {
  desktop: {
    hero: { x: 0, y: 0, z: 0 },
    gateway: { x: 0, y: 0, z: 0 },
    method: { x: 0, y: 0, z: 0 },
  },
  tablet: {
    hero: { x: 0, y: 0, z: 0 },
    gateway: { x: 0, y: 0, z: 0 },
    method: { x: 0, y: 0, z: 0 },
  },
  mobile: {
    hero: { x: 0, y: 0, z: 0 },
    gateway: { x: 0, y: 0, z: 0 },
    method: { x: 0, y: 0, z: 0 },
  },
};

export function getResponsiveCameraForState(
  stateId: string,
  fallback: SynapseCamera,
  tier: SynapseViewportTier = getSynapseViewportTier(),
): SynapseCamera {
  const key = stateId as keyof (typeof TIER_CAMERAS)["desktop"];
  if (key in TIER_CAMERAS[tier]) {
    return { ...TIER_CAMERAS[tier][key] };
  }
  return { ...fallback };
}

export function getScrollProbeOffset(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 0.32;
  if (tier === "tablet") return 0.26;
  return 0.2;
}

/** Distance caméra Three.js (regarde l'origine). */
export function getSynapseCameraDistance(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 225;
  if (tier === "tablet") return 205;
  return 200;
}

/** Zoom hero : rapproche légèrement la caméra (état 1 uniquement). */
export function getHeroCameraDistance(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 195;
  if (tier === "tablet") return 168;
  return 158;
}

/** Scale état 1 — desktop +40 % (1.65 × 1.4 ≈ 2.3). Monter = plus gros. */
export function getHeroGroupScale(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 1.55;
  if (tier === "tablet") return 1.6;
  return 2.3;
}

/**
 * Géométrie hélice ADN (état 3) — espace 3D occupé (pas le nombre de nodes).
 * `height` = hauteur verticale · `radius` = écartement des brins · `turns` = tours.
 */
export const HELIX_SHAPE = {
  height: 220,
  radius: 38,
  turns: 2.5,
} as const;

/** Scale global état 3 — hélice entière visible au centre. */
export function getMethodGroupScale(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 1.1;
  if (tier === "tablet") return 1.25;
  return 1.35;
}

/** Poids hero zoom — diviseur morphProgress ; plus haut = hero tient plus longtemps. */
export const HERO_ZOOM_HOLD = 0.5;

/** Seuil morph où le scale méthode commence (après gateway). */
export const METHOD_SCALE_START = 0.48;

/** Décalage vertical landing hub — centre visuel au-dessus du titre. */
export function getHubSynapseFocalOffset(tier: SynapseViewportTier = getSynapseViewportTier()): SynapseCamera {
  if (tier === "mobile") return { x: 0, y: 18, z: 0 };
  if (tier === "tablet") return { x: 0, y: 14, z: 0 };
  return { x: 0, y: 12, z: 0 };
}

/** Recul caméra état ADN pour cadrer la hélice entière. */
export function getMethodCameraPullback(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 32;
  if (tier === "tablet") return 36;
  return 40;
}

/** Décalage vertical lookAt état ADN — centre la hélice dans le viewport. */
export function getMethodLookYOffset(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 6;
  if (tier === "tablet") return 7;
  return 8;
}

export function getSynapseCameraFov(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  if (tier === "mobile") return 66;
  if (tier === "tablet") return 62;
  return 60;
}
