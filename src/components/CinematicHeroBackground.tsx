import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useHeroVideoSource } from "@/hooks/useHeroVideoSource";
import {
  HERO_PROTOCOL_STYLES,
  type HeroProtocolAccent,
} from "@/lib/heroProtocolStyles";

const HERO_IMAGE = "/hero/cinematic-fog-glow.png";

const DEFAULT_CSS_FALLBACK = [
  "radial-gradient(ellipse 80% 60% at 85% 10%, hsl(var(--color-gold) / 0.13) 0%, transparent 55%)",
  "radial-gradient(ellipse 70% 55% at 10% 90%, hsl(var(--color-teal) / 0.14) 0%, transparent 55%)",
  "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(220 10% 8%) 0%, hsl(var(--color-bg)) 100%)",
].join(", ");

interface CinematicHeroBackgroundProps {
  /** Chemin vidéo explicite ; undefined = auto HD/SD ; null = image poster only */
  videoSrc?: string | null;
  variant?: "hub" | "centered";
  protocolAccent?: HeroProtocolAccent;
}

/** Fond cinématique : vidéo + fallback CSS + overlays lisibilité par protocole. */
export function CinematicHeroBackground({
  videoSrc: videoSrcProp,
  variant = "centered",
  protocolAccent,
}: CinematicHeroBackgroundProps) {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoVideoSrc = useHeroVideoSource(videoSrcProp);
  const resolvedVideo = videoSrcProp === null ? null : autoVideoSrc;
  const isVideo = Boolean(resolvedVideo);

  const protocolStyle = protocolAccent ? HERO_PROTOCOL_STYLES[protocolAccent] : null;
  const cssFallback = protocolStyle?.cssFallback ?? DEFAULT_CSS_FALLBACK;
  const objectPosition = protocolStyle?.objectPosition ?? "38% 42%";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced || !resolvedVideo) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    video.addEventListener("loadeddata", play);
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) play();

    return () => video.removeEventListener("loadeddata", play);
  }, [resolvedVideo, reduced]);

  const overlayClass = isVideo
    ? variant === "hub"
      ? "bg-gradient-to-b from-black/25 via-black/10 to-black/55"
      : "bg-gradient-to-b from-black/35 via-black/30 to-black/55"
    : variant === "hub"
      ? "bg-gradient-to-b from-black/45 via-black/20 to-black/75"
      : "bg-gradient-to-b from-black/40 via-black/25 to-black/65";

  const vignetteStyle =
    isVideo && variant === "centered"
      ? protocolStyle?.vignetteCenter ??
        "radial-gradient(ellipse 72% 58% at 50% 46%, hsl(0 0% 0% / 0.52) 0%, transparent 68%), linear-gradient(to bottom, transparent 55%, hsl(var(--color-bg) / 0.35) 100%)"
      : undefined;

  return (
    <div className="absolute inset-0 overflow-hidden isolate">
      <div className="absolute inset-0" style={{ background: cssFallback }} aria-hidden />

      {isVideo ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-1/2 left-1/2 min-h-full min-w-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.06]"
          style={{ objectPosition }}
          poster={HERO_IMAGE}
        >
          <source src={resolvedVideo!} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover object-center ${
            reduced ? "" : "animate-hero-ken-burns"
          }`}
          loading="eager"
          fetchPriority="high"
        />
      )}

      {!isVideo && (
        <div className="absolute inset-0 noise-overlay opacity-[0.35] mix-blend-overlay pointer-events-none" />
      )}
      {isVideo && (
        <div className="absolute inset-0 noise-overlay opacity-[0.06] mix-blend-soft-light pointer-events-none" />
      )}

      {protocolStyle?.tintOverlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: protocolStyle.tintOverlay }}
          aria-hidden
        />
      )}

      <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />

      {vignetteStyle && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: vignetteStyle }}
          aria-hidden
        />
      )}

      {variant === "hub" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isVideo
              ? "linear-gradient(to top, hsl(var(--color-bg) / 0.55) 0%, transparent 40%), linear-gradient(to right, hsl(var(--color-bg) / 0.35) 0%, transparent 45%)"
              : "linear-gradient(to top, hsl(var(--color-bg) / 0.85) 0%, transparent 45%), linear-gradient(to right, hsl(var(--color-bg) / 0.5) 0%, transparent 50%)",
          }}
          aria-hidden
        />
      )}
    </div>
  );
}

export { HERO_IMAGE };
export { HERO_VIDEO_HD, HERO_VIDEO_SD } from "@/lib/heroVideo";
