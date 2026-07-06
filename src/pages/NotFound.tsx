import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  usePageMeta("notFound");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-n-bg">
      <Header />
      <div className="p-3 sm:p-4 md:p-6 min-h-[calc(100vh-5rem)] flex">
      <div className="relative flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden border border-n-border/60 flex items-center justify-center bg-n-bg">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, hsl(var(--color-gold) / 0.1) 0%, transparent 55%), hsl(var(--color-bg))",
          }}
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.5] mix-blend-overlay pointer-events-none" />
        <div className="text-center relative">
          <h1 className="h-giant font-display text-[clamp(6rem,22vw,14rem)] text-n-text mb-4">
            {t("common.notFound.code")}
          </h1>
          <p className="mb-8 text-lg text-n-muted">{t("common.notFound.message")}</p>
          <Link to="/" className="btn-outline">
            {t("common.notFound.back")}
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
