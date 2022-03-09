import {useContext } from "react";
import { Context } from "../../context/Context";

const Button = ({ informationFamily }) => {
  
  const globalContext = useContext(Context);

  const handleClick = (button) => {
    globalContext.setSelectFamily(button);
  };


  return (
    <div className="flex flex-row flex-wrap">
      {informationFamily.map((item) => (
        <button
          className={`h-8 w-90 m-2 text-xs text-bd 
                border border-ft rounded-lg 
                focus:shadow-outline ${globalContext.selectFamily === item.name ? "highlight" : ""}`}
          key={item.id}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Button;
