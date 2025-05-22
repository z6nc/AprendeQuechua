import { useSearchParams } from 'react-router-dom';
import AudioButton from "./audioPlayer";
import { SubTitle } from "../../ui/SubtitleUI";
import { LeccionUno ,LeccionDos ,LeccionTres ,LeccionCuatro,LeccionCinco } from "../../data/Lecciones/index";

// diccionario para convertir el ID
const lecciones = {
  "LeccionUno": LeccionUno,
  "LeccionDos": LeccionDos,
  "LeccionTres": LeccionTres,
  "LeccionCuatro": LeccionCuatro,
  "LeccionCinco": LeccionCinco,
};

export function ListaLeccion() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); 
  const ComponenteLeccion = lecciones[id]; 

  return (
    <section className="flex flex-col gap-y-9 mx-5 lg:mx-0">
      {ComponenteLeccion.map((leccion) => {
        return (
          <article key={leccion.id}>
            <SubTitle
              style="text-white bg-orange-500 p-4 lg:text-4xl text-center"
              titulo={leccion.titulo}
            />
            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
              {leccion.palabra.map((p , idx) => {
                return (
                  <div key={idx} className="grid place-content-center  overflow-hidden text-center bg-gray-300/15 py-7 shadow-btn rounded-lg hover:-translate-y-2">
                    <h4 className="text-3xl font-Titulo font-bold">{p.letra}</h4>
                    <span className="text-gray-400 text-lg pt-2">{p.traducido}</span>
                    <span className="text-gray-400 text-sm pb-2 ">{p.ejemplo}</span>
                    <AudioButton audio={p.sonido || null}/>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}
