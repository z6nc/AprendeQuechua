import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderPrImg } from "../componets/Header/headerPrImg";
import { HeaderMain } from "../componets/Header/headerMain";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import Frases from "../componets/Frases/Frases";
import { PreguntasFaqs } from "../componets/Preguntas/preguntas";
import Footer from "../componets/Footer/Footer";
import About from "../componets/About/About";

function Home() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={"/src/assets/FondoSierra.webp"}
          alt={"Imagen referente a la sierra del Perú"}
          style={"brightness-50"}
        />
        <ImgBannerUI>
        < HeaderPrImg />
        </ImgBannerUI>
      </HeaderMain>
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
