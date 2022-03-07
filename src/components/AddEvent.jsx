import { Link } from "react-router-dom";

const AddEvent = () => {
    return ( 
        <section className=" border border-black h-278 w-full mt-5 ml-5 mr-20">
        <h1>Eventos e intereses</h1>
        <div className="flex flex-col justify-center items-center">
            <h2>Agrega un evento para tu persona favorita</h2>
          <Link to="">Agregar evento</Link>  
        </div>
        
    </section>
     );
}
 
export default AddEvent;