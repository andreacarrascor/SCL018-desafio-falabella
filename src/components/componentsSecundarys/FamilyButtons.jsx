import { useState } from "react";

const FamilyButtons = ({ familyData }) => {
  const [select, setSelect] = useState();
console.log(select)
  const handleClick = (button) => {
    setSelect(button);
  };
  return (
    <div className="flex flex-row flex-wrap">
      {familyData.map((item) => (
        <button
          className={`h-8 w-90 m-2 text-xs text-bd 
                border border-ft rounded-xs
                focus:shadow-outline ${Number(select) === item.id ? "highlight" : ""}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.name}{" "}
        </button>
      ))}
    </div>
  );
};

export default FamilyButtons;
