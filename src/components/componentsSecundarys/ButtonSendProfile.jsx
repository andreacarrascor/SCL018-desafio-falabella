import { Context } from "../../context/Context";
import { useContext } from "react";

const ButtonSendProfile = () => {
  const globalContext = useContext(Context);

  //Alerta para completar campo del nombre
  const sendProfile = () => {
    if (globalContext.favoritePerson === "") {
      alert("Completar nombre");
    } else alert("listoo, ya falta menos");
    //Llamamos a globalContext.newProfile
  };

  return (
    <section className="flex flex-row justify-end items-center shadow-am h-24 mt-4">
      <button className=" underline text-gc">Cancelar</button>
      <button
        onClick={() => sendProfile()}
        className="rounded rounded-sr h-10 w-48 bg-og mr-8 ml-10 text-white"
      >
        Crear perfil
      </button>
    </section>
  );
};

export default ButtonSendProfile;
