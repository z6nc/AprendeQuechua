import { InfoAbout } from "./InfoAbout";
const abouts = [
  {
    titulo: "¿Quienes Somos ?",
    contenido:
      "Somos un equipo comprometido con la preservación y enseñanza del quechua , una lengua ancestral que forma parte de la identidad cultural del Perú.",
    imgAbout: "/src/assets/PersonasAprendiendo.webp",
    alt: "Personas Aprendiendo",
    estilo: "flex-row",
  },
  {
    titulo: "¿Que buscamos?",
    contenido:
      "Nosotros buscamos  que el quechua sea una lengua viva y que sea transmitida de generación en generación.",
    imgAbout: "/src/assets/PersonasViajando.webp",
    alt: "Personas Corriendo",
    estilo: "flex-row-reverse",
  },
];
function About() {
  return (
    <section className=" relative flex flex-col justify-center items-center text-center pt-9  lg:pb-24">
      {abouts.map((abouts, index) => (
        <InfoAbout key={index} abouts={abouts} />
      ))}
      <div className="w-full  absolute bottom-0 -z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff6900"
            fillOpacity="1" // ← Corregido aquí
            d="M0,128L48,160C96,192,192,256,288,261.3C384,267,480,213,576,202.7C672,192,768,224,864,202.7C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
