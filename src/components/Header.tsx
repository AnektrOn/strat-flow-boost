import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AUDIT_FORM_URL } from "@/components/AuditCTABlock";

export type HeaderMode = "hub" | "nomos" | "ascension" | "metaphysique";

type HeaderProps = {
  mode?: HeaderMode;
};

export function Header({ mode = "nomos" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const auditLabel =
    mode === "ascension"
      ? "Réserver l'Audit ASCENSION"
      : mode === "metaphysique"
        ? "Candidater — Avant-garde"
        : "Réserver l'Audit";
  const auditHref = mode === "hub" ? AUDIT_FORM_URL : "#audit";
  const auditExternal = mode === "hub";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "bg-n-bg/90 border-b border-n-border" : "bg-transparent"
      }`}
    >
      <div className="container-nomos flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-body font-bold text-sm tracking-[0.2em] uppercase text-n-text"
          aria-label="NOMOS — Accueil"
        >
          NOMOS
        </Link>
        {auditExternal ? (
          <a
            href={auditHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline sm"
          >
            {auditLabel}
          </a>
        ) : (
          <a href={auditHref} className="btn-outline sm">
            {auditLabel}
          </a>
        )}
      </div>
    </header>
  );
}
