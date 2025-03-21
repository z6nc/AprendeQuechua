import { userScrollY } from "../hooks/useScrollY";
export function ImgBannerUI() {
   const {elementRef , isVisible} =  userScrollY();
   const visibleAnimationY = isVisible ? "animate-salto" : "animate-none";
  return (
    <div ref={elementRef} className="flex flex-col justify-end items-center h-full ">
      <img className={ `${visibleAnimationY} w-xl`} src="/src/assets/llama3.png" alt="Una llama con lentes animada" />
    </div>
  );
}
