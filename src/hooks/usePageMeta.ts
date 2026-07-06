import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export type PageMetaKey =
  | "hub"
  | "nomos"
  | "ascension"
  | "metaphysique"
  | "aegis"
  | "caseStudies"
  | "caseStudyC"
  | "caseStudyL"
  | "caseStudyH"
  | "notFound";

const SITE_ORIGIN = "https://www.protocolenomos.com";

const ARTICLE_KEYS: PageMetaKey[] = ["caseStudyC", "caseStudyL", "caseStudyH"];

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

function setLinkTag(rel: string, href: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | null) {
  if (typeof document === "undefined") return;
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const el = (existing as HTMLScriptElement | null) ?? document.createElement("script");
  el.setAttribute("type", "application/ld+json");
  el.id = id;
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

export function usePageMeta(page: PageMetaKey) {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);
    const url = `${SITE_ORIGIN}${pathname}`;
    const isArticle = ARTICLE_KEYS.includes(page);
    const ogType = isArticle ? "article" : "website";

    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setLinkTag("canonical", url);

    if (isArticle) {
      upsertJsonLd("ld-article", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        author: { "@type": "Organization", name: "NOMOS" },
        publisher: { "@type": "Organization", name: "NOMOS" },
      });
    } else {
      upsertJsonLd("ld-article", null);
    }
  }, [page, t, pathname]);
}
