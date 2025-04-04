import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderMain } from "../componets/Header/headerMain";
import { TitleUI } from "../ui/titleUI";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import { TimeLine } from "../componets/Historia/TimeLine";
import { HistoriaArticle } from "../componets/Historia/HistoriaArticle";
import { Footer } from "../componets/Footer/Footer";
export default function HistoriaLenguaje() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={
            "https://res.cloudinary.com/dleem7osr/image/upload/v1743613015/historiaFondo_b7vz2r.webp"
          }
          alt={"Imagen de libros en diferentes posiciones "}
          style={"brightness-50"}
        />
        <ImgBannerUI>
          <TitleUI title={"Historia de Quechua "} />
        </ImgBannerUI>
      </HeaderMain>

      <main className="min-h-screen   py-4 mx-4 lg:mx-0">
        <HistoriaArticle/>
        <TimeLine/>
      </main>
      <Footer/>
    </>
  );
}
