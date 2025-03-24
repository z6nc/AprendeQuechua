import { InfoAbout } from "./InfoAbout";
import {abouts} from "../../data/about"
import {DivisiorOla} from "../../ui/DivisorOla"
// datos preguntas 

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
