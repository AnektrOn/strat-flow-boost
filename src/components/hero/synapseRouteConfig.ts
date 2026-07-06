import type { HeroProtocolAccent } from "@/lib/heroProtocolStyles";

export type SynapseMorphAnchors = readonly [string, string, string];

export type SynapseRouteConfig = {
  variant: "hub" | "centered";
  morphAnchors: SynapseMorphAnchors;
  protocolAccent?: HeroProtocolAccent;
  /** Fade en bas de page (protocoles longs). */
  fadeOnScroll?: boolean;
  /** ADN / synapse décalé à droite du viewport (CRISIS, LEVEL UP, AEGIS). */
  alignRight?: boolean;
};

const PROTOCOL_MORPH_ANCHORS: SynapseMorphAnchors = ["hero", "mechanism", "protocol"];

const SYNAPSE_ROUTES: Record<string, SynapseRouteConfig> = {
  "/": {
    variant: "hub",
    morphAnchors: ["synapse-hero", "synapse-gateway", "synapse-method"],
  },
  "/nomos": {
    variant: "centered",
    morphAnchors: PROTOCOL_MORPH_ANCHORS,
    protocolAccent: "nomos",
    fadeOnScroll: true,
    alignRight: true,
  },
  "/ascension": {
    variant: "centered",
    morphAnchors: PROTOCOL_MORPH_ANCHORS,
    protocolAccent: "ascension",
    fadeOnScroll: true,
    alignRight: true,
  },
  "/metaphysique": {
    variant: "centered",
    morphAnchors: PROTOCOL_MORPH_ANCHORS,
    protocolAccent: "metaphysique",
    fadeOnScroll: true,
  },
  "/aegis": {
    variant: "centered",
    morphAnchors: ["hero", "clinical", "formats"],
    protocolAccent: "aegis",
    fadeOnScroll: true,
    alignRight: true,
  },
};

export function getSynapseRouteConfig(pathname: string): SynapseRouteConfig | null {
  return SYNAPSE_ROUTES[pathname] ?? null;
}

export function isSynapseRoute(pathname: string): boolean {
  return pathname in SYNAPSE_ROUTES;
}
