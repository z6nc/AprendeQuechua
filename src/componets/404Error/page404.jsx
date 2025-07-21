import { ImgBannerUI } from "../../ui/ImgBannerUI";
import { BtnUI } from "../../ui/btnUI";
export function Page404() {
  return (
    <section className="flex flex-col items-center justify-center h-[100dvh] bg-gray-100">
      <ImgBannerUI>
        <h1 className="text-4xl font-black text-orange-500 mb-4 font-Titulo text-center">
          404 - Pagina No Encontrada
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          La página que estás buscando no existe.
        </p>
        <BtnUI
          texto="Volver al Inicio"
          textoTraducido="Ñawi qhawayta"
          url="/"
          style="px-6 py-3"
        />
      </ImgBannerUI>
    </section>
  );
}
