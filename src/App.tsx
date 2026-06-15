import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { EmailDialogProvider } from "@/contexts/EmailDialogContext";
import FloatingMetaphysicBubble from "./components/FloatingMetaphysicBubble";
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
        <FloatingMetaphysicBubble />
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/nomos" element={<NomosPage />} />
          <Route path="/ascension" element={<AscensionPage />} />
          <Route path="/metaphysique" element={<MetaphysiquePage />} />
          <Route path="/aegis" element={<AegisPage />} />
          <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </EmailDialogProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
