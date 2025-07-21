import { userScrollY } from "../hooks/useScrollY";

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
        className={`${visibleAnimationY} md:w-xs lg:w-[400px] 2xl:w-lg`}
        src="https://res.cloudinary.com/dleem7osr/image/upload/v1742836458/llama3_ydjpzh.webp"
        alt="Una llama con lentes animada"
        
      />
    </div>
  );
}
