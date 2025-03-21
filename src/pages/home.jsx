import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderPrImg } from "../componets/Header/headerPrImg";
import Frases from "../componets/Frases/Frases";
import { PreguntasFaqs } from "../componets/Preguntas/preguntas";
import Footer from "../componets/Footer/Footer";
import About from "../componets/About/About";

function Home() {
  return (
    <>
      <header className="relative h-screen  overflow-hidden ">
        <Navbar />
        <HeaderBgImg src={"/src/assets/FondoSierra.webp"} alt={"Imagen referente a la sierra del Perú"} style={"brightness-50"}  />
        <HeaderPrImg />
      </header>
      <main className="min-h-screen">
        <About />
        <Frases />
        <PreguntasFaqs />
      </main>
      <Footer />
    </>
  );
}

export default Home;
