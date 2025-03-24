import { AlertUI } from "../../ui/alertUI";
function TemasProximos() {
  return (
    <section className=" md:h-90 2xl:h-96 ">
      <AlertUI />
      <div className="w-72  lg:w-full h-[450px] relative mx-auto  my-7 shadow-md  border-b-4   border-gray-500/15  rounded-b-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover "
          src="https://res.cloudinary.com/dleem7osr/image/upload/v1742834879/ProximosCursos_cgzb8c.webp"
          alt="fondo de la sierra peruana  "
        />
      </div>
    </section>
  );
}

export default TemasProximos;
