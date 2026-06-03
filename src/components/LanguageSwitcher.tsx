import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/i18n/translations";

const locales: Locale[] = ["fr", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 rounded border border-n-border p-0.5"
      role="group"
      aria-label={t("common.language.aria")}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`min-w-[2.25rem] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
            locale === code
              ? "bg-n-gold/15 text-n-gold border border-n-gold-dim rounded-sm"
              : "text-n-muted hover:text-n-text border border-transparent"
          }`}
          aria-pressed={locale === code}
          aria-label={t(`common.language.${code}`)}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
