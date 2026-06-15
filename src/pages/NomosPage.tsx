import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SymptomsSection from "@/components/SymptomsSection";
import MechanismSection from "@/components/MechanismSection";
import SufferingSection from "@/components/SufferingSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProtocolSection from "@/components/ProtocolSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FutureSection from "@/components/FutureSection";
import FounderSection from "@/components/FounderSection";
import ROISection from "@/components/ROISection";
import GuaranteeSection from "@/components/GuaranteeSection";
import QualifySection from "@/components/QualifySection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import PageSideNavLayout from "@/components/PageSideNavLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const NomosPage = () => {
  const { t } = useLanguage();
  usePageMeta("nomos");

  return (
    <div className="overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="nomos" />
      <main>
        <PageSideNavLayout page="nomos" hero={<HeroSection />}>
          <SymptomsSection />
          <MechanismSection />
          <SufferingSection />
          <SolutionsSection />
          <ProtocolSection />
          <TestimonialsSection />
          <FutureSection />
          <FounderSection />
          <ROISection />
          <GuaranteeSection variant="nomos" />
          <QualifySection variant="nomos" />
          <FAQSection />
          <CTAFinalSection />
        </PageSideNavLayout>
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>{t("common.crossLink.nomos.prompt")}</p>
            <Link to="/ascension">{t("common.crossLink.nomos.link")}</Link>
          </div>
        </section>
      </main>
      <Footer variant="nomos" />
      <MobileCTABar />
    </div>
  );
};

export default NomosPage;
