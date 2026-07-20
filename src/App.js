import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Projectspage from "./pages/Projectspage";
import ContactPage from "./pages/ContactPage";
import SMM2apiPage from "./pages/projects/SMM2apiPage";
import StageConvidentPage from "./pages/projects/StageConvidentPage";
import VistoPage from "./pages/projects/VistoPage";
import F1apiPage from "./pages/projects/F1apiPage";
import WarmteStadPage from "./pages/projects/WarmteStadPage";
import MarioBrosInfographicPage from "./pages/projects/MarioBrosInfographicPage";
import RetroRushPage from "./pages/projects/RetroRushPage";
import GroenReisAvontuurPage from "./pages/projects/GroenReisAvontuur";
import MarioGamePage from "./pages/projects/MarioGameNL";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/projects/mario-game-nl" element={<MarioGamePage />} />
          <Route path="/projects/smm2_api" element={<SMM2apiPage />} />
          <Route path="/projects/stage-convident" element={<StageConvidentPage />} />  
          <Route path="/projects/visto" element={<VistoPage />} />
          <Route path="/projects/f1_api" element={<F1apiPage />} />
          <Route path="/projects/warmte-stad" element={<WarmteStadPage />} />
          <Route path="/projects/mario-bros-infographic" element={<MarioBrosInfographicPage />} />
          <Route path="/projects/retro-rush" element={<RetroRushPage />} />
          <Route path="/projects/groenreis-avontuur" element={<GroenReisAvontuurPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
