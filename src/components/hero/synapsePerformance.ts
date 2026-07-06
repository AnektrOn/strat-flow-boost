import { getSynapseViewportTier, type SynapseViewportTier } from "./synapseViewport";

export type SynapseRenderProfile = {
  pixelRatio: number;
  antialias: boolean;
  /** 1 = chaque frame ; 2 = une frame sur deux pour les lignes */
  lineUpdateInterval: number;
  mouseParallax: boolean;
  /** Seuil morph au-delà duquel on peut espacer les rebuilds de lignes (explosion) */
  heavyMorphThreshold: number;
};

function readDevicePixelRatio(): number {
  return typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
}

export function getSynapseRenderProfile(
  tier: SynapseViewportTier = getSynapseViewportTier(),
): SynapseRenderProfile {
  const dpr = readDevicePixelRatio();

  if (tier === "mobile") {
    return {
      pixelRatio: 1,
      antialias: false,
      lineUpdateInterval: 2,
      mouseParallax: false,
      heavyMorphThreshold: 0.35,
    };
  }

  if (tier === "tablet") {
    return {
      pixelRatio: Math.min(dpr, 1.5),
      antialias: false,
      lineUpdateInterval: 1,
      mouseParallax: true,
      heavyMorphThreshold: 0.4,
    };
  }

  return {
    pixelRatio: Math.min(dpr, 2),
    antialias: true,
    lineUpdateInterval: 1,
    mouseParallax: true,
    heavyMorphThreshold: 0.45,
  };
}

export function isWebGLAvailable(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}
