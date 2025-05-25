
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Academic from "./pages/Academic";
import About from "./pages/About";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Awards from "./pages/Awards";
import Service from "./pages/Service";
import Leadership from "./pages/Leadership";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Opportunities from "./pages/Opportunities";
import EnergyTransition from "./pages/EnergyTransition";
import Meeting from "./pages/Meeting";
import StudentResources from "./pages/StudentResources";
import Alumni from "./pages/Alumni";
import Podcast from "./pages/Podcast";
import News from "./pages/News";
import Media from "./pages/Media";
import Blog from "./pages/Blog";
import Hobbies from "./pages/Hobbies";
import GetInvolved from "./pages/GetInvolved";
import Speaking from "./pages/Speaking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/service" element={<Service />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/energy-transition" element={<EnergyTransition />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/student-resources" element={<StudentResources />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/news" element={<News />} />
            <Route path="/media" element={<Media />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/speaking" element={<Speaking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
