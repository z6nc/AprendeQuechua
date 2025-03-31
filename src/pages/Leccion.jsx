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
            "https://cdn.qwenlm.ai/output/5613e1ee-1dd7-41c6-bb62-388da33cafcc/t2i/d4fc111b-fb8f-4916-876c-76576116f69a/3a8ca00e-cd5d-44ca-8199-f89e377dccaa.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiNTYxM2UxZWUtMWRkNy00MWM2LWJiNjItMzg4ZGEzM2NhZmNjIiwicmVzb3VyY2VfaWQiOiIzYThjYTAwZS1jZDVkLTQ0Y2EtODE5OS1mODllMzc3ZGNjYWEiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.cMi7Ym1ZZK_X9gSAfZagE4DerQG-p31hOVlAp7fRIGE"
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
