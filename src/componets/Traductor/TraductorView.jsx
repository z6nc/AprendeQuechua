import Traductor from "./Traductor";
import { useState } from "react";
import { TraductorData } from "./TraductorData";

export function TraductorView() {
  const [isOpen, setOpen] = useState();

  return (
    <>
      <button
        className="customNavbarBtn cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Traductor
      </button>
      {isOpen && (
        <Traductor onClose={() => setOpen(false)}>
          <TraductorData/>
        </Traductor>
      )}
    </>
  );
}
