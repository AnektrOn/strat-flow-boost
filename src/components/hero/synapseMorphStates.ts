import type { SynapseShapeId } from "./synapseShapeBuilders";
import { SYNAPSE_SHAPE_REGISTRY } from "./synapseShapeBuilders";
import type { SynapseSettings } from "./synapseSettings";
import type { SynapseMorphAnchors } from "./synapseRouteConfig";
import {
  getResponsiveCameraForState,
  getScrollProbeOffset,
  getSynapseViewportTier,
} from "./synapseViewport";

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ TABLE DE CALIBRAGE — density / reach / axon par état                        │
 * ├────────┬───────┬──────────────────┬────────────┬──────────────┬────────────┤
 * │ État   │ morph │ particleCount    │ reach (px) │ particleSize │ intention  │
 * ├────────┼───────┼──────────────────┼────────────┼──────────────┼────────────┤
 * │ 1 Hero │ 0     │ 100              │ 30         │ 0.5          │ sparse     │
 * │ 2 Gate │ 0.5   │ 700              │ 22         │ 0.8          │ explosion  │
 * │ 3 ADN  │ 1     │ 180              │ 38         │ 1.6          │ hélice     │
 * └────────┴───────┴──────────────────┴────────────┴──────────────┴────────────┘
 *
 * Courbes de blend indépendantes (voir blendSettings* ci-dessous) :
 * - Hero→Gateway : forme d'abord (t12), count en retard (évite pop 100→500)
 * - Gateway→Method : count snap tôt (150), reach progressif après forme visible
 */

/** Réglages par état — density / reach / axon (source unique, = panneau ⚙ au hero). */
export type SynapseStateSettings = Pick<
  SynapseSettings,
  "particleCount" | "connectionDistance" | "particleSize"
>;

/** Retard count hero→gateway : 0 = immédiat, 0.35 = count stable jusqu'à ~35 % section. */
export const HERO_TO_GATEWAY_COUNT_DELAY = 0.35;

/** Snap count gateway→method : fraction section avant passage à 150 nodes. */
export const GATEWAY_TO_METHOD_COUNT_SNAP = 0.06;

/** Reach minimal pendant morph gateway→method (évite starburst). */
export const GATEWAY_TO_METHOD_REACH_FLOOR = 12;

/** État 1 · Hero — calibrage utilisateur. */
export const SYNAPSE_ETAT_1: SynapseStateSettings = {
  particleCount: 100,
  connectionDistance: 30,
  particleSize: 1.1,
};

/** État 2 · Gateways / explosion — dense, liens courts mais nombreux. */
export const SYNAPSE_ETAT_2: SynapseStateSettings = {
  particleCount: 700,
  connectionDistance: 22,
  particleSize: 0.8,
};

/** État 3 · Méthode / ADN. */
export const SYNAPSE_ETAT_3: SynapseStateSettings = {
  particleCount: 180,
  connectionDistance: 38,
  particleSize: 1.6,
};

export type SynapseMorphState = {
  id: string;
  label: string;
  description: string;
  shape: SynapseShapeId;
  validated: boolean;
  morph: number;
  settings: SynapseStateSettings;
  camera: { x: number; y: number; z: number };
  rotationBias: number;
  anchorId: string;
};

export const SYNAPSE_MORPH_STATES: SynapseMorphState[] = [
  {
    id: "hero",
    label: "État 1 · Hero",
    description: "Réseau sparse — 100 nodes, reach 30, axons fins.",
    shape: "sphere",
    validated: true,
    morph: 0,
    settings: { ...SYNAPSE_ETAT_1 },
    camera: { x: 0, y: 0, z: 0 },
    rotationBias: 0,
    anchorId: "synapse-hero",
  },
  {
    id: "gateway",
    label: "État 2 · Explosion",
    description: "Dispersion dense — 700 nodes, reach 22.",
    shape: "dispersion",
    validated: true,
    morph: 0.5,
    settings: { ...SYNAPSE_ETAT_2 },
    camera: { x: 0, y: 0, z: 0 },
    rotationBias: 0.45,
    anchorId: "synapse-gateway",
  },
  {
    id: "method",
    label: "État 3 · ADN",
    description: "Double hélice — reach large.",
    shape: "helix",
    validated: true,
    morph: 1,
    settings: { ...SYNAPSE_ETAT_3 },
    camera: { x: 0, y: 0, z: 0 },
    rotationBias: 1,
    anchorId: "synapse-method",
  },
];

