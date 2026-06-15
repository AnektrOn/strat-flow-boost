import { fr as commonFr, en as commonEn } from "./locales/common";
import { fr as metaFr, en as metaEn } from "./locales/meta";
import { fr as onboardingFr, en as onboardingEn } from "./locales/onboarding";
import { fr as nomosFr, en as nomosEn } from "./locales/nomos";
import { fr as ascensionFr, en as ascensionEn } from "./locales/ascension";
import { fr as metaphysiqueFr, en as metaphysiqueEn } from "./locales/metaphysique";
import { fr as aegisFr, en as aegisEn } from "./locales/aegis";
import { fr as floatingBubbleFr, en as floatingBubbleEn } from "./locales/floatingBubble";
import { fr as caseStudiesFr, en as caseStudiesEn } from "./locales/caseStudies";
import { fr as pageNavFr, en as pageNavEn } from "./locales/pageNav";

export type Locale = "fr" | "en";

export const translations = {
  fr: {
    ...commonFr,
    ...metaFr,
    ...onboardingFr,
    ...nomosFr,
    ...ascensionFr,
    ...metaphysiqueFr,
    ...aegisFr,
    ...floatingBubbleFr,
    ...caseStudiesFr,
    ...pageNavFr,
  },
  en: {
    ...commonEn,
    ...metaEn,
    ...onboardingEn,
    ...nomosEn,
    ...ascensionEn,
    ...metaphysiqueEn,
    ...aegisEn,
    ...floatingBubbleEn,
    ...caseStudiesEn,
    ...pageNavEn,
  },
} as const;

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function t(locale: Locale, key: string): string {
  const value = getNested(translations[locale] as Record<string, unknown>, key);
  if (typeof value === "string") return value;
  return key;
}
