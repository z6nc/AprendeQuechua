import { useState, useEffect } from "react";

const listaFrases = {
  es: "El conocimiento es el puente que nos conecta con nuestras raíces y nos lleva hacia el futuro.",
  Qh: "Yachayqa chaka hina, ñuqanchikpa sapsikunawan t'inkichispa, ñawpaqmanpus apaykachkan.",
};

function Frases() {
  const [frases, setFrases] = useState(listaFrases.es);
  const [idioma, setIdioma] = useState("es");

  const customBtnEs = idioma === "es" ? "scale-105 " : " scale-90";
  const customBtnQh = idioma === "Qh" ? "scale-105 " : " scale-90";

  const handleIdioma = (idioma) => {
    setIdioma(idioma);
  };

  useEffect(() => {
    setFrases(listaFrases[idioma]);
  }, [idioma]);

  return (
    <article className="  flex flex-col-reverse  lg:flex-col items-center justify-center h-[80vh] lg:h-screen bg-orange-500 text-center  font-Titulo ">
      <div className="space-x-4 p-4 w-full  inline-flex  justify-center  lg:justify-end">
        <button
          onClick={() => handleIdioma("es")}
          className={`${customBtnEs} customBoton `}
        >
          Es
        </button>
        <button
          onClick={() => handleIdioma("Qh")}
          className={`${customBtnQh} customBoton`}
        >
          Qh
        </button>
      </div>
      <div className="flex flex-1 relative  items-center  max-w-4xl mx-auto px-4 lg:px-0">
        <h1 className=" text-white font-black text-3xl lg:text-5xl">
          {frases}
        </h1>
      </div>
      
      
    </article>
  );
}
export default Frases;
