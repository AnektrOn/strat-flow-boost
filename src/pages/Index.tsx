import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SymptomsSection from "@/components/SymptomsSection";
import MechanismSection from "@/components/MechanismSection";
import SufferingSection from "@/components/SufferingSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProtocolSection from "@/components/ProtocolSection";

import FutureSection from "@/components/FutureSection";
import FounderSection from "@/components/FounderSection";
import ROISection from "@/components/ROISection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SymptomsSection />
        <MechanismSection />
        <SufferingSection />
        <SolutionsSection />
        <ProtocolSection />
        
        <FutureSection />
        <FounderSection />
        <ROISection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default Index;
