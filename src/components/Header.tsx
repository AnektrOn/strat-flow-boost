import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailDialog } from "@/contexts/EmailDialogContext";

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

export function Header({ mode = "nomos" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { openAudit } = useEmailDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const auditLabel = t(auditKey[mode]);
  const isHub = mode === "hub";
  const isLanding = isHub && location.pathname === "/";

  return (
    <header
      className={
        isLanding
          ? `sticky top-0 z-50 backdrop-blur-md transition-colors ${
              scrolled ? "bg-n-bg/90 border-b border-n-border" : "bg-transparent"
            }`
          : "sticky top-0 z-50 px-3 pt-3 sm:px-4"
      }
    >
      <div
        className={
          isLanding
            ? "container-nomos flex items-center justify-between gap-3 sm:gap-4 py-4"
            : `container-nomos flex items-center justify-between gap-3 sm:gap-4 py-3 px-4 sm:px-6 rounded-full border transition-all duration-300 ease-cinematic backdrop-blur-md ${
                scrolled
                  ? "bg-n-bg/90 border-n-border shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                  : "bg-n-bg/60 border-n-border/50"
              }`
        }
      >
        <Link
          to="/"
          className="font-body font-bold text-sm tracking-[0.2em] uppercase text-n-text shrink-0"
          aria-label={t("common.header.homeAria")}
        >
          NOMOS
        </Link>
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
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
