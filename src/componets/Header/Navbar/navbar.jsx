import { HamburIcon, CloseIcon } from "../../../ui/iconNavbar";
import { useState } from "react";
import { navbarLinks } from "../../../data/navbarLinks";
import { NavResponsive } from "./navbarResponsive";
import { TraductorView } from "../../Traductor/TraductorView";
import { GithubUI } from "../../../ui/githubUI";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClik = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="flex relative  items-center  justify-between lg:p-8 py-6   bg-orange-500  lg:bg-transparent border-b border-gray-50/10   hover:backdrop-blur-lg transition-all duration-100 ease-linear ">
        <div className="px-4">
          <h1 className="font-black text-2xl lg:text-3xl drop-shadow-Titulo">
            Rimayninchik
          </h1>
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
           {
            navbarLinks.map((item)  => {
              return(
                <li key={item.id} className={item.class}>
                  <a href={item.link}>{item.item}</a>
                </li>
              )
            })
           }
           <TraductorView/>
           <GithubUI/>
        </ul>

        {showMenu && <NavResponsive/>}
      </nav>
    </>
  );
}
