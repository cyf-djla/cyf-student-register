import {useState, useEffect} from "react";
import Header from "./StudentDashboard/Header.js";
import VolunteerDetail from "./VolunteerDashboard_Comps/VolunteerDetail";
import DisplayTime from "./StudentDashboard/DisplayTime";
import Modules from "./StudentDashboard/DropdownMenu";
import "./index.css"
import ClassTable from "./ClassTable.js"; 

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
      {children}
      <div className="body">
        <VolunteerDetail />
        <DisplayTime />
         <Modules classes={classes}/>
          <ClassTable />
         
      </div>
    </div>
  );
};

export default VolunteerDashboard;
