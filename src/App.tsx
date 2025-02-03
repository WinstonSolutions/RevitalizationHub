// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import PropertyOwnerForm from "./pages/PropertyOwnerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/owners" element={<PropertyOwnerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
