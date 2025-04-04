import Modal from "./Modal";
import {useState } from "react";

export function ModalView() {
  const [isOpen, setIsOpen] = useState();
 
  return (
    <>
      <button
        className="px-4 py-2 bg-orange-400 font-black text-white tracking-wide text-sm shadow-4xl rounded-lg  cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
       Aprender Ahora
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold ">
          Tema no disponible
          </h2>
            <span>Gracias por su comprension</span>
        </Modal>
      )}
    
    </>
  );
}
