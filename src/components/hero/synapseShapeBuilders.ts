import * as THREE from "three";

/** Identifiants des formes particules — extensible. */
export type SynapseShapeId =
  | "metatron"
  | "dispersion"
  | "helix"
  | "brain"
  | "nucleus"
  | "tri_cluster"
  | "sphere";

export type SynapseShapeMeta = {
  id: SynapseShapeId;
  label: string;
  validated: boolean;
  narrative: string;
  alternatives: string[];
};

export const SYNAPSE_SHAPE_REGISTRY: Record<SynapseShapeId, SynapseShapeMeta> = {
  metatron: {
    id: "metatron",
    label: "Metatron",
    validated: true,
    narrative: "Géométrie sacrée — structure ordonnée, noyau de connexions.",
    alternatives: [],
  },
  dispersion: {
    id: "dispersion",
    label: "Explosion contrôlée",
    validated: true,
    narrative: "Énergie qui se déploie sans chaos — réseau dense qui s'étire.",
    alternatives: [],
  },
  helix: {
    id: "helix",
    label: "ADN",
    validated: true,
    narrative: "Double hélice structurée — ordre méthodologique.",
    alternatives: [],
  },
  brain: {
    id: "brain",
    label: "Cerveau",
    validated: true,
    narrative: "Double hémisphère — exocortex vivant, réseau neural.",
    alternatives: [],
  },
  nucleus: {
    id: "nucleus",
    label: "Noyau compact",
    validated: false,
    narrative: "Legacy placeholder.",
    alternatives: [],
  },
  tri_cluster: {
    id: "tri_cluster",
    label: "Tri-cluster",
    validated: false,
    narrative: "Legacy placeholder.",
    alternatives: [],
  },
  sphere: {
    id: "sphere",
    label: "Sphère",
    validated: false,
    narrative: "Legacy.",
    alternatives: [],
  },
};

/** Capacité max particules (plus haute densité = état 2). */
export const SYNAPSE_MAX_PARTICLES = 700;

const METATRON_SCALE = 72;

/** 13 sommets : centre + 2 hexagones (Metatron 2D, plan XY). */
function getMetatronVertices(): THREE.Vector3[] {
  const verts = [new THREE.Vector3(0, 0, 0)];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3;
    verts.push(
      new THREE.Vector3(METATRON_SCALE * 0.5 * Math.cos(a), METATRON_SCALE * 0.5 * Math.sin(a), 0),
    );
  }
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 + Math.PI / 6;
    verts.push(new THREE.Vector3(METATRON_SCALE * Math.cos(a), METATRON_SCALE * Math.sin(a), 0));
  }
  return verts;
}

/** Arêtes du cube de Metatron (projection 2D classique). */
function getMetatronEdges(): [number, number][] {
  return [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
    [1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12],
    [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 7],
    [1, 4], [2, 5], [3, 6], [7, 10], [8, 11], [9, 12],
    [1, 3], [2, 4], [3, 5], [4, 6], [5, 1], [6, 2],
  ];
}

let metatronSegments: { start: THREE.Vector3; end: THREE.Vector3; len: number }[] | null = null;
let metatronTotalLen = 0;

function getMetatronSegments() {
  if (metatronSegments) return { segments: metatronSegments, totalLen: metatronTotalLen };

  const verts = getMetatronVertices();
  const edges = getMetatronEdges();
  metatronSegments = edges.map(([a, b]) => {
    const start = verts[a].clone();
    const end = verts[b].clone();
    return { start, end, len: start.distanceTo(end) };
  });
  metatronTotalLen = metatronSegments.reduce((s, seg) => s + seg.len, 0);
  return { segments: metatronSegments, totalLen: metatronTotalLen };
}

