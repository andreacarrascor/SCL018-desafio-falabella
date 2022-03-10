import Union from '../img/Union.png'
import { Context } from "../context/Context";
import { useContext } from "react";

const Events = ({ eventsData, interestsData, suggestionData }) => {
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
        if (window.confirm("¿Desea borrar los campos?")) {
            globalContext.setEvents("");
            globalContext.setInterests("");
            globalContext.setSuggestion("");
        }
    };

    return (
        <main>
            <section className='shadow-am w-full h-504 mr-20'>
                <h1 className="text-2xl mt-6 ml-8 pb-2">Eventos e intereses</h1>
                <div className="bg-db h-320 mt-5 ml-7 mb-5 mr-8">
                    <div className='flex flex-row items-center p-4'>
                        <img src={Union}  alt="calendar"/>
                        <h2 className='ml-1.5'>Agregar Celebración</h2>
                    </div>
                    <label htmlFor="name" className='mt-5'>Estamos celebrando:</label>
                    <div className='flex flex-row'>
                        {eventsData.map((element)=> (
                        <button
                        className={`h-20 w-24 m-2 text-xs text-bd 
                        border border-ft rounded-xs 
                        focus:shadow-outline flex flex-col justify-center items-center  ${globalContext.events === element.name ? "highlight" : ""}`}
                        key={element.id} onClick={() => handleClick(element.name)}> 
                        <img src={element.img} alt={element.name} className=""/>
                        {element.name}
                        </button>
                        ))}
                    </div>
                    <p className='mt-5'>Sus intereses son:</p>
                    <div>
                        {interestsData.map((item)=>(
                            <button className={`h-10 w-28 m-2 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.interests === item.name ? "highlight" : ""}`}
                                key={item.id} onClick={() => handleClickB(item.name)}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <p className='mt-5'>Quiero recibir sugerencias de regalo:</p>
                    <div>
                        {suggestionData.map((e) => (
                            <button className={`h-10 w-28 m-2 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.suggestion === e.name ? "highlight" : ""}`}
                                key={e.id} onClick={() => handleClickC(e.name)}>
                                {e.name}
                            </button>
                        ))}
                    </div>
                    <section className='flex justify-end'>
                    <button className=" underline text-gc" onClick={() => deleteForm()}>Cancelar</button>
                    <button className="rounded rounded-sr h-10 w-48 text-sl ml-8 bg-ev">Agregar evento</button>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Events;