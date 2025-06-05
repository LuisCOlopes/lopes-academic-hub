
import { Toaster } from "@/components/ui/sonner"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Index from "./pages/Index"
import About from "./pages/About"
import Academic from "./pages/Academic"
import Research from "./pages/Research"
import Publications from "./pages/Publications"
import Teaching from "./pages/Teaching"
import Service from "./pages/Service"
import Leadership from "./pages/Leadership"
import Awards from "./pages/Awards"
import Speaking from "./pages/Speaking"
import Media from "./pages/Media"
import Blog from "./pages/Blog"
import Podcast from "./pages/Podcast"
import News from "./pages/News"
import Consulting from "./pages/Consulting"
import Workshops from "./pages/Workshops"
import Material from "./pages/Material"
import Team from "./pages/Team"
import Alumni from "./pages/Alumni"
import Opportunities from "./pages/Opportunities"
import StudentResources from "./pages/StudentResources"
import Projects from "./pages/Projects"
import Conferences from "./pages/Conferences"
import Community from "./pages/Community"
import GetInvolved from "./pages/GetInvolved"
import Hobbies from "./pages/Hobbies"
import EnergyTransition from "./pages/EnergyTransition"
import Contact from "./pages/Contact"
import Meeting from "./pages/Meeting"
import SpeakingWorkshops from "./pages/SpeakingWorkshops"
import MediaPodcast from "./pages/MediaPodcast"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/service" element={<Service />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/news" element={<News />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/material" element={<Material />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/student-resources" element={<StudentResources />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/community" element={<Community />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/energy-transition" element={<EnergyTransition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
          <Route path="/media-podcast" element={<MediaPodcast />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  )
}

export default App
