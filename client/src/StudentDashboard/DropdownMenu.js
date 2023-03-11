import React, { useState } from "react";
import "./DropdownMenu.css";
import moment from "moment";
// import modules from "./ModulesData";

import { useNavigate } from "react-router-dom";
import "./LoginAndOutClass.css";

const Modules = ({ classes }) => {
  const navigate = useNavigate();

  // value={`${moment(date).format("DD/MM/YY")}
  const currentdateandtime = Date.now();
  const [logintime, setLogintime] = useState("--:-- on --/--/-----");
  const [logouttime, setLogouttime] = useState("--:-- on --/--/-----");
  const [selectedModule, setSelectedModule] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [date, setDate] = useState("");
  const [classid, setClassid] = useState("");
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  // function handleOptionChange(event) {
  // setSelectedOption(event.target.value);

  function handleModuleChange(event) {
    const selectedModule = event.target.value;
    setSelectedModule(selectedModule);

    const newclass = classes.find((m) => m.name === selectedModule);
    if (newclass) {
      setStartDateTime(newclass.time);
      setDate(newclass.date);
      setClassid(newclass._id);
    } else {
      setStartDateTime("");
    }
  }

  function handleLogin() {
    const newUser = {
      username,
      _id: userId,
      logintime: currentdateandtime,
    };
    fetch(
      `https://cyf-student-register.onrender.com/api/classes/classsignin/${classid}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );
    setLogintime(moment(currentdateandtime).format("h:mm a on MMMM Do YY"));
    console.log({ userId, username, classid });
  }

  function handleLogout() {
    const newUser = {
      username,
      userId,
      logouttime: currentdateandtime,
    };
    fetch(
      `https://cyf-student-register.onrender.com/api/classes/classsignout/${classid}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );
    setLogouttime(moment(currentdateandtime).format("h:mm a on MMMM Do YY"));
  }

  return (
    <div className="dropdown_wrapper">
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
        <div>
          {classes.map((newclass) => (
            <option key={newclass._id}>{newclass.name}</option>
          ))}
        </div>
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
        </div>
      )}
      <div>
        <div>
          <label> Login time / date</label>
          <input id="logtime" value={logintime} />
        </div>
        <div>
          <label> Log out time / date</label>
          <input id="logtime" value={logouttime} />
        </div>
        <div className="dashboard_buttons">
          <button className="login__class" onClick={handleLogin}>
            Log in class
          </button>
          <button className="logout__class" onClick={handleLogout}>
            Log out class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modules;
