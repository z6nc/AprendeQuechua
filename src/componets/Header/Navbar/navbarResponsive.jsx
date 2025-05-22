import { navbarLinks } from "../../../data/navbarLinks";
import { TraductorView } from "../../Traductor/TraductorView";
import { GithubUI } from "../../../ui/githubUI";
import { Link } from "react-router-dom";

export function NavResponsive() {
  return (
    <div className=" absolute w-full  h-screen  noScroll  top-20  z-20  px-4 py-5 bg-black/10  backdrop-blur-2xl  ">
      <ul className="relative puntero-triangulo  flex flex-col items-center gap-y-4 py-6 px-4   tracking-wide bg-orange-500  border-b border-l border-white rounded-lg">
        {navbarLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.link}>{item.item}</Link>
            </li>
          );
        })}
        <TraductorView />
        <GithubUI />
      </ul>
    </div>
  );
}
