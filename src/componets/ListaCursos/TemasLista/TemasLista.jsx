import { Temas } from "../../../data/Temas";
import { SubTitle } from "../../../ui/SubtitleUI";
import { InfoTemas } from "./InfoTemas";

export function TemasLista() {
  return (
    <section className={`flex flex-col justify-center text-center mt-14 `}>
      <div className="lg:max-w-7xl lg:mx-auto   ">
        <SubTitle
          titulo="Temas de estudio  "
          style={"text-white bg-orange-500 p-4 lg:text-4xl "}
        />
          <InfoTemas Tema={Temas} />     
      </div>
    </section>
  );
}
