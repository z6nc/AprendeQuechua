import { BtnUI } from "../../ui/btnUI";
import { userScrollY } from "../../hooks/useScrollY";
import {FooterOlas} from "../../ui/DivisorOla"
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
        src={"https://res.cloudinary.com/dleem7osr/image/upload/v1742836459/SolFiguraDos_mr5uc2.webp"}
        clase={`${visibleAnimationX} right-0`}
        alt={"imagen de un sol"}
      />
      <ImagenFlotante
        src={"https://res.cloudinary.com/dleem7osr/image/upload/v1742836459/condorAndinoDos_grr0jl.webp"}
        clase={`${visibleAnimationAve} left-0 top-0`}
        alt={"imagen de un condor andino"}
      />

      <div className="relative flex flex-col  justify-center items-center w-full ">
        <div className={`${visibleAnimationY}    delay-500  z-10 `}>
          <img
            className="w-50 md:w-64 lg:w-72 "
            src="https://res.cloudinary.com/dleem7osr/image/upload/v1742836459/ZorroDos_tyrh0w.webp"
            alt="imagen de un zorro señalando la parte de arriba"
          />
        </div>
            <FooterOlas/>
      </div>
    </footer>
  );
}
export default Footer;
