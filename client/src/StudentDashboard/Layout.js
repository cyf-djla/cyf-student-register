import {useState, useEffect} from "react";
import Header from "./Header";
import "./Layout.css";

import StudentDetail from "./StudentDetail";
import DisplayTime from "./DisplayTime";
import Modules from "./DropdownMenu";
import LoginAndOutClass from "./LoginAndOutClass";
import LoginTime from "./LoginTime";
import LogoutTime from "./LogoutTime";
const Layout = ({ children }) => {

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
trainee-dashboard-connection
        <StudentDetail />
        <DisplayTime />
        <Modules classes={classes}/>
        <LoginTime classes={classes}/>
        <LogoutTime classes={classes}/>
        <LoginAndOutClass classes={classes}/>

      </div>
    </div>
  );
};

export default Layout;
