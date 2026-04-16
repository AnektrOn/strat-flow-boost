import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MirrorSection from "@/components/MirrorSection";
import TaxeSection from "@/components/TaxeSection";
import FalseSolutionsSection from "@/components/FalseSolutionsSection";
import SolutionSection from "@/components/SolutionSection";
import ProofsSection from "@/components/ProofsSection";
import ProjectionSection from "@/components/ProjectionSection";
import OfferSection from "@/components/OfferSection";
import QualificationSection from "@/components/QualificationSection";
import CTAFormSection from "@/components/CTAFormSection";
import FooterSection from "@/components/FooterSection";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => {
  return (
    <div className="grain-overlay overflow-x-hidden">
      <Header />
      <main className="pt-[60px]">
        <HeroSection />
        <MirrorSection />
        <TaxeSection />
        <FalseSolutionsSection />
        <SolutionSection />
        <ProofsSection />
        <ProjectionSection />
        <OfferSection />
        <QualificationSection />
        <CTAFormSection />
      </main>
      <FooterSection />
      <MobileCTABar />
    </div>
  );
};

export default Index;
