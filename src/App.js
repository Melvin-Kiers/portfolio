import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import RetroRushPage from "./pages/projects/RetroRushPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects/retro-rush" element={<RetroRushPage />} />
        </Routes>
      </main>
    </>
  );
}


export default App;
