import { Context } from "../context/Context";
import { useContext } from "react";

const AddEvent = () => {

    const globalContext = useContext(Context);

    return ( 
        <section className="shadow-am h-278 w-full mt-5 mr-20">
        <h1 className="ml-6 mt-6">Eventos e intereses</h1>
        <div className="flex flex-col justify-center items-center">
            <h2>Agrega un evento para tu persona favorita</h2>
            <button 
                onClick={()=> globalContext.clickAddEvent()}
                className="w-52 h-9 text-sl bg-ev rounded-3xl">Agregar evento</button>
        </div>
        
    </section>
     );
}
 
export default AddEvent;