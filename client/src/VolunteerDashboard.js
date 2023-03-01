import React from "react";
import Header from "./VolunteerDashboard_Comps/Header.js";
//import "./VolunteerDashboard_Comps/Layout.css";

import VolunteerDetail from "./VolunteerDashboard_Comps/VolunteerDetail";
import DisplayTime from "./VolunteerDashboard_Comps/DisplayTime";
import Modules from "./VolunteerDashboard_Comps/DropdownMenu";
import LoginAndOutClass from "./VolunteerDashboard_Comps/LoginAndOutClass";
const VolunteerDashboard = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="body">
        <VolunteerDetail />
        <DisplayTime />
        <Modules />
        <LoginAndOutClass />
      </div>
    </div>
  );
};

export default VolunteerDashboard;
