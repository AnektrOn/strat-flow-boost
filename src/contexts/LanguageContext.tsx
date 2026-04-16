import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/i18n/translations";

const STORAGE_KEY = "nomos-locale";

function loadLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {
    /* ignore */
  }
  return "fr";
}

type Translations = Record<string, any>;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tr: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(loadLocale);

  useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const tr = translations[locale];
    const t = (key: string): string => {
      const value = getNested(tr as unknown as Record<string, unknown>, key);
      return typeof value === "string" ? value : key;
    };
    return { locale, setLocale, t, tr };
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
