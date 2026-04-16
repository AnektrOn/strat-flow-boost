import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-md border border-foreground/10 bg-background/80 p-0.5 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label="Choisir la langue / Choose language"
    >
      {LOCALES.map(({ code, label }) => (
        <Button
          key={code}
          variant="ghost"
          size="sm"
          className={cn(
            "min-w-[2.5rem] font-light transition-colors",
            locale === code
              ? "bg-foreground/10 text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setLocale(code)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
