import React, { useState } from "react";
import "./DropdownMenu.css";
import moment from "moment";
import ClassTable from "./ClassTable";

const DropdownMenu = ({ classes }) => {
  const [selectedModule, setSelectedModule] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [date, setDate] = useState("");

  function handleModuleChange(event) {
    const selectedModule = event.target.value;
    setSelectedModule(selectedModule);

    const newClass = classes.find((m) => m.name === selectedModule);
    if (newClass) {
      setStartDateTime(newClass.time);
      setDate(newClass.date);
    } else {
      setStartDateTime("");
    }
  }

  return (
    <div>
      <label htmlFor="module">Select Module/Class:</label>
      <select id="module" value={selectedModule} onChange={handleModuleChange}>
        <option value="">-- Please select a module --</option>
        {classes.map((newClass) => (
          <option key={newClass.name} value={newClass.name}>
            {newClass.name}
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
            value={`${moment(date).format("DD/MM/YY")} ${startDateTime}`}
            readOnly
          />
          <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            <ClassTable classId={selectedModule} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
