import { HamburIcon, CloseIcon } from "../../../ui/iconNavbar";
import { GithubUI } from "../../../ui/githubUI";
import { useState } from "react";
export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
    
  const handleClik =() =>{
    setShowMenu(!showMenu)
  }

  return (
    <>
    <nav className="flex relative  items-center  justify-between lg:p-8 py-6 text-white  bg-orange-500  lg:bg-transparent ">
      <div className="px-4">
        <h1 className="font-black text-2xl lg:text-3xl drop-shadow-Titulo">Rimayninchik</h1>
      </div>
      <div className="block lg:hidden px-4 ">
        <button
          className="border transition-all ease-in duration-100 "
          onClick={handleClik}
          aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
        >
          {showMenu ? <CloseIcon /> : <HamburIcon />}
        </button>
       
      </div>

      <ul className="hidden  lg:inline-flex gap-x-7  items-center ">
             {/* crear un objeto  */}
            <li className="customNavbarBtn" ><a href="/">Inicio</a> </li>
            <li className="customNavbarBtn"><a href="/CursoPage">Comenzar</a></li>
            <li className="customNavbarBtn "><a href="">Traductor</a></li>
            <li><GithubUI/></li>
      </ul>

       {showMenu && (
        <div className=" absolute w-full  h-screen  noScroll  top-20  z-40  px-4 py-5 bg-black/10  backdrop-blur-2xl  ">
          <ul className="relative puntero-triangulo  flex flex-col gap-y-4 py-6 px-4   tracking-wide bg-orange-500  border-b border-l border-white rounded-lg">
            <li><a href="/">Inicio</a> </li>
            <li><a href="/cursoPage">Comenzar</a></li>
            <li><a href="">Traductor</a></li>
            <li><GithubUI/></li>
          </ul>
        </div>
        )}
    
    </nav>
   
    
    
    </>
    
  );
}
