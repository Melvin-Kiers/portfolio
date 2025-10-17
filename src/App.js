import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/work/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
