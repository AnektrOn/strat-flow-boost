import { useEffect, useState, type RefObject } from "react";

/** Retourne false quand l'élément observé quitte le viewport. */
export function useInViewport(ref: RefObject<Element | null>, threshold = 0.05): boolean {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px 10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
