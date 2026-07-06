/** Vidéo hero HD (~31 Mo) — desktop / bon réseau */
export const HERO_VIDEO_HD = "/hero/Generated Video July 06, 2026 - 7_33AM.mp4";
/** Vidéo hero SD (~7 Mo) — mobile / save-data / réseau lent */
export const HERO_VIDEO_SD = "/hero/255db00d-8eb9-4a76-85d7-2cc11c377cb7.mp4";

export function pickHeroVideoSrc(options: {
  reducedMotion: boolean;
  isMobile: boolean;
  saveData?: boolean;
  slowConnection?: boolean;
}): string | null {
  if (options.reducedMotion) return null;
  if (options.saveData || options.slowConnection || options.isMobile) return HERO_VIDEO_SD;
  return HERO_VIDEO_HD;
}

export function readNetworkHints(): { saveData: boolean; slowConnection: boolean } {
  if (typeof navigator === "undefined") {
    return { saveData: false, slowConnection: false };
  }
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  const effectiveType = conn?.effectiveType ?? "";
  return {
    saveData: Boolean(conn?.saveData),
    slowConnection: effectiveType === "2g" || effectiveType === "slow-2g",
  };
}
