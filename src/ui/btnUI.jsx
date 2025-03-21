export function BtnUI({ url, style }) {
  return (
    <a
      className={`group inline-flex    bg-orange-400 ${style}  font-black tracking-wide   `}
      href={url}
    >
      <span className="group-hover:hidden ">Comenzar a aprender</span>
      <span className="group-hover:block hidden ">Yachayta qallariy</span>
    </a>
  );
}
