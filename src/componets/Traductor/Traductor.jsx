import ReactDOM from "react-dom";
import { SubTitle } from "../../ui/SubtitleUI";
const Traductor = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-white/25 backdrop-blur-sm ">
      <div className="w-[25rem] md:w-xl  bg-white  p-6 rounded-lg  relative overflow-hidden text-center border border-black ">
        <button
          className="absolute top-2 right-2 bg-orange-400 py-2 px-4 text-white cursor-pointer rounded-lg shadow-4xl  active:scale-95 "
          onClick={onClose}
        >
          ✖
        </button>
          <SubTitle titulo={"Traductor - T’ikraq"} />
        {children}
      </div>
    </div>,
    document.getElementById("Traductor")
  );
};
export default Traductor;
