import { useEffect, useState } from "react";

export function useCaseStudyScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
          return;
        }

        const scrollY = window.scrollY + 120;
        let current = sectionIds[0];
        for (const el of elements) {
          if (el.offsetTop <= scrollY) current = el.id;
        }
        setActiveId(current);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds.join(",")]);

  return activeId;
}
