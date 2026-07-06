import { CinematicHero } from "@/components/CinematicHero";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <CinematicHero
      title={t("nomos.hero.title")}
      titleAccent={t("nomos.hero.titleAccent")}
      intro={t("nomos.hero.subtitle")}
      promise={t("nomos.hero.promise")}
      promiseClass="text-n-teal"
      cta={t("nomos.hero.cta")}
      protocol="nomos"
      footnote={t("nomos.hero.footnote")}
      accent="teal"
    />
  );
};

export default HeroSection;
