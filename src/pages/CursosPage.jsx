import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { TemasLista } from "../componets/ListaCursos/TemasLista/TemasLista";
import { dificultades } from "../data/dificultades";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import { HeaderMain } from "../componets/Header/headerMain";
import Footer from "../componets/Footer/Footer";

function CursoPage() {
  return (
    <>
      <HeaderMain>
        <Navbar />
        <HeaderBgImg
          src={"https://res.cloudinary.com/dleem7osr/image/upload/v1742836459/fondoCursos_j43nht.webp"}
          alt={"Imagen referente a la sierra del Perú"}
          style={"brightness-75"}
        />
          <ImgBannerUI/>
      </HeaderMain>
      
       <main className="min-h-screen">
        {
            dificultades.map((dificultad  ) => {
              return(
                <TemasLista key={dificultad.id}  objetoDicultad={dificultad}  />
              )
            })
        }
       </main>
       <Footer/>
    </>
  );
}

export default CursoPage;
