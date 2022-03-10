import Union from '../img/Union.png'
import { Context } from "../context/Context";
import { useContext } from "react";
import Swal from "sweetalert2";

const Events = ({eventsData, interestsData, suggestionData}) => {
    const globalContext = useContext(Context);

    const handleClick = (button) => {
        globalContext.setEvents(button);
      };
      const handleClickB = (button) => {
        globalContext.setInterests(button);
      };

      const handleClickC = (button) => {
        globalContext.setSuggestion(button);
      };

      const deleteForm = () => {
        Swal.fire({
          title: "¿Deseas borrar los campos?",
          icon: "warning",
          iconColor: "#F7B500",
          showCancelButton: true,
          confirmButtonColor: "#FF6200",
          cancelButtonText: "No",
          cancelButtonColor: "#495867",
          reverseButtons: true,
          color: "#4A4A4A",
          confirmButtonText: "Sí, borrar",
        }).then((result) => {
          if (result.isConfirmed) {
            globalContext.setEvents("");
            globalContext.setInterests("");
            globalContext.setSuggestion("");
          }
        });
      };


    return ( 
        <main>
            <section>
                <h1>Eventos e intereses</h1>
                <div>
                    <div>
                        <img src={Union} alt="calendar"/>
                        <h2>Agregar Celebración</h2>
                    </div>
                    <label htmlFor="name">Estamos celebrando:</label>
                    <div>
                        {eventsData.map((element)=> (
                        <button
                        className={`h-8 w-90 m-2 text-xs text-bd 
                        border border-ft rounded-xs 
                        focus:shadow-outline ${globalContext.events === element.name ? "highlight" : ""}`}
                        key={element.id} onClick={() => handleClick(element.name)}> 
                        <img src={element.img} alt={element.name} className=""/>
                        {element.name}
                        </button>
                        ))}
                    </div>
                    <p>Sus intereses son:</p>
                    <div>
                        {interestsData.map((item)=>(
                            <button className={`h-8 w-90 m-2 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.interests === item.name ? "highlight" : ""}`}
                            key={item.id} onClick={() => handleClickB(item.name)}> 
                            {item.name}
                            </button>
                        ))}
                    </div>
                    <p>Quiero recibir sugerencias de regalo:</p>
                    <div>
                        {suggestionData.map((e) => (
                            <button className={`h-8 w-90 m-2 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.suggestion === e.name ? "highlight" : ""}`}
                            key={e.id} onClick={() => handleClickC(e.name)}> 
                            {e.name}
                            </button>
                        ))}
                    </div>
                    <section>
                    <button className=" underline text-gc" onClick={() => deleteForm()}>Cancelar</button>
                    <button className="rounded rounded-sr h-10 w-48 text-sl bg-ev">Agregar evento</button>
                    </section>
                </div>
            </section>
        </main>
     );
}
 
export default Events;