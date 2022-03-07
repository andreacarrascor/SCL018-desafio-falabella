import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";

const BasicInformation = () => {
    return (
        <main className="flex flex-col w-full mt-5 ml-5 mr-20">
            <section className="border border-black w-full ml-5 mr-20">
                <h1 className="text-2xl">Mi persona favorita</h1>
                <Link to="/" className="text-zinc-400 underline">Volver a personas favoritas</Link>
                <form className="border border-black h-252 mt-5 ml-7 mb-5 mr-8">
                    <h2>Datos básicos</h2>
                    <label>Su nombre es </label>
                    <input type="text" placeholder="Escribe su Nombre"></input>
                    <p>Es mi</p>
                    <div>
                        <button>MAMÁ</button>
                        <button>PAPÁ</button>
                        <button>HERMANA</button>
                        <button>HERMANO</button>
                        <button>HIJA</button>
                        <button>HIJO</button>
                        <button>POLOLA</button>
                        <button>POLOLO</button>
                        <button>OTRO, ¿CUÁL?</button>
                    </div>
                    <p>Sexo</p>
                    <div>
                        <button>MUJER</button>
                        <button>HOMBRE</button>
                        <button>INDIFERENTE</button>
                    </div>
                </form>
            </section>
            <AddEvent />
        </main>
    );
}

export default BasicInformation;