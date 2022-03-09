import {useContext } from "react";
import { Context } from "../../context/Context";

const Date = () => {

    const globalContext = useContext(Context);

    const onChange = (e) => {
        if (e.target.name === "trip-start") {
          globalContext.setSelectDate(e.target.value);
        }
      };

    return ( 
        <input
        type="date"
        id="start"
        name="trip-start"
        value={globalContext.selectDate}
        // defaultValue="yyyy-mm-dd"
        min="1900-01-01"
        max="2022-12-31"
        onChange={onChange}
      ></input>
    );
}

export default Date;