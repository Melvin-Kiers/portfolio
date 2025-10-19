import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RetroRushPage from "./pages/projects/RetroRushPage";
import SMM2apiPage from "./pages/projects/SMM2apiPage";
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
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
