import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import SMM2apiPage from "./pages/projects/SMM2apiPage";
import VistoPage from "./pages/projects/VistoPage";
import F1apiPage from "./pages/projects/F1apiPage";
import WarmteStadPage from "./pages/projects/WarmteStadPage";
import RetroRushPage from "./pages/projects/RetroRushPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop /> {/* Scrollt direct naar boven bij routewijziging */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects/retro-rush" element={<RetroRushPage />} />
          <Route path="/projects/smm2_api" element={<SMM2apiPage />} />
          <Route path="/projects/visto" element={<VistoPage />} />
          <Route path="/projects/f1_api" element={<F1apiPage />} />
          <Route path="/projects/warmte-stad" element={<WarmteStadPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
