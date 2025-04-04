import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-white/25 backdrop-blur-2xl">
      <div className="bg-white  p-6 rounded-lg  relative overflow-hidden text-center border border-black ">
        <img
          loading="lazy"
          className={`w-xs`}
          src="https://res.cloudinary.com/dleem7osr/image/upload/v1742836458/llama3_ydjpzh.webp"
          alt="Una llama con lentes animada"
        />
        <button
          className="absolute top-2 right-2 bg-orange-400 py-2 px-4 text-white cursor-pointer rounded-lg shadow-4xl  active:scale-95 "
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
