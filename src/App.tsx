
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Academic from "./pages/Academic";
import About from "./pages/About";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Material from "./pages/Material";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Alumni from "./pages/Alumni";
import Speaking from "./pages/Speaking";
import Service from "./pages/Service";
import Leadership from "./pages/Leadership";
import News from "./pages/News";
import Media from "./pages/Media";
import Community from "./pages/Community";
import Workshops from "./pages/Workshops";
import GetInvolved from "./pages/GetInvolved";
import Podcast from "./pages/Podcast";
import Blog from "./pages/Blog";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MediaPodcast from "./pages/MediaPodcast";
import Consulting from "./pages/Consulting";
import Opportunities from "./pages/Opportunities";
import Meeting from "./pages/Meeting";
import Hobbies from "./pages/Hobbies";
import Awards from "./pages/Awards";
import Conferences from "./pages/Conferences";
import StudentResources from "./pages/StudentResources";
import EnergyTransition from "./pages/EnergyTransition";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Syllabus pages
import PPIQ from "./pages/syllabus/PPIQ";
import CPQ2 from "./pages/syllabus/CPQ2";
import PEQ003 from "./pages/syllabus/PEQ003";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
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
              <Route path="/material" element={<Material />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/service" element={<Service />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/news" element={<News />} />
              <Route path="/media" element={<Media />} />
              <Route path="/community" element={<Community />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
              <Route path="/media-podcast" element={<MediaPodcast />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/meeting" element={<Meeting />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/conferences" element={<Conferences />} />
              <Route path="/student-resources" element={<StudentResources />} />
              <Route path="/energy-transition" element={<EnergyTransition />} />
              
              {/* Auth routes */}
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Syllabus routes */}
              <Route path="/syllabus/ppiq" element={<PPIQ />} />
              <Route path="/syllabus/cpq2" element={<CPQ2 />} />
              <Route path="/syllabus/peq003" element={<PEQ003 />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
