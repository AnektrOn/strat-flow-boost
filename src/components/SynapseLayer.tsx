import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SynapseHeroBackground } from "@/components/SynapseHeroBackground";
import { SynapseMorphIndicator } from "@/components/hero/SynapseMorphIndicator";
import { getSynapseRouteConfig } from "@/components/hero/synapseRouteConfig";

/**
 * Couche synapse unique — montée une fois dans App.
 * Le canvas WebGL persiste entre les navigations (pas de re-init GPU).
 */
export function SynapseLayer() {
  const { pathname, search } = useLocation();
  const config = getSynapseRouteConfig(pathname);
  const active = config !== null;
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    setShowDebug(new URLSearchParams(search).get("debug") === "synapse");
  }, [search]);

  return (
    <>
      {showDebug && active && <SynapseMorphIndicator />}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ visibility: active ? "visible" : "hidden" }}
        aria-hidden
      >
        <SynapseHeroBackground
          variant={config?.variant ?? "centered"}
          morphAnchors={config?.morphAnchors ?? ["hero", "mechanism", "protocol"]}
          protocolAccent={config?.protocolAccent}
          fadeOnScroll={config?.fadeOnScroll ?? false}
          alignRight={config?.alignRight ?? false}
          routeKey={pathname}
          paused={!active}
          className="absolute inset-0"
        />
      </div>
    </>
  );
}
