const ImagenFlotante = ({ src, alt, clase }) => {
    return (
      <div className={`hidden lg:block absolute  -z-20  ${clase}`}>
        <img className="w-60 md:w-64 lg:w-50 -rotate-y-180  " src={src} alt={alt} />
      </div>
    );
  };
  
  export default ImagenFlotante;
  