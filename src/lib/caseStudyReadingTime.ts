import type { CaseStudyStudy } from "@/i18n/locales/caseStudies";

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function collectText(study: CaseStudyStudy): string {
  const parts: string[] = [
    study.hero.title,
    study.hero.subtitle,
    study.closing.lead,
    ...study.closing.paragraphs,
    ...study.closing.bullets,
    study.closing.guarantee,
  ];

  for (const section of study.sections) {
    parts.push(section.title, ...(section.paragraphs ?? []), ...(section.paragraphsAfter ?? []));
    section.bullets?.forEach((b) => parts.push(b));
    section.numbered?.forEach((n) => parts.push(n));
    section.outcomes?.forEach((o) => parts.push(o));
    section.testimonials?.forEach((t) => parts.push(t));
    section.quote?.text && parts.push(section.quote.text);
    section.subsections?.forEach((sub) => {
      parts.push(sub.title, ...(sub.paragraphs ?? []));
      sub.bullets?.forEach((b) => parts.push(b));
    });
    section.crisisTable?.rows.forEach((r) => {
      parts.push(r.signal, r.mechanism);
    });
  }

  return parts.join(" ");
}

/** ~200 mots/min pour lecture analytique */
export function estimateReadingMinutes(study: CaseStudyStudy): number {
  const words = countWords(collectText(study));
  return Math.max(8, Math.round(words / 200));
}
