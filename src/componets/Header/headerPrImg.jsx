import { BtnUI } from "../../ui/btnUI";
export function HeaderPrImg() {
  return (
    <>
        <article className="  flex flex-col justify-center items-center text-center mx-auto gap-y-2">
          <h1 className="text-4xl md:text-4xl  2xl:text-6xl font-Titulo font-black  py-4  px-4 border border-white backdrop-blur-xl">APRENDER QUECHUA </h1>
          <BtnUI url="/CursoPage" style=" my-4 py-4 px-9 lg:px-20 text-base lg:text-lg shadow-4xl rounded-lg" />
        </article>
    </>
  );
}
