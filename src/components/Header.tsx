import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";
import type { AuditProtocol } from "@/lib/contactEmail";

export type HeaderMode = "hub" | "nomos" | "ascension" | "metaphysique" | "aegis";

type HeaderProps = {
  mode?: HeaderMode;
};

const auditKey: Record<HeaderMode, string> = {
  hub: "common.header.auditHub",
  nomos: "common.header.auditDefault",
  ascension: "common.header.auditAscension",
  metaphysique: "common.header.auditMetaphysique",
  aegis: "common.header.auditAegis",
};

const protocolByMode: Record<HeaderMode, AuditProtocol> = {
  hub: "hub",
  nomos: "nomos",
  ascension: "ascension",
  metaphysique: "metaphysique",
  aegis: "aegis",
};

const AEGIS_PATH = "/aegis";

export function Header({ mode = "nomos" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { openAudit } = useEmailDialog();
  const onAegis = mode === "aegis" || location.pathname === AEGIS_PATH;

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
      <div className="container-nomos flex items-center justify-between gap-3 sm:gap-4 py-4">
        <Link
          to="/"
          className="font-body font-bold text-sm tracking-[0.2em] uppercase text-n-text shrink-0"
          aria-label={t("common.header.homeAria")}
        >
          NOMOS
        </Link>
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          <Link
            to={AEGIS_PATH}
            className={`header-aegis-tab shrink-0${onAegis ? " header-aegis-tab--active" : ""}`}
            aria-label={t("common.header.aegisTabAria")}
            aria-current={onAegis ? "page" : undefined}
          >
            <span className="header-aegis-tab-dot" aria-hidden="true" />
            <span className="header-aegis-tab-label">{t("common.header.aegisTab")}</span>
            <span className="header-aegis-tab-badge">{t("common.header.aegisBadge")}</span>
          </Link>
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
