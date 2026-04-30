import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingMetaphysicBubble from "./components/FloatingMetaphysicBubble";
import OnboardingPage from "./pages/OnboardingPage";
import NomosPage from "./pages/NomosPage";
import AscensionPage from "./pages/AscensionPage";
import MetaphysiquePage from "./pages/MetaphysiquePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