/** Metatron — particules réparties le long des arêtes (100 cibles). */
export function buildMetatron(i: number, activeCount: number): THREE.Vector3 {
  if (i >= activeCount) return new THREE.Vector3(0, 0, 0);

  const { segments, totalLen } = getMetatronSegments();
  const t = ((i + 0.5) / activeCount) * totalLen;
  let acc = 0;

  for (const seg of segments) {
    if (acc + seg.len >= t || seg === segments[segments.length - 1]) {
      const local = seg.len > 0 ? Math.min(1, (t - acc) / seg.len) : 0;
      return new THREE.Vector3().lerpVectors(seg.start, seg.end, local);
    }
    acc += seg.len;
  }
  return new THREE.Vector3(0, 0, 0);
}

/** Explosion contrôlée — dispersion depuis le noyau Metatron. */
export function buildDispersion(from: THREE.Vector3, i: number, activeCount: number): THREE.Vector3 {
  if (i >= activeCount) return new THREE.Vector3(0, 0, 0);
  if (from.lengthSq() < 0.01) {
    const radius = 100 * Math.pow(Math.random(), 1.5);
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);
    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    );
  }
  const scatterDir = from.clone().normalize();
  const scatterDist = from.length() + 30 + Math.random() * 50;
  return new THREE.Vector3(scatterDir.x * scatterDist, scatterDir.y * scatterDist, scatterDir.z * scatterDist);
}

export type HelixShapeConfig = {
  height: number;
  radius: number;
  turns: number;
};

/** Ratio de nodes « barreaux » vs brins — 12 % ≈ 18 rungs sur 150 nodes. */
export const HELIX_RUNG_RATIO = 0.12;

/**
 * Double hélice ADN déterministe — indices 0…N-1 répartis brin A / brin B / barreaux.
 * Les `activeCount` premiers indices forment la structure lisible (état 3 = 150).
 */
export function buildHelixNode(
  i: number,
  activeCount: number,
  cfg: HelixShapeConfig,
): THREE.Vector3 {
  if (i >= activeCount) return new THREE.Vector3(0, 0, 0);

  const { height: h3, radius: r3, turns } = cfg;
  const numRungs = Math.max(8, Math.round(activeCount * HELIX_RUNG_RATIO));
  const strandCount = activeCount - numRungs;
  const targetPos3 = new THREE.Vector3();

  if (i >= strandCount) {
    const rungIndex = i - strandCount;
    const rungYNorm = rungIndex / Math.max(numRungs - 1, 1);
    const yPos = rungYNorm * h3 - h3 / 2;
    const tAngle = rungYNorm * Math.PI * 2 * turns;
    const xA = r3 * Math.cos(tAngle);
    const zA = r3 * Math.sin(tAngle);
    const xB = r3 * Math.cos(tAngle + Math.PI);
    const zB = r3 * Math.sin(tAngle + Math.PI);
    const lerpFactor = 0.35 + (rungIndex % 3) * 0.15;
    targetPos3.set(
      xA + (xB - xA) * lerpFactor,
      yPos,
      zA + (zB - zA) * lerpFactor,
    );
  } else {
    const strand = i % 2;
    const posOnStrand = Math.floor(i / 2);
    const yNorm = posOnStrand / Math.max(strandCount / 2 - 1, 1);
    const yPos = yNorm * h3 - h3 / 2;
    const tAngle = yNorm * Math.PI * 2 * turns;
    const phase = strand === 0 ? 0 : Math.PI;
    const jitter = strand === 0 ? 1.2 : -1.2;
    targetPos3.set(
      r3 * Math.cos(tAngle + phase) + jitter,
      yPos,
      r3 * Math.sin(tAngle + phase) + jitter * 0.5,
    );
  }
  return targetPos3;
}

/** @deprecated Utiliser buildHelixNode avec HELIX_SHAPE. */
export function buildHelix(i: number, activeCount: number): THREE.Vector3 {
  return buildHelixNode(i, activeCount, { height: 240, radius: 45, turns: 2.5 });
}

/**
 * Géométrie cerveau anatomique stylisée.
 * Régions : hémisphères cérébraux · corps calleux · cervelet · tronc.
 */
