import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import CursoPage from "./CursosPage";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CursoPage" element={<CursoPage />} />
    </Routes>
  </Router>
 
  );
}

export default App;
