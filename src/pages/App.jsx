import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import CursoPage from "./CursosPage";
import HistoriaLenguaje from "./HistoriaLenguaje";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CursoPage" element={<CursoPage />} />
      <Route path="/HistoriaLenguaje" element={<HistoriaLenguaje />} />
    </Routes>
  </Router>
 
  );
}

export default App;
