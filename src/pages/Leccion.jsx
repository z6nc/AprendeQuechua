import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { HeaderMain } from "../componets/Header/headerMain";
import { TitleUI } from "../ui/titleUI";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import { Footer } from "../componets/Footer/Footer";
import { ListaLeccion } from "../componets/lecciones/leccion";

function Leccion() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={
            "https://res.cloudinary.com/dleem7osr/image/upload/v1743613139/FondoLecciones_jedzry.webp"
          }
          alt={"Imagen de libros en diferentes posiciones "}
          style={"brightness-50"}
        />
        <ImgBannerUI>
          <TitleUI title={"Primeros Pasos en Quechua"} />
        </ImgBannerUI>
      </HeaderMain>

      <main className="lg:max-w-4xl min-h-screen    mx-auto  py-4 ">
          <ListaLeccion/>
      </main>
      <Footer />
    </>
  );
}
export default Leccion;
