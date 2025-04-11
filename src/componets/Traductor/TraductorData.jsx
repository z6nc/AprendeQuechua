import { useFetch } from "../../hooks/useFetch";
import { BtnTraductorCopy } from "./btnTraductorCopy";
export function TraductorData() {
  const { getData, data, cargando, texto, error, setTexto } = useFetch();

  const estiloCargandoButtom = cargando
    ? "cursor-not-allowed bg-orange-400/80"
    : "cursor-pointer bg-orange-400";
    
  return (
    <div className="flex flex-col gap-y-4 m-9 text-start">
      <p className="text-gray-500">Español</p>
      <textarea
        className="border border-gray-300 h-32 rounded-lg p-2 "
        maxlength="50"
        placeholder="Maximo 50 Caracteres"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>

      <button
        className={`${estiloCargandoButtom}  text-white rounded-lg  font-bold  my-4 py-4 scale-95 hover:scale-100`}
        onClick={getData}
        disabled={cargando ? true : false}
      >
        {cargando ? "traduciendo..." : "Traducir"}
      </button>
      <p className="text-gray-500"> Quechua</p>
      <div className="relative ">
        <textarea
          className="border border-gray-300 w-full h-32 rounded-lg p-2"
          value={data || error || ""}
          placeholder="Tu texto traducido"
          readOnly
        />
        <BtnTraductorCopy dataCopy={data} />
      </div>
    </div>
  );
}
