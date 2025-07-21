import { BtnUI } from "../../ui/btnUI";
export function Leccion404() {
  return (
    <section className="flex flex-col items-center justify-center h-[100dvh] ">
        <h1 className="text-4xl font-black text-orange-500 mb-4 font-Titulo text-center">
          404 - Lección No Encontrada
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          La Lección que estás buscando no existe.
        </p>
        <BtnUI
          texto="Volver a lecciones"
          textoTraducido="Ñawi qhawayta"
          url="/CursoPage"
          style="px-6 py-3"
        />
    </section>
  );
}
