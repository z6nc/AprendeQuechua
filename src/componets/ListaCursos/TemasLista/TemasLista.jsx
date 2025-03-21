import { Temas } from "../../../data/Temas";
import { TituloUI } from "../../../ui/tituloUI";
import { InfoTemas } from "./InfoTemas";
import TemasProximos from "../../404Error/TemasProximos";
import MiniBanner from "../../../ui/MiniBanner";

export function TemasLista({ objetoDicultad }) {
  const FiltradoTemas = Temas.filter((t) => t.dificultad === objetoDicultad.id);
  return (
    // agregar linea de imagen de fondo
    <section className={`flex flex-col justify-center text-center mt-14 `}>
      <div className="lg:max-w-7xl lg:mx-auto   ">
        <TituloUI
          titulo={objetoDicultad.titulo}
          style={"text-white bg-orange-500 p-4 lg:text-4xl "}
        />
        {FiltradoTemas.length === 0 ? (
          <TemasProximos />
        ) : (
          <InfoTemas Tema={FiltradoTemas} />
        )}
        <MiniBanner
          ImgAnimal={objetoDicultad.animalReferente}
          alt={objetoDicultad.alt}
          classImg={objetoDicultad.style.classImg}
        />
      </div>
    </section>
  );
}
