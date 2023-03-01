import React, { useState } from "react";
import "./DropdownMenu.css";
import modules from "./ModulesData";

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState("");
 const [startDateTime, setStartDateTime] = useState("");
 
    // function handleOptionChange(event) {
    // setSelectedOption(event.target.value);


      function handleModuleChange(event) {
    const selectedModule = event.target.value;
    setSelectedModule(selectedModule);


        const module = modules.find((m) => m.name === selectedModule);
        if (module) {
          setStartDateTime(module.startDateTime);
        }
         
         else {
      setStartDateTime('');
    }

  }
   
  
  return (
    <div>
      {/* <label>Select Module/Class:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {modules.map((module) => (
          <option data={module.name}>{module.name}</option>
        ))}
      </select>

      <label> Scheduled start time/date:</label>
      <input type="text"  placeholder="10:00 on 18/02/2023"  readOnly/>
    </div>
        ); */}
      <label htmlFor="module">Select Module/Class:</label>
      <select id="module" value={selectedModule} onChange={handleModuleChange}>
        <option value="">-- Please select a module --</option>
        {modules.map((module) => (
          <option key={module.name} value={module.name}>
            {module.name}
          </option>
        ))}
      </select>
      {startDateTime && (
        <div>
          <label htmlFor="startDateTime">Scheduled start time/date:</label>
          <input
            type="text"
            id="startDateTime"
            placeholder="Starting date and time"
            value={startDateTime}
            readOnly
          />
        </div>
      )}
    </div>
  );
      }

export default Modules;