export type BrainShapeConfig = {
  cerebrumRX: number;
  cerebrumRY: number;
  cerebrumRZ: number;
  fissureGap: number;
  cerebellumR: number;
  wrinkle: number;
  stemLength: number;
  stemR: number;
};

export const BRAIN_SHAPE: BrainShapeConfig = {
  cerebrumRX: 40,
  cerebrumRY: 46,
  cerebrumRZ: 36,
  fissureGap: 9,
  cerebellumR: 16,
  wrinkle: 4,
  stemLength: 26,
  stemR: 6,
};

/** Calibrage compact page AEGIS. */
export const AEGIS_BRAIN_SHAPE: BrainShapeConfig = {
  cerebrumRX: 30,
  cerebrumRY: 36,
  cerebrumRZ: 28,
  fissureGap: 7,
  cerebellumR: 12,
  wrinkle: 3,
  stemLength: 20,
  stemR: 4.5,
};

const GOLDEN = Math.PI * (3 - Math.sqrt(5));

function brainRegionCounts(activeCount: number) {
  const stem = Math.max(10, Math.round(activeCount * 0.04));
  const bridge = Math.max(12, Math.round(activeCount * 0.05));
  const cerebellum = Math.max(28, Math.round(activeCount * 0.14));
  const cortex = activeCount - stem - bridge - cerebellum;
  const perHemisphere = Math.floor(cortex / 2);
  return { perHemisphere, cerebellum, bridge, stem };
}

/** Hémisphère cérébral — lobe latéral avec fissure médiane, gyri et lobes frontaux/temporaux. */
function buildCerebralHemisphere(
  hi: number,
  total: number,
  side: -1 | 1,
  cfg: BrainShapeConfig,
): THREE.Vector3 {
  const y = 1 - ((hi + 0.5) / total) * 2;
  const ring = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = GOLDEN * hi;

  let lat = Math.cos(theta) * ring;
  let vert = y;
  let fwd = Math.sin(theta) * ring;

  // Face externe uniquement — crée le sillon interhémisphérique
  if (side * lat < 0.12) {
    lat = side * (0.12 + Math.abs(lat) * 0.28);
  }
  lat = side * Math.abs(lat);

  let x = lat * cfg.cerebrumRX;
  let y2 = vert * cfg.cerebrumRY * 0.9 + cfg.cerebrumRY * 0.06;
  let z = fwd * cfg.cerebrumRZ;

  // Lobe frontal (avant-haut)
  if (z > cfg.cerebrumRZ * 0.15 && y2 > -cfg.cerebrumRY * 0.1) {
    z *= 1.16 + 0.05 * (y2 / cfg.cerebrumRY);
    x *= 1.05;
  }

  // Dôme pariétal
  if (y2 > cfg.cerebrumRY * 0.45) {
    y2 *= 1.07;
    x *= 1.03;
  }

  // Lobes temporaux (latéral-bas)
  if (y2 < cfg.cerebrumRY * 0.12 && Math.abs(x) > cfg.cerebrumRX * 0.42) {
    y2 -= cfg.cerebrumRY * 0.11;
    z *= 1.1;
    x *= 1.06;
  }

  // Occipital (arrière)
  if (z < -cfg.cerebrumRZ * 0.2) {
    z *= 1.08;
    y2 *= 0.97;
  }

  const hemCenterX = side * (cfg.fissureGap * 0.5 + cfg.cerebrumRX * 0.4);
  x += hemCenterX;

  const wrinkle =
    Math.sin(theta * 10 + vert * 8) * cfg.wrinkle +
    Math.cos(theta * 16 + vert * 5) * cfg.wrinkle * 0.35;
  const mag = Math.sqrt((x - hemCenterX) ** 2 + y2 ** 2 + z ** 2) || 1;
  const s = (mag + wrinkle) / mag;

  return new THREE.Vector3(hemCenterX + (x - hemCenterX) * s, y2 * s, z * s);
}

