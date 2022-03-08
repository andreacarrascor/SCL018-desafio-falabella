import { useState } from "react";

const Botton = ({informationFamily, informationSex}) =>{
    const [select, setSelect] = useState(false);

    const handleClick = (button) => {
        setSelect(button);
    }
    return (
        <div className="flex flex-row flex-wrap">
        {informationFamily.map((item) =>(
            
                <button className={`h-8 w-90 m-2 text-xs text-bd 
                border border-ft rounded-lg 
                focus:shadow-outline ${select === false ? "active:bg-og" : "" }`} key={item.id} 
                
                onClick={()=> handleClick(select)}>
                    
                    {item.name} </button>
        ))}
        </div>
    )
}

export default Botton;