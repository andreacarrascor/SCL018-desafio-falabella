import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import data from "../Arrays.json";
import Botton from "./Botton";

const BasicInformation = () => {
    const informationFamily = data.family;
    const informationSex = data.sex;


    return (
        <main className="profile flex flex-col w-939 mt-5 mr-20">
            <section className="shadow-am w-full  mr-20">
                <h1 className="text-2xl mt-6 ml-6">Mi persona favorita</h1>
                <Link to="/" className="underline ml-6">Volver a personas favoritas</Link>
                <div className="bg-db h-252 mt-5 ml-7 mb-5 mr-8">
                    <h2>Datos básicos</h2>
                    <label>Su nombre es </label>
                    <input type="text" placeholder="Escribe su Nombre"></input>
                    <p>Es mi</p>

                    <Botton informationFamily={informationFamily}
                        informationSex={informationSex}
                    />

                    <p>Sexo</p>
                    <div className="flex flex-row flex-wrap">
                        {informationSex.map((item) => (
                            <button className="h-8 w-90 m-2 text-xs text-bd 
                            border border-ft rounded-lg 
                            focus:shadow-outlin" key={item.id}>{item.name} </button>
                        ))}
                        <label>Su fecha de nacimiento es:</label>
                        <input type="date" id="start" name="trip-start"
                            defaultValue="0000-00-00"
                            min="1900-01-01" max="2022-12-31"></input>

                    </div>
                </div>
            </section>
            <AddEvent />
        </main>
    );
}

export default BasicInformation;