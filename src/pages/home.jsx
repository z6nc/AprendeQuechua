import About from "../componets/About/About";
import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderPrImg } from "../componets/Header/headerPrImg";
import { HeaderMain } from "../componets/Header/headerMain";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import Frases from "../componets/Frases/Frases";
import { PreguntasFaqs } from "../componets/Preguntas/preguntas";
import BannerFooter from "../componets/Footer/BannerFooter";

function Home() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={"https://res.cloudinary.com/dleem7osr/image/upload/v1742836458/FondoSierra_po2q8n.webp"}
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
      <BannerFooter />
    </>
  );
}

export default Home;
