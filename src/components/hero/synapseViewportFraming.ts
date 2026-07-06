import { HELIX_SHAPE, getMethodGroupScale, getSynapseCameraFov, getSynapseViewportTier, type SynapseViewportTier } from "./synapseViewport";

const CONTAINER_MAX_PX = 1100;
const CONTAINER_PADDING_PX = 24;
const PAGE_NAV_WIDTH_PX = 210;
const PAGE_NAV_GAP_PX = 36;
const VIEWPORT_EDGE_PADDING_PX = 24;

export type ProtocolFramingInput = {
  viewportWidth: number;
  viewportHeight: number;
  cameraDistance: number;
  fovDeg: number;
  /** 0 = hero centré · 1 = cible ADN */
  morphT: number;
};

export type ProtocolFramingResult = {
  /** Décalage monde X du groupe (caméra regarde le centre). */
  offsetX: number;
  /** Position normalisée visée (debug). */
  targetScreenX: number;
  /** Largeur monde visible au plan z=0. */
  visibleWorldWidth: number;
};

const smoothStep = (x: number) => {
  const c = Math.max(0, Math.min(1, x));
  return c * c * (3 - 2 * c);
};

/** Largeur visible sur le plan z=0 (unités Three.js). */
export function getVisibleWorldWidthAtDistance(
  distance: number,
  fovDeg: number,
  aspect: number,
): number {
  const fovRad = (fovDeg * Math.PI) / 180;
  return 2 * distance * Math.tan(fovRad / 2) * aspect;
}

/** Convertit une position horizontale écran normalisée (0–1) en offset monde X. */
export function worldXForNormalizedScreenX(
  screenX: number,
  distance: number,
  fovDeg: number,
  aspect: number,
): number {
  const visibleWidth = getVisibleWorldWidthAtDistance(distance, fovDeg, aspect);
  return (screenX - 0.5) * visibleWidth;
}

/**
 * Estime la zone texte à gauche (container + nav) en pixels viewport.
 * Aligné sur `.page-nav-layout` + `.container-nomos` (index.css).
 */
export function getProtocolContentLayoutPx(viewportWidth: number): {
  containerLeft: number;
  containerWidth: number;
  contentLeft: number;
  contentWidth: number;
  contentRight: number;
} {
  const containerWidth = Math.min(CONTAINER_MAX_PX, Math.max(0, viewportWidth - 2 * CONTAINER_PADDING_PX));
  const containerLeft = (viewportWidth - containerWidth) / 2;

  if (viewportWidth >= 1280) {
    const contentLeft = containerLeft + PAGE_NAV_WIDTH_PX + PAGE_NAV_GAP_PX;
    const contentWidth = Math.max(0, containerWidth - PAGE_NAV_WIDTH_PX - PAGE_NAV_GAP_PX);
    return {
      containerLeft,
      containerWidth,
      contentLeft,
      contentWidth,
      contentRight: contentLeft + contentWidth,
    };
  }

  const contentLeft = containerLeft + CONTAINER_PADDING_PX;
  const contentWidth = Math.max(0, containerWidth - 2 * CONTAINER_PADDING_PX);
  return {
    containerLeft,
    containerWidth,
    contentLeft,
    contentWidth,
    contentRight: contentLeft + contentWidth,
  };
}

/**
 * Position horizontale cible de l'ADN (0 = gauche viewport · 1 = droite).
 * Centre de la bande libre à droite du contenu texte.
 */
export function getProtocolTargetScreenX(viewportWidth: number): number {
  const tier = getSynapseViewportTier(viewportWidth);
  const layout = getProtocolContentLayoutPx(viewportWidth);

  if (tier === "mobile") {
    return 0.61;
  }

  if (tier === "tablet") {
    return Math.min(0.69, (layout.contentRight - layout.contentWidth * 0.12) / viewportWidth);
  }

  // Desktop xl+ : milieu de [fin contenu texte · bord droit viewport]
  const freeLeft = layout.contentLeft + layout.contentWidth * 0.58;
  const freeRight = viewportWidth - VIEWPORT_EDGE_PADDING_PX;
  const targetPx = freeLeft + (freeRight - freeLeft) * 0.52;

  return Math.max(0.57, Math.min(0.78, targetPx / viewportWidth));
}

/**
 * Cadrage synapse protocole — dérivé du viewport réel, FOV et distance caméra.
 * Pas de constantes monde arbitraires.
 */
export function getProtocolSynapseFraming(input: ProtocolFramingInput): ProtocolFramingResult {
  const aspect = input.viewportWidth / Math.max(input.viewportHeight, 1);
  const visibleWorldWidth = getVisibleWorldWidthAtDistance(
    input.cameraDistance,
    input.fovDeg,
    aspect,
  );

  const targetScreenX = getProtocolTargetScreenX(input.viewportWidth);
  const ramp = smoothStep(input.morphT);
  const screenX = 0.5 + (targetScreenX - 0.5) * ramp;
  const offsetX = worldXForNormalizedScreenX(
    screenX,
    input.cameraDistance,
    input.fovDeg,
    aspect,
  );

  return { offsetX, targetScreenX, visibleWorldWidth };
}

/** Hauteur monde estimée de l'hélice ADN (pour validation cadrage). */
export function getHelixWorldHeight(tier: SynapseViewportTier = getSynapseViewportTier()): number {
  return HELIX_SHAPE.height * getMethodGroupScale(tier);
}

/** FOV + distance typiques pour prévisualisation debug. */
export function getDefaultFramingCamera(viewportWidth: number): { distance: number; fovDeg: number } {
  const tier = getSynapseViewportTier(viewportWidth);
  return {
    distance: tier === "mobile" ? 257 : tier === "tablet" ? 241 : 240,
    fovDeg: getSynapseCameraFov(tier),
  };
}
