import { GithubIcon } from "./IconSocialMedia";
export function GithubUI() {
  return (
    <a href="https://github.com/z6nc/AprendeQuechua" aria-label="Ir a mi Github" target="_blank" className="inline-flex gap-x-3 items-center border mx-auto border-white rounded-xl p-1 transition-all ease-in-out duration-75 hover:scale-105 hover:bg-black/44" >
        <GithubIcon />
      <span>⭐</span>
    </a>
  );
}
