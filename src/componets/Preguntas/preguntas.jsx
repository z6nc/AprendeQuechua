import { TituloUI } from "../../ui/tituloUI";
import { PreguntasFrecuentes } from "../../data/preguntas";
import { IconArrowDown } from "../../ui/IconArrow";
import { DivisiorOla } from "../../ui/DivisorOla";
import { useState } from "react";

export function PreguntasFaqs() {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(null);

  function handleClick(index) {
    if (mostrarRespuesta === index) {
      setMostrarRespuesta(null);
    } else {
      setMostrarRespuesta(index);
    }
  }

  return (
    //  verificar en mobile como se ve el padding
    <article className=" relative  lg:h-screen flex flex-col justify-center items-center   ">
      
       <DivisiorOla />

      <div className="flex flex-col px-4 lg:px-0     py-24  lg:max-w-2xl  mx-auto gap-y-5 ">
        <TituloUI titulo="Preguntas Frecuentes" style={"text-orange-400 lg:text-5xl text-center  "} />
        {PreguntasFrecuentes.map((pregunta, index) => {
          return (
            <div
              key={index}
              className=" w-80 mx-auto lg:w-xl p-4 rounded-lg bg-white border-b-4  border-gray-500/15 "
            >
              <button
                className=" inline-flex justify-between w-full  "
                onClick={() => handleClick(index)}
              >
                <p className="text-base text-gray-700 font-semibold ">
                  {pregunta.Preguntas}
                </p>
                {mostrarRespuesta === index ? (
                  <IconArrowDown style={"rotate-180 size-5 cursor-pointer"} />
                ) : (
                  <IconArrowDown style={" size-5 cursor-pointer "} />
                )}
              </button>
              {mostrarRespuesta === index && (
                <div className="px-2 py-4    ">
                  <p className="text-gray-500 text-wrap">{pregunta.Respuestas}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