export type SynapseMorphSnapshot = {
  morph: number;
  /** Progression forme sphère → dispersion (positions 3D). */
  shapeT12: number;
  /** Progression forme dispersion → hélice (positions 3D). */
  shapeT23: number;
  /** Alias settings — conservés pour HUD / panneau. */
  t12: number;
  t23: number;
  stateId: string;
  stateLabel: string;
  shapeA: SynapseShapeId;
  shapeB: SynapseShapeId;
  nextStateId: string | null;
  segmentProgress: number;
  camera: { x: number; y: number; z: number };
  rotationBias: number;
  settings: SynapseStateSettings;
  activeParticleCount: number;
};

export const smoothStep = (x: number) => x * x * (3 - 2 * x);

/** Courbe forme 1→2 : légère accélération en fin de segment hero. */
export function morphToShapeBlend(morph: number): { shapeT12: number; shapeT23: number } {
  const clamped = Math.max(0, Math.min(1, morph));
  if (clamped <= 0.5) {
    const seg = clamped * 2;
    return { shapeT12: smoothStep(smoothStep(seg)), shapeT23: 0 };
  }
  const seg = (clamped - 0.5) * 2;
  return { shapeT12: 1, shapeT23: smoothStep(seg * 1.08) };
}

export function morphToBlend(morph: number): { t12: number; t23: number } {
  const { shapeT12, shapeT23 } = morphToShapeBlend(morph);
  return { t12: shapeT12, t23: shapeT23 };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function blendSettings(a: SynapseStateSettings, b: SynapseStateSettings, t: number): SynapseStateSettings {
  const eased = smoothStep(smoothStep(t));
  return {
    particleCount: Math.round(lerp(a.particleCount, b.particleCount, eased)),
    connectionDistance: lerp(a.connectionDistance, b.connectionDistance, eased),
    particleSize: lerp(a.particleSize, b.particleSize, eased),
  };
}

function blendSettingsHeroToGateway(
  a: SynapseStateSettings,
  b: SynapseStateSettings,
  t: number,
): SynapseStateSettings {
  const shapeT = smoothStep(t);
  const countT = smoothStep(Math.max(0, (t - HERO_TO_GATEWAY_COUNT_DELAY) / (1 - HERO_TO_GATEWAY_COUNT_DELAY)));
  return {
    particleCount: Math.round(lerp(a.particleCount, b.particleCount, countT)),
    connectionDistance: lerp(a.connectionDistance, Math.min(b.connectionDistance, 22), shapeT),
    particleSize: lerp(a.particleSize, b.particleSize, shapeT),
  };
}

function snapshotFromState(
  state: SynapseMorphState,
  nextState: SynapseMorphState | null,
  segmentProgress: number,
): SynapseMorphSnapshot {
  const { shapeT12, shapeT23 } = morphToShapeBlend(state.morph);
  return {
    morph: state.morph,
    shapeT12,
    shapeT23,
    t12: shapeT12,
    t23: shapeT23,
    stateId: state.id,
    stateLabel: state.label,
    shapeA: state.shape,
    shapeB: nextState?.shape ?? state.shape,
    nextStateId: nextState?.id ?? null,
    segmentProgress,
    camera: getResponsiveCameraForState(state.id, state.camera),
    rotationBias: state.rotationBias,
    settings: { ...state.settings },
    activeParticleCount: state.settings.particleCount,
  };
}

function blendSettingsGatewayToMethod(
  a: SynapseStateSettings,
  b: SynapseStateSettings,
  t: number,
): SynapseStateSettings {
  const shapeT = smoothStep(t);
  const reachT = smoothStep(Math.max(0, (t - 0.12) / 0.88));
  return {
    particleCount: t < GATEWAY_TO_METHOD_COUNT_SNAP ? a.particleCount : b.particleCount,
    connectionDistance: lerp(GATEWAY_TO_METHOD_REACH_FLOOR, b.connectionDistance, reachT),
    particleSize: lerp(a.particleSize, b.particleSize, shapeT),
  };
}

function snapshotFromBlend(a: SynapseMorphState, b: SynapseMorphState, t: number): SynapseMorphSnapshot {
  const eased = smoothStep(smoothStep(t));
  const settings =
    a.id === "hero" && b.id === "gateway"
      ? blendSettingsHeroToGateway(a.settings, b.settings, t)
      : a.id === "gateway" && b.id === "method"
        ? blendSettingsGatewayToMethod(a.settings, b.settings, t)
        : blendSettings(a.settings, b.settings, t);
  const morphValue = lerp(a.morph, b.morph, eased);
  const { shapeT12, shapeT23 } = morphToShapeBlend(morphValue);
  const camA = getResponsiveCameraForState(a.id, a.camera);
  const camB = getResponsiveCameraForState(b.id, b.camera);
  return {
    morph: morphValue,
    shapeT12,
    shapeT23,
    t12: shapeT12,
    t23: shapeT23,
    stateId: eased < 0.5 ? a.id : b.id,
    stateLabel: eased < 0.5 ? a.label : b.label,
    shapeA: a.shape,
    shapeB: b.shape,
    nextStateId: b.id,
    segmentProgress: eased,
    camera: {
      x: lerp(camA.x, camB.x, eased),
      y: lerp(camA.y, camB.y, eased),
      z: lerp(camA.z, camB.z, eased),
    },
    rotationBias: lerp(a.rotationBias, b.rotationBias, eased),
    settings,
    activeParticleCount: settings.particleCount,
  };
}

/** Snapshot à morph fixe (blend hero → gateway → method). */
export function getStaticMorphSnapshot(morph = 0): SynapseMorphSnapshot {
  const [hero, gateway, method] = SYNAPSE_MORPH_STATES;
  const clamped = Math.max(0, Math.min(1, morph));
  if (clamped <= 0) return snapshotFromState(hero, gateway, 0);
  if (clamped >= 1) return snapshotFromState(method, null, 1);
  if (clamped <= 0.5) return snapshotFromBlend(hero, gateway, clamped * 2);
  return snapshotFromBlend(gateway, method, (clamped - 0.5) * 2);
}

/** Opacité synapse fixe — visible jusqu'à ADN formé, fade seulement en bas de page. */
export function computePageFadeFromMorph(morph: number, scrollRaw = 0): number {
  const clampedMorph = Math.max(0, Math.min(1, morph));
  if (clampedMorph < 0.85) return 1;
  if (scrollRaw < 0.75) return 1;
  return Math.max(0, 1 - (scrollRaw - 0.75) / 0.25);
}

/** États morph avec ancres DOM personnalisées (landing + protocoles). */
export function buildMorphStatesForAnchors(anchors: SynapseMorphAnchors): SynapseMorphState[] {
  return SYNAPSE_MORPH_STATES.map((state, index) => ({
    ...state,
    anchorId: anchors[index] ?? state.anchorId,
  }));
}

/** Point d'entrée unique — ancres section, repli scroll page si DOM pas prêt. */
export function computeSynapseMorph(
  anchors: SynapseMorphAnchors = ["hero", "mechanism", "protocol"],
): SynapseMorphSnapshot {
  const heroEl = document.getElementById(anchors[0]);
  if (!heroEl) {
    return computePageScrollMorph();
  }
  return computeScrollMorph(buildMorphStatesForAnchors(anchors));
}

/** Morph 0→1 sur toute la page — repli si ancres absentes au premier paint. */
export function computePageScrollMorph(): SynapseMorphSnapshot {
  const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const raw = Math.min(1, Math.max(0, window.scrollY / docHeight));

  let morph: number;
  if (raw <= 0.25) {
    morph = (raw / 0.25) * 0.5;
  } else if (raw <= 0.55) {
    morph = 0.5 + ((raw - 0.25) / 0.3) * 0.5;
  } else {
    morph = 1;
  }

  return getStaticMorphSnapshot(morph);
}

/** Fondu gateway → méthode sur toute la section (comme hero → gateway). */
export function computeScrollMorph(
  states: SynapseMorphState[] = SYNAPSE_MORPH_STATES,
): SynapseMorphSnapshot {
  const anchors = states.map((state) => {
    const el = document.getElementById(state.anchorId);
    const top = el ? window.scrollY + el.getBoundingClientRect().top : 0;
    return { state, top };
  });

  if (window.scrollY <= 0) {
    return snapshotFromState(anchors[0].state, anchors[1]?.state ?? null, 0);
  }

  const tier = getSynapseViewportTier();
  const probe = window.scrollY + window.innerHeight * getScrollProbeOffset(tier);

  for (let i = 0; i < anchors.length - 1; i++) {
    const start = anchors[i].top;
    const end = anchors[i + 1].top;
    const span = Math.max(end - start, 1);

    if (probe < end) {
      const scrollInSection = Math.max(0, window.scrollY - Math.max(0, start));
      const t = Math.min(1, scrollInSection / span);
      return snapshotFromBlend(anchors[i].state, anchors[i + 1].state, t);
    }
  }

  const last = anchors[anchors.length - 1];
  return snapshotFromState(last.state, null, 1);
}

export function getMorphTransitionLabels(): { phase1: string; phase2: string } {
  const [hero, gateway, method] = SYNAPSE_MORPH_STATES;
  const a = SYNAPSE_SHAPE_REGISTRY[hero.shape].label;
  const b = SYNAPSE_SHAPE_REGISTRY[gateway.shape].label;
  const c = SYNAPSE_SHAPE_REGISTRY[method.shape].label;
  return {
    phase1: `${a} → ${b}`,
    phase2: `${b} → ${c}`,
  };
}
