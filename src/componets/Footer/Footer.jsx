import { BtnUI } from "../../ui/btnUI";
import { userScrollY } from "../../hooks/useScrollY";
import ImagenFlotante from "../../ui/ImagenFlotante";

function Footer() {
  const {elementRef , isVisible}  =  userScrollY();
  const visibleAnimationY = isVisible ? "animate-salto" : "animate-none";
  const visibleAnimationX = isVisible ? "animate-moveX" : "animate-none";
  const visibleAnimationAve = isVisible ? "animate-moveAve" : "animate-none";

  return (
    <footer
      ref={elementRef}
      className="relative flex flex-col justify-center  md:gap-y-15 lg:gap-y-0   text-center    overflow-hidden"
    >
      <div className="">
        <p
          className={` md:w-xl lg:w-2xl mx-auto  text-3xl md:text-4xl lg:text-5xl font-Titulo font-black text-orange-400  mb-5 `}
        >
          aprende con nosotros comienza ahora
        </p>
        <BtnUI
          style={
            "mx-auto py-2 px-3  lg:py-3 lg:px-4 rounded-lg shadow-4xl text-white cursor-pointer"
          }
        />
      </div>

      <ImagenFlotante
        src={"/src/assets/SolFiguraDos.png"}
        clase={`${visibleAnimationX} right-0`}
        alt={"imagen de un sol"}
      />
      <ImagenFlotante
        src={"/src/assets/condorAndinoDos.png"}
        clase={`${visibleAnimationAve} left-0 top-0`}
        alt={"imagen de un condor andino"}
      />

      <div className="relative flex flex-col  justify-center items-center w-full ">
        <div className={`${visibleAnimationY}    delay-500  z-10 `}>
          <img
            className="w-50 md:w-64 lg:w-72 "
            src="/src/assets/ZorroDos.png"
            alt="imagen de un zorro señalando la parte de arriba"
          />
        </div>

        <div className="absolute  w-full -z-10  bottom-0  ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff6900"
              fillOpacity="1"
              d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,224C672,267,768,277,864,240C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
