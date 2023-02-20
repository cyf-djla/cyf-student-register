import React, { useState } from "react";
import "./DropdownMenu.css";
import modules from "./ModulesData";

const Modules = () => {
    const [selectedOption, setSelectedOption] = useState("option1");
    
    function handleOptionChange(event) {
      setSelectedOption(event.target.value);
    }
    return (
      <div>
        <label>Select Module/Class:</label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {modules.map((item) => (
            <option data={item}>{item}</option>
          ))}

          
        </select>
        

        <label> Scheduled start time/date:</label>
        <input type="text" placeholder="10:00 on 18/02/2023" />
      </div>
    );
};

export default Modules;
