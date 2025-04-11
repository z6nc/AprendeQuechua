import { navbarLinks } from "../../../data/navbarLinks";
import { TraductorView } from "../../Traductor/TraductorView";
import { GithubUI } from "../../../ui/githubUI";

export function NavResponsive() {
  return (
    <div className=" absolute w-full  h-screen  noScroll  top-20  z-40  px-4 py-5 bg-black/10  backdrop-blur-2xl  ">
      <ul className="relative puntero-triangulo  flex flex-col gap-y-4 py-6 px-4   tracking-wide bg-orange-500  border-b border-l border-white rounded-lg">
        {navbarLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.item}</a>
            </li>
          );
        })}
        <TraductorView/>
        <GithubUI/>
      </ul>
    </div>
  );
}
