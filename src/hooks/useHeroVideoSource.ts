import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_VIDEO_HD, pickHeroVideoSrc, readNetworkHints } from "@/lib/heroVideo";

const MOBILE_MQ = "(max-width: 768px)";

/** Choisit HD / SD / poster-only selon viewport, réseau et reduced-motion. */
export function useHeroVideoSource(explicitSrc?: string | null): string | null {
  const reduced = useReducedMotion();
  const [src, setSrc] = useState<string | null>(() => {
    if (explicitSrc !== undefined) return explicitSrc;
    return null;
  });

  useEffect(() => {
    if (explicitSrc !== undefined) {
      setSrc(explicitSrc);
      return;
    }

    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => {
      const { saveData, slowConnection } = readNetworkHints();
      setSrc(
        pickHeroVideoSrc({
          reducedMotion: Boolean(reduced),
          isMobile: mq.matches,
          saveData,
          slowConnection,
        }),
      );
    };

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [explicitSrc, reduced]);

  return src;
}
