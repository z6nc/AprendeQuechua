import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import CursoPage from "./CursosPage";
import HistoriaLenguaje from "./HistoriaLenguaje";
import Leccion from "./Leccion";
import { Page404 } from "../componets/404Error/page404";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CursoPage" element={<CursoPage />} />
      <Route path="/HistoriaLenguaje" element={<HistoriaLenguaje />} />
      <Route path="/Leccion" element={<Leccion />} />

   <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
 
  );
}

export default App;
