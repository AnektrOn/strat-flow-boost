import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SYNAPSE_MORPH_STATES,
  computeSynapseMorph,
  getMorphTransitionLabels,
  type SynapseMorphSnapshot,
} from "./synapseMorphStates";
import { getSynapseRouteConfig } from "./synapseRouteConfig";
import { getDefaultFramingCamera, getProtocolSynapseFraming } from "./synapseViewportFraming";
import { SYNAPSE_SHAPE_REGISTRY } from "./synapseShapeBuilders";

/** HUD discret — affiche l'état morphing courant (?debug=synapse). */
export function SynapseMorphIndicator() {
  const { pathname } = useLocation();
  const config = getSynapseRouteConfig(pathname);
  const anchors = config?.morphAnchors ?? ["hero", "mechanism", "protocol"];
  const [snap, setSnap] = useState<SynapseMorphSnapshot>(() => computeSynapseMorph(anchors));
  const labels = getMorphTransitionLabels();

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      setSnap(computeSynapseMorph(anchors));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [anchors[0], anchors[1], anchors[2]]);

  const pct = Math.round(snap.morph * 100);
  const framing =
    typeof window !== "undefined" && config?.alignRight
      ? getProtocolSynapseFraming({
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          morphT: 1,
          ...getDefaultFramingCamera(window.innerWidth),
        })
      : null;

  return (
    <aside className="fixed bottom-6 left-6 z-50 max-w-[260px] rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-4 text-xs pointer-events-none shadow-2xl">
      <p className="text-[10px] uppercase tracking-[0.15em] text-n-gold mb-2 font-semibold">Morphing live</p>
      <p className="text-white font-medium mb-1">{snap.stateLabel}</p>
      {snap.nextStateId && (
        <p className="text-white/40 mb-3">
          → {SYNAPSE_MORPH_STATES.find((s) => s.id === snap.nextStateId)?.label}{" "}
          <span className="text-n-teal tabular-nums">{Math.round(snap.segmentProgress * 100)}%</span>
        </p>
      )}

      <div className="space-y-2 mb-3">
        <MorphBar label="Global" value={pct} />
        <MorphBar label={labels.phase1} value={Math.round(snap.t12 * 100)} color="bg-n-gold" />
        <MorphBar label={labels.phase2} value={Math.round(snap.t23 * 100)} color="bg-n-teal" />
      </div>

      <div className="grid grid-cols-3 gap-1 text-[10px] text-white/50 tabular-nums mb-3">
        <span>cam X {snap.camera.x.toFixed(0)}</span>
        <span>Y {snap.camera.y.toFixed(0)}</span>
        <span>Z {snap.camera.z.toFixed(0)}</span>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-white/45 tabular-nums mb-3 pb-3 border-b border-white/10">
        <span>Density {snap.settings.particleCount}</span>
        <span>Reach {snap.settings.connectionDistance.toFixed(0)}</span>
        <span>Axon {snap.settings.particleSize.toFixed(1)}</span>
      </div>

      {framing && (
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-white/40 tabular-nums mb-3 pb-3 border-b border-white/10">
          <span>viewport {window.innerWidth}×{window.innerHeight}</span>
          <span>targetX {(framing.targetScreenX * 100).toFixed(0)}%</span>
          <span>worldW {framing.visibleWorldWidth.toFixed(0)}</span>
          <span>offsetX {framing.offsetX.toFixed(0)}</span>
        </div>
      )}

      <ul className="pt-3 border-t border-white/10 space-y-2 text-[10px]">
        {SYNAPSE_MORPH_STATES.map((s, i) => {
          const meta = SYNAPSE_SHAPE_REGISTRY[s.shape];
          return (
            <li key={s.id} className={snap.stateId === s.id ? "text-n-gold" : "text-white/45"}>
              <div className="flex items-center gap-1.5">
                <span>{s.validated ? "✓" : "?"}</span>
                <span className="font-mono text-white/30">#{anchors[i]}</span>
                <span>{s.label}</span>
              </div>
              {!s.validated && (
                <p className="text-white/30 ml-4 mt-0.5 leading-snug">{meta.narrative}</p>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function MorphBar({ label, value, color = "bg-white/60" }: { label: string; value: number; color?: string }) {
  return (
    <div>
      <div className="flex justify-between text-white/50 mb-0.5 gap-2">
        <span className="truncate">{label}</span>
        <span className="tabular-nums shrink-0">{value}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full transition-[width] duration-150 ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
