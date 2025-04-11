import { useState } from "react"
export const useFetch = ()=>{
    const [data, setData] = useState(null);
    const [texto, setTexto] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    
  const getData = async () => {
    setCargando(true);
    setError(null);
    setData(null);
   
      try {
        const trimmedText = texto.trim();

        if (trimmedText.length === 0) {
          setError("El texto no puede estar vacío");
          return;
        }
        if (trimmedText.length > 50) {
          setError("Demasiados caracteres (máx 50)");
          return;
        }

        const query = encodeURIComponent(trimmedText);

        const url = `https://magicloops.dev/api/loop/241c24a5-da48-4dbb-b0fe-1248dc2d757f/run?text=${query}`;
        const response = await fetch(url);
          if (!response.ok) {
            setError("No se pudo hacer la petición");
            return;
          }
        const datos = await response.json();
        setData(datos.translation);
     
        } catch (e) {
          setError(`No se puede traducir en este momento: ${e.message}`);
        } finally {
          setCargando(false);
        }

  };

    return {
      getData ,  data  , cargando , texto  ,error , setTexto
    }

}