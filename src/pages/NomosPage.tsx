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

const NomosPage = () => {
  return (
    <div className="overflow-x-hidden pb-24 sm:pb-0">
      <Header mode="nomos" />
      <main>
        <HeroSection />
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
        <section className="cross-link">
          <div className="container-nomos narrow">
            <p>Vous pensez être plutôt en level up qu&apos;en crise ?</p>
            <Link to="/ascension">Découvrir le Protocole ASCENSION →</Link>
          </div>
        </section>
      </main>
      <Footer variant="nomos" />
      <MobileCTABar />
    </div>
  );
};

export default NomosPage;
