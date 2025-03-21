import { Navbar } from "../componets/Header/Navbar/navbar";
import { HeaderBgImg } from "../componets/Header/headerBgImg";
import { TemasLista } from "../componets/ListaCursos/TemasLista/TemasLista";
import { dificultades } from "../data/dificultades";
import { ImgBannerUI } from "../ui/ImgBannerUI";
import Footer from "../componets/Footer/Footer";
function CursoPage() {
  return (
    <>
      <header className="relative h-[100vh]  overflow-hidden text-center text-white ">
        <Navbar />
        <HeaderBgImg
          src={"/src/assets/fondoCursos.webp"}
          alt={"Imagen referente a la sierra del Perú"}
          style={"brightness-75"}
        />
          <ImgBannerUI/>
      </header>
      
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
