import { Context } from "../../context/Context";
import { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ButtonSendProfile = () => {
  const globalContext = useContext(Context);
  const MySwal = withReactContent(Swal);

  //Alerta para completar campo del nombre
  const sendProfile = () => {
    if (globalContext.favoritePerson === "") {
      MySwal.fire({
        text: "Completar nombre",
        icon: "error",
        confirmButtonColor: "#FF6200",
        iconColor: "#FF6200",
      });
    } else if (
      globalContext.selectFamily === "" ||
      globalContext.selectSex === ""
    ) {
      MySwal.fire({
        text: "Completar parentesco o sexo",
        icon: "error",
        confirmButtonColor: "#FF6200",
        iconColor: "#FF6200",
      });
    } else if (globalContext.selectDate === "") {
      MySwal.fire({
        text: "Completar fecha de nacimiento",
        icon: "error",
        confirmButtonColor: "#FF6200",
        iconColor: "#FF6200",
      });
    } else {
      globalContext.newProfile();
      globalContext.setFavoritePerson("");
      globalContext.setSelectFamily("");
      globalContext.setSelectSex("");
      globalContext.setSelectDate("");
      MySwal.fire({
        icon: "success",
        title: "Perfil creado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const deleteForm = () => {
    if (window.confirm("¿Desea borrar los campos?")) {
      globalContext.setFavoritePerson("");
      globalContext.setSelectFamily("");
      globalContext.setSelectSex("");
      globalContext.setSelectDate("");
    }
  };

  return (
    <section className="flex flex-row justify-end items-center shadow-am h-24 mt-4">
      <button className=" underline text-gc" onClick={() => deleteForm()}>
        Cancelar
      </button>
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
