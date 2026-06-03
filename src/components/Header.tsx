import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import type { AuditProtocol } from "@/lib/contactEmail";

export type HeaderMode = "hub" | "nomos" | "ascension" | "metaphysique";

type HeaderProps = {
  mode?: HeaderMode;
};

const auditKey: Record<HeaderMode, string> = {
  hub: "common.header.auditHub",
  nomos: "common.header.auditDefault",
  ascension: "common.header.auditAscension",
  metaphysique: "common.header.auditMetaphysique",
};

const protocolByMode: Record<HeaderMode, AuditProtocol> = {
  hub: "hub",
  nomos: "nomos",
  ascension: "ascension",
  metaphysique: "metaphysique",
};

export function Header({ mode = "nomos" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const { openAudit } = useEmailDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const auditLabel = t(auditKey[mode]);
  const isHub = mode === "hub";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "bg-n-bg/90 border-b border-n-border" : "bg-transparent"
      }`}
    >
      <div className="container-nomos flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="font-body font-bold text-sm tracking-[0.2em] uppercase text-n-text shrink-0"
          aria-label={t("common.header.homeAria")}
        >
          NOMOS
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          {isHub ? (
            <button
              type="button"
              onClick={() => openAudit("hub")}
              className="btn-outline sm shrink-0"
            >
              {auditLabel}
            </button>
          ) : (
            <a href="#audit" className="btn-outline sm shrink-0">
              {auditLabel}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
