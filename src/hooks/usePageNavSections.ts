import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PAGE_NAV_SECTION_IDS, type PageNavKey } from "@/lib/pageNav";

export type PageNavSection = {
  id: string;
  label: string;
  num: string;
};

export function usePageNavSections(page: PageNavKey): PageNavSection[] {
  const { getTr } = useLanguage();

  return useMemo(() => {
    const ids = PAGE_NAV_SECTION_IDS[page];
    const labels = getTr(`pageNav.${page}`) as Record<string, string> | undefined;

    return ids.map((id, index) => ({
      id,
      label: labels?.[id] ?? id,
      num: String(index + 1).padStart(2, "0"),
    }));
  }, [getTr, page]);
}
