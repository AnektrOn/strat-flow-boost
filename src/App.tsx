import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { EmailDialogProvider } from "@/contexts/EmailDialogContext";
import FloatingMetaphysicBubble from "./components/FloatingMetaphysicBubble";
import { SynapseLayer } from "./components/SynapseLayer";
import { ScrollToTop } from "./components/ScrollToTop";
import OnboardingPage from "./pages/OnboardingPage";
import NomosPage from "./pages/NomosPage";
import AscensionPage from "./pages/AscensionPage";
import MetaphysiquePage from "./pages/MetaphysiquePage";
import AegisPage from "./pages/AegisPage";
import CaseStudiesIndexPage from "./pages/CaseStudiesIndexPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <EmailDialogProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <ScrollToTop />
        <SynapseLayer />
        <FloatingMetaphysicBubble />
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/nomos" element={<NomosPage />} />
          <Route path="/ascension" element={<AscensionPage />} />
          <Route path="/metaphysique" element={<MetaphysiquePage />} />
          <Route path="/aegis" element={<AegisPage />} />
          <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/demo/synapse-hero" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </EmailDialogProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
