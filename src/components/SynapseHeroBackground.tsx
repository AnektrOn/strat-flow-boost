import { useEffect, useRef } from "react";
import { NeuralSynapseCanvas } from "@/components/hero/NeuralSynapseCanvas";
import {
  computePageFadeFromMorph,
  computeSynapseMorph,
} from "@/components/hero/synapseMorphStates";
import type { SynapseMorphAnchors } from "@/components/hero/synapseRouteConfig";
import { DEFAULT_SYNAPSE_SETTINGS } from "@/components/hero/synapseSettings";
import { HERO_PROTOCOL_STYLES, type HeroProtocolAccent } from "@/lib/heroProtocolStyles";

interface SynapseHeroBackgroundProps {
  variant?: "hub" | "centered";
  morphAnchors: SynapseMorphAnchors;
  routeKey?: string;
  paused?: boolean;
  fadeOnScroll?: boolean;
  alignRight?: boolean;
  protocolAccent?: HeroProtocolAccent;
  className?: string;
}

/** Fond synapse 3D — une seule implémentation, ancres DOM par route. */
export function SynapseHeroBackground({
  variant = "centered",
  morphAnchors,
  routeKey = "",
  paused = false,
  fadeOnScroll = false,
  alignRight = false,
  protocolAccent,
  className,
}: SynapseHeroBackgroundProps) {
  const settingsRef = useRef(DEFAULT_SYNAPSE_SETTINGS);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const anchorsRef = useRef(morphAnchors);
  anchorsRef.current = morphAnchors;

  const protocolStyle = protocolAccent ? HERO_PROTOCOL_STYLES[protocolAccent] : null;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !fadeOnScroll) {
      if (wrapper) wrapper.style.opacity = "1";
      return;
    }

    let frame = 0;
    const updateOpacity = () => {
      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollRaw = window.scrollY / docHeight;
      const { morph } = computeSynapseMorph(anchorsRef.current);
      wrapper.style.opacity = String(computePageFadeFromMorph(morph, scrollRaw));
      frame = requestAnimationFrame(updateOpacity);
    };

    frame = requestAnimationFrame(updateOpacity);
    return () => cancelAnimationFrame(frame);
  }, [fadeOnScroll]);

  const overlayClass =
    variant === "hub"
      ? "bg-gradient-to-b from-black/40 via-black/5 to-black/70 md:from-black/30 md:via-transparent md:to-black/65"
      : fadeOnScroll
        ? "bg-gradient-to-b from-black/12 via-transparent to-black/28"
        : "bg-gradient-to-b from-black/20 via-transparent to-black/50";

  const vignetteStyle =
    variant === "centered" && fadeOnScroll
      ? "radial-gradient(ellipse 90% 75% at 50% 45%, transparent 0%, hsl(0 0% 0% / 0.12) 100%)"
      : variant === "centered"
        ? "radial-gradient(ellipse 90% 75% at 50% 45%, transparent 0%, hsl(0 0% 0% / 0.18) 100%)"
        : undefined;

  const tintStyle =
    protocolStyle?.tintOverlay &&
    `radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--color-teal) / 0.06) 0%, transparent 65%)`;

  return (
    <div ref={wrapperRef} className={className ?? "absolute inset-0 overflow-hidden isolate"}>
      <NeuralSynapseCanvas
        settingsRef={settingsRef}
        morphAnchors={morphAnchors}
        routeKey={routeKey}
        hubFocal={variant === "hub"}
        alignRight={alignRight}
        paused={paused}
        className="absolute inset-0 z-0 bg-[#020202]"
      />

      <div className="absolute inset-0 noise-overlay opacity-[0.04] mix-blend-soft-light pointer-events-none" />

      {tintStyle && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: tintStyle }}
          aria-hidden
        />
      )}

      <div className={`absolute inset-0 pointer-events-none z-[1] ${overlayClass}`} />

      {vignetteStyle && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: vignetteStyle }}
          aria-hidden
        />
      )}

      {variant === "hub" && (
        <div
          className="absolute inset-0 pointer-events-none z-[1] hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 85% 70% at 50% 42%, transparent 0%, hsl(var(--color-bg) / 0.3) 100%)",
          }}
        />
      )}
    </div>
  );
}
