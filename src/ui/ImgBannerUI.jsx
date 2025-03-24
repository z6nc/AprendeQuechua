import { userScrollY } from "../hooks/useScrollY";
import { HeaderPrImg } from "../componets/Header/headerPrImg";

export function ImgBannerUI({children}) {
  const { elementRef, isVisible } = userScrollY();
  const visibleAnimationY = isVisible ? "animate-salto" : "animate-none";
  return (
    <div
      ref={elementRef}
      className="flex flex-col justify-center lg:justify-end items-center h-full  "
    >
       {children}
      <img
        className={`${visibleAnimationY} md:w-xs lg:w-lg`}
        src="/src/assets/llama3.png"
        alt="Una llama con lentes animada"
      />
    </div>
  );
}
