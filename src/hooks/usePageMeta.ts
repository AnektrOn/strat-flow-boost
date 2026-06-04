import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export type PageMetaKey =
  | "hub"
  | "nomos"
  | "ascension"
  | "metaphysique"
  | "caseStudies"
  | "caseStudyC"
  | "caseStudyL"
  | "caseStudyH"
  | "notFound";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta(page: PageMetaKey) {
  const { t } = useLanguage();

  useEffect(() => {
    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);

    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
  }, [page, t]);
}
