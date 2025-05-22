import { LinkIU } from "../../../ui/linkUI";
import { ModalView } from "../../Modal/ModalView";

export function InfoTemas({ Tema }) {
  return (
    <section className=" md:w-3xl 2xl:w-auto mx-auto flex flex-wrap justify-center items-center gap-x-5 cursor-default">
      {Tema.map((t) => {
        return (
          <div
            key={t.id}
            className=" flex flex-col  justify-between items-center   group   text-center lg:text-start pb-6  mt-6  border-b-4   border-gray-500/15 bg-white rounded-b-lg "
          >
            <div className="w-full h-72  relative  ">
              <img
               loading="lazy"
                className="w-full h-full object-cover group-hover:brightness-50  transition-all duration-500  rounded-lg"
                src={t.imgBackground}
                alt={t.tema}
              />
              <img
                 loading="lazy"
                className=" w-full h-full object-cover absolute inset-0 group-hover:-translate-y-8 group-hover:scale-105  transition-all duration-500"
                src={t.imgPersona}
                alt={t.tema}
              />
            </div>

            <div className=" px-4 py-5 w-72 lg:w-[360px] ">
              <h3 className="font-Titulo text-lg lg:text-xl 2xl:text-xl  font-semibold ">
                {t.tema}
              </h3>
              <p className=" text-gray-500/75 py-2 -tracking-tight  ">
                {t.descripcion}
              </p>
            </div>
            {t.disponible ? (
              <LinkIU
                url={t.url}
                style=" text-sm py-2 px-4  "
                texto={"Aprender Ahora"}
                textoTraducido={"kunan yachay"}
              />
            ) : (
               <ModalView  />
            )}
          </div>
        );
      })}
    </section>
  );
}
