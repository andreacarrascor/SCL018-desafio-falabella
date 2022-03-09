import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import data from "../Arrays.json";
import FamilyButtons from "./secondary_components/FamilyButtons";
import { Context } from "../context/Context";
import { useContext } from "react";
import ButtonSendProfile from "./secondary_components/ButtonSendProfile";
import SexButtons from "./secondary_components/SexButtons";
import Date from "./secondary_components/Date";

const BasicInformation = () => {
  const globalContext = useContext(Context);
  const familyData = data.family;
  const sexData = data.sex;

  //Función para capturar el nombre
  const onChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (e.target.name === "name" && regex.test(e.target.value)) {
      globalContext.setFavoritePerson(e.target.value);
    }
  };

  return (
    <main className="profile flex flex-col w-939 mt-5 mr-20">
      <section className="shadow-am w-full  mr-20">
        <h1 className="text-2xl mt-6 ml-6">Mi persona favorita</h1>
        <Link to="/" className="text-fp underline ml-6">Volver a personas favoritas</Link>
        <div className="bg-db h-252 mt-5 ml-7 mb-5 mr-8">
          <h2>Datos básicos</h2>
          <label htmlFor="name" className="whitespace-pre">Su nombre es   </label>
          <input
            type="text"
            placeholder="Escriba su nombre"
            name="name"
            value={globalContext.favoritePerson}
            onChange={onChange}
          ></input>
          <p>Es mi</p>

          <FamilyButtons
            familyData={familyData}
          />
          <p>Sexo</p>
            <SexButtons 
              sexInformation={sexData}/>
            <label>Fecha de nacimiento:</label>
          <Date />
        </div>
      </section>
      <AddEvent />
      <ButtonSendProfile />
    </main>
  );
};

export default BasicInformation;
