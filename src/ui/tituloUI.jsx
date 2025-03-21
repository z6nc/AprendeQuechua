export function TituloUI({ titulo, style }) {
  return (
    <h2 className={`text-3xl  mx-3  font-Titulo font-black ${style} `}>
      {titulo}
    </h2>
  );
}


