import { useLanguage } from "@/contexts/LanguageContext";

type FooterVariant = "nomos" | "ascension" | "hub" | "metaphysique" | "aegis";

const Footer = ({ variant = "nomos" }: { variant?: FooterVariant }) => {
  const { t } = useLanguage();
  return (
    <footer className="py-10 border-t border-n-border">
      <div className="container-nomos flex flex-col items-center text-center">
        <p className="text-xs tracking-[0.15em] uppercase text-n-muted mb-2">
          {t(`common.footer.${variant}.brand`)}
        </p>
        <p className="text-xs text-n-faint">{t(`common.footer.${variant}.meta`)}</p>
      </div>
    </footer>
  );
};

export default Footer;
