import { TituloUI } from "../../ui/tituloUI";

export function InfoAbout({ abouts }) {
  return (
    <div className={`flex   flex-wrap justify-center items-center max-w-5xl mx-auto gap-x-4 ${abouts.estilo}`}>
      <div className=" lg:w-xl text-center lg:text-start flex flex-col space-y-4 pt-7 px-3.5 lg:px-0  lg:pt-0">
        <TituloUI titulo={abouts.titulo} style={"text-orange-400 lg:text-5xl "} />
        <p >
          {abouts.contenido}
        </p>
        <div className="relative mx-auto ">
          <p className="font-bold pr-7  "> ¡Únete y aprende con nosotros!</p>
          <img
            className="w-auto -z-20  absolute  right-0 top-5"
            src="/src/assets/subrayados.png"
            alt=""
          />
        </div>
      </div>

      <div className=" w-80 lg:w-80 h-auto  rounded-full overflow-hidden">
        <img
          className="w-full  h-full object-center object-cover "
          src={abouts.imgAbout}
          alt={abouts.alt}
        />
      </div>
    </div>
  );
}
