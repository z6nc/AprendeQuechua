import { historias } from "../../data/historia";
import { SubTitle } from "../../ui/SubtitleUI";
import { BtnUI } from "../../ui/btnUI";
export function TimeLine() {
  return (
    <section className="flex flex-col justify-center  gap-12 lg:gap-20 ">
      {historias.map((historia) => {
        return (
          <article
            key={historia.id}
            className={`flex flex-wrap justify-center items-center max-w-5xl mx-auto gap-x-4 border border-gray-300 p-4 rounded-lg  bg-gray-200/20 ${historia.estilos.estiloContainer}`}
          >
            <div className={`lg:w-xl text-center lg:${historia.estilos.estiloTexto} flex flex-col space-y-4 pt-7 px-3.5 lg:px-0  lg:pt-0`}>
              <span className=" text-gray-400   ">{historia.periodo}</span>
              <SubTitle
                titulo={historia.titulo}
                style={"text-orange-400 lg:text-4xl "}
              />
              <p className="text-gray-500">{historia.texto}</p>
               <BtnUI texto={"Mira el vídeo"} textoTraducido={"videota qhaway"} url={"/"} style={"text-white mx-auto py-2 px-4"}  />
            </div>

            <div className=" w-80 lg:w-80 h-auto  overflow-hidden">
              <img
                className="w-full  h-full object-center object-cover "
                loading="lazy"
                src={historia.imagenUrl}
                alt={historia.alt}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}
