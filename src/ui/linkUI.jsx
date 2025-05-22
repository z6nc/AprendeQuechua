import { Link } from "react-router-dom";
export function LinkIU({ texto, textoTraducido, url, style  }) {
  return (
    <Link
      to={url}
      className={`group inline-flex bg-orange-400 ${style}  font-black text-white tracking-wide shadow-4xl rounded-lg cursor-pointer `}
    >
      <span className="group-hover:hidden ">{texto}</span>
      <span className="group-hover:block hidden">{textoTraducido}</span>
    </Link>
  );
}