function buildCorpusCallosum(hi: number, total: number, cfg: BrainShapeConfig): THREE.Vector3 {
  const t = hi / Math.max(total - 1, 1);
  const y = cfg.cerebrumRY * (0.02 + t * 0.28);
  const z = cfg.cerebrumRZ * 0.06 + Math.sin(t * Math.PI) * cfg.cerebrumRZ * 0.07;
  const x = (t - 0.5) * cfg.fissureGap * 2.4;
  return new THREE.Vector3(x, y, z);
}

/** Cervelet — deux lobes en « papillon » à l'arrière. */
function buildCerebellum(hi: number, total: number, cfg: BrainShapeConfig): THREE.Vector3 {
  const lobe = hi % 2 === 0 ? -1 : 1;
  const t = Math.floor(hi / 2) / Math.max(Math.floor(total / 2), 1);
  const a = t * Math.PI * 1.4 - 0.15;
  const r = cfg.cerebellumR * (0.78 + 0.22 * Math.sin(t * 19));
  const baseY = -cfg.cerebrumRY * 0.38;
  const baseZ = -cfg.cerebrumRZ * 0.68;
  return new THREE.Vector3(
    lobe * cfg.cerebellumR * 0.58 + Math.cos(a) * r * 0.42,
    baseY + Math.sin(a * 2.1) * r * 0.38,
    baseZ - Math.abs(Math.cos(a)) * r * 0.52,
  );
}

function buildBrainStem(hi: number, total: number, cfg: BrainShapeConfig): THREE.Vector3 {
  const t = hi / Math.max(total - 1, 1);
  const y = -cfg.cerebrumRY * 0.44 - t * cfg.stemLength;
  const r = cfg.stemR * (1 - t * 0.38);
  const a = hi * 2.35;
  return new THREE.Vector3(
    Math.sin(a) * r * 0.32,
    y,
    Math.cos(a) * r * 0.28 - cfg.cerebrumRZ * 0.06,
  );
}

/**
 * Cerveau 3D déterministe — silhouette reconnaissable (vue 3/4 recommandée).
 * ~72 % cortex · 14 % cervelet · 5 % corps calleux · 4 % tronc.
 */
export function buildBrainNode(
  i: number,
  activeCount: number,
  cfg: BrainShapeConfig = BRAIN_SHAPE,
): THREE.Vector3 {
  if (i >= activeCount) return new THREE.Vector3(0, 0, 0);

  const { perHemisphere, cerebellum, bridge, stem } = brainRegionCounts(activeCount);
  const c0 = perHemisphere;
  const c1 = c0 * 2;
  const c2 = c1 + cerebellum;
  const c3 = c2 + bridge;

  if (i < c0) {
    const layer = i % 4 === 0 ? 0.82 : 0.96 + ((i * 3) % 5) * 0.008;
    const p = buildCerebralHemisphere(i, perHemisphere, -1, cfg);
    return p.multiplyScalar(layer);
  }
  if (i < c1) {
    const layer = (i - c0) % 4 === 0 ? 0.82 : 0.96 + (((i - c0) * 3) % 5) * 0.008;
    const p = buildCerebralHemisphere(i - c0, perHemisphere, 1, cfg);
    return p.multiplyScalar(layer);
  }
  if (i < c2) {
    return buildCerebellum(i - c1, cerebellum, cfg);
  }
  if (i < c3) {
    return buildCorpusCallosum(i - c2, bridge, cfg);
  }
  return buildBrainStem(i - c3, stem, cfg);
}

export function buildShape(
  shapeId: SynapseShapeId,
  i: number,
  maxCount: number,
  activeCount: number,
  ref?: THREE.Vector3,
): THREE.Vector3 {
  switch (shapeId) {
    case "metatron":
      return buildMetatron(i, activeCount);
    case "dispersion":
      return buildDispersion(ref ?? buildMetatron(i, activeCount), i, activeCount);
    case "helix":
      return buildHelix(i, activeCount);
    case "brain":
      return buildBrainNode(i, activeCount);
    default:
      return buildMetatron(i, activeCount);
  }
}
