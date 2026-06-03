import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("common.notFound.code")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("common.notFound.message")}</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t("common.notFound.back")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
