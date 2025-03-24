import { InfoAbout } from "./InfoAbout";
import {DivisiorOla} from "../../ui/DivisorOla"
// datos preguntas 
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

      <DivisiorOla style={"bottom-0 "}/>
   
    </section>
  );
}

export default About;
