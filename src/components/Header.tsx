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
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "bg-n-bg/90 border-b border-n-border" : "bg-transparent"
      }`}
    >
      <div className="container-nomos flex items-center justify-between py-4">
        <a
          href="#hero"
          className="font-body font-bold text-sm tracking-[0.2em] uppercase text-n-text"
        >
          NOMOS
        </a>
        <a href="#audit" className="btn-outline sm">
          Réserver l'Audit
        </a>
      </div>
    </header>
  );
}
