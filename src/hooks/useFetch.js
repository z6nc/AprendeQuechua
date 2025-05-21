import { useState } from "react";

export const useFetch = () => {
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
      
         
      const response = await fetch('/api/translate', {  // ✅ Cambiado aquí
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "text": trimmedText }) // mejor que usar encodeURIComponent
      });

      const datos = await response.json();
      setData(datos.translation); // Asegúrate de que "translation" existe en la respuesta
    } catch (error) {
      setError("No se puede traducir en este momento");
      console.error(error)
    } finally {
      setCargando(false);
    }
  };

  return {
    getData,
    data,
    cargando,
    texto,
    error,
    setTexto
  };
};



