import {useState, useEffect} from "react";
import Header from "./StudentDashboard/Header.js";
import VolunteerDetail from "./VolunteerDashboard_Comps/VolunteerDetail";
import DisplayTime from "./StudentDashboard/DisplayTime";
import DropdownMenu from "./VolunteerDashboard_Comps/DropdownMenu";
import "./VolunteerDashboard_Comps/VDLayout.css";

const VolunteerDashboard = ({ children }) => {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  },[classes])

  useEffect(() =>{
    console.log(classes);
  }, [classes]);

  function fetchClasses() {
    fetch("https://cyf-student-register.onrender.com/api/classes")
    .then((res) => res.json())
    .then((data) => setClasses(data))
    .catch((error) => console.log(error))
  }
  return (
    <div>
      <Header />
      <div className="vdlayout__body">
      {children}
      <div className="vdlayout__body">
        <VolunteerDetail />
        <DisplayTime />
         <DropdownMenu classes={classes}/>
          
         </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
