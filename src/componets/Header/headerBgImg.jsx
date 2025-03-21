export function HeaderBgImg({src , alt , style}){
    return(
        <img
        className={`absolute inset-0  w-full h-full object-cover object-center -z-20 ${style} `}
        src={src}
        alt={alt}
      />
    )
}