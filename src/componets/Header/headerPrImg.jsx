import { LinkIU } from "../../ui/linkUI";
import { TitleUI } from "../../ui/titleUI";
export function HeaderPrImg() {
  return (
    <>
        <article className="  flex flex-col justify-center items-center text-center mx-auto gap-y-2">
          <TitleUI title={"Aprender Quechua"}/>
          <LinkIU url="/CursoPage" texto={"Comenzar a Aprender"} textoTraducido={"yachayta qallariy"}  style="my-4 py-4 px-9 2xl:px-20 text-base lg:text-lg " />
        </article>
    </>
  );
}
