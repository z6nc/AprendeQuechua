import { BtnUI } from "../../ui/btnUI";
export function HeaderPrImg() {
 
  return (
    <>
        <article className=" h-[70vh] mx-auto text-white flex flex-col justify-center items-center text-center ">
          <h2 className="text-6xl  2xl:text-7xl font-Titulo font-black ">
            Aprende Quechua
          </h2>
          <p className=" w-72 lg:w-[600px] py-4  text-base lg:text-lg -tracking-tight  ">
            Descubre la riqueza del Perú y aprende quechua de forma sencilla e
            interactiva, preservando su legado para el futuro.
          </p>
          <BtnUI url="/CursoPage" style=" my-4 py-4 px-9 lg:px-20 text-base lg:text-lg shadow-4xl rounded-lg" />

        </article>
    </>
  );
}
