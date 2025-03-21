import { GithubIcon } from "./IconSocialMedia";
export function GithubUI() {
  return (
    <a className="inline-flex gap-x-3 items-center border border-white rounded-xl p-1 transition-all ease-in-out duration-75 hover:scale-105 hover:bg-black/44" href="" aria-label="Ir a mi Github">
        <GithubIcon />
      <span>⭐</span>
    </a>
  );
}
