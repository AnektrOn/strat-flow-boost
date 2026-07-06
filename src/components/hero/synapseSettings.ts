/** Réglages live du réseau synaptique (panneau démo). */
export type SynapseSettings = {
  particleCount: number;
  connectionDistance: number;
  speed: number;
  rotationSpeed: number;
  colorCenter: string;
  colorEdges: string;
  bloomIntensity: number;
  particleSize: number;
};

export const DEFAULT_SYNAPSE_SETTINGS: SynapseSettings = {
  particleCount: 100,
  connectionDistance: 30,
  particleSize: 1.1,
  speed: 0.5,
  rotationSpeed: 0.002,
  colorCenter: "#c9a96e",
  colorEdges: "#2d969a",
  bloomIntensity: 1.5,
};
