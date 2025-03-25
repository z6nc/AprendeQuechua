import { BtnUI } from "../../ui/btnUI";
import { TitleUI } from "../../ui/titleUI";
export function HeaderPrImg() {
  return (
    <>
        <article className="  flex flex-col justify-center items-center text-center mx-auto gap-y-2">
          <TitleUI title={"Aprender Quechua"}/>
          <BtnUI url="/CursoPage" style=" my-4 py-4 px-9 lg:px-20 text-base lg:text-lg shadow-4xl rounded-lg" />
        </article>
    </>
  );
}
