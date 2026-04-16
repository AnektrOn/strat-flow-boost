import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-n-bg border-b border-n-border"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-display text-xl tracking-wide text-n-text"
      >
        NOMOS
      </a>

      <a href="#candidature" className="cta-primary hidden sm:inline-flex !py-3 !px-8 !text-[11px]">
        Réserver l'Audit
      </a>
    </header>
  );
}
