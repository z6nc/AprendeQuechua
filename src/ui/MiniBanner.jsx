function MiniBanner({ImgAnimal  , alt  , classImg}) {
  return (
    <div className={`w-full h-[12vh] md:h-[20vh] lg:h-[10vh]  relative   my-9 md:my-12 lg:my-16  `}>
      <div className={`absolute bottom-0 ${classImg} z-30 `}>
        <img
          className="w-72 md:w-80 lg:w-[350px] 2xl:w-[370px]"
          src={ImgAnimal}
          alt={alt}
        />
      </div>
    </div>
  );
}
export default MiniBanner;

