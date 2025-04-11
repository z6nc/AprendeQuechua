import { useSearchParams } from 'react-router-dom';
import AudioButton from "./audioPlayer";
import { SubTitle } from "../../ui/SubtitleUI";
import { LeccionUno ,LeccionDos ,LeccionTres } from "../../data/Lecciones/index";

// diccionario para convertir el ID
const lecciones = {
  "LeccionUno": LeccionUno,
  "LeccionDos": LeccionDos,
  "LeccionTres": LeccionTres,
};

export function ListaLeccion() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // devuele un string
  const ComponenteLeccion = lecciones[id]; // lo cambiamod de string a array de objeto

  return (
    <section className="flex flex-col gap-y-9 mx-5 lg:mx-0">
      {ComponenteLeccion.map((leccion) => {
        return (
          <article key={leccion.id}>
            <SubTitle
              style="text-white bg-orange-500 p-4 lg:text-4xl text-center"
              titulo={leccion.titulo}
            />
            <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
              {leccion.palabra.map((p , idx) => {
                return (
                  <div key={idx} className="grid place-content-center  text-center bg-gray-300/15 py-7 shadow-btn rounded-lg hover:-translate-y-2">
                    <h4 className="text-4xl font-Titulo font-bold">{p.letra}</h4>
                    <span className="text-gray-400 text-lg py-2">{p.traducido}</span>
                    <AudioButton />
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
