import { BtnUI } from "../../../ui/btnUI";
import { IconArrowLeft, IconArrowRight } from "../../../ui/IconArrow";
import { useScrollX } from "../../../hooks/useScrollX";

export function InfoTemas({ Tema }) {
  const { scrollRef, postLeft, postEnd, scrollLeft, scrollRight } = useScrollX();
  const stop = postLeft <= 0 ? "cursor-not-allowed" : "cursor-pointer";
  const stopRigth = postEnd === 0 ? "cursor-not-allowed" : "cursor-pointer";

 
  return (
    <>
      <section className=" md:w-3xl 2xl:w-auto mx-auto  md:h-80 lg:h-auto py-2">
        <div
          ref={scrollRef}
          className="w-full  flex   overflow-x-auto py-4 px-6 gap-10  [&::-webkit-scrollbar]:hidden  "
        >
          {Tema.map((t) => {
            return (
              <div
                key={t.id}
                className="w-full flex flex-col  justify-between items-center   group   text-center lg:text-start pb-6  mt-6  border-b-4   border-gray-500/15 bg-white rounded-b-lg "
              >
                <div className="w-full h-72  relative   ">
                  <img
                    className="w-full h-full object-cover group-hover:brightness-50  transition-all duration-500 "
                    src={t.imgBackground}
                    alt={t.tema}
                  />
                  <img
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
                <BtnUI
                  url={t.url}
                  style=" text-sm py-2 px-4  shadow-4xl "
                  texto={"Aprende ahora"}
                  textoTraducido={"kunan yachay"}
                />
              </div>
            );
          })}
        </div>
        
        <div className=" hidden lg:inline-flex space-x-9 mb-4 ">
          <button
            disabled={postLeft <= 0}
            className={`${stop} customBoton `}
            onClick={scrollLeft}
          >
            <IconArrowLeft style="w-5 h-5  text-black/60" />
          </button>

          <button
            disabled={postEnd === 0}
            className={`${stopRigth} customBoton`}
            onClick={scrollRight}
          >
            <IconArrowRight style="w-5 h-5  text-black/60" />
          </button>
        </div>
      </section>
    </>
  );
}
