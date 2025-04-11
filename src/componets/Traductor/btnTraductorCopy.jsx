import { CopyUI } from "../../ui/copyUI";
import { useState } from "react";
export function BtnTraductorCopy({ dataCopy }) {
  const [Copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(dataCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <button
        onClick={handleCopy}
        className="absolute right-0 p-2 cursor-pointer"
      >
        <CopyUI />
      </button>
      {Copied && (
        <div className=" fixed left-0 bottom-0 w-full text-center ">
          <p className=" text-white  bg-orange-400/75 rounded-lg px-9 py-2">
            Copiado
          </p>
        </div>
      )}
    </>
  );
}
