import { useState } from "react"
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

      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trimmedText })
      });


      if (!response.ok) {
        throw new Error("Respuesta inválida del servidor");
      }
      const data = await response.json();
      setData(data.translation);

    } catch (e) {
      setError(`No se puede traducir en este momento: ${e.message}`);
      throw error;
    } finally {
      setCargando(false);
    }

  };

  return {
    getData, data, cargando, texto, error, setTexto
  }

}