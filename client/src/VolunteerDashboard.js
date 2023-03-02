import React from "react";
import Header from "./VolunteerDashboard_Comps/Header.js";
import VolunteerDetail from "./VolunteerDashboard_Comps/VolunteerDetail";
import DisplayTime from "./VolunteerDashboard_Comps/DisplayTime";
import Modules from "./VolunteerDashboard_Comps/DropdownMenu";
const VolunteerDashboard = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="body">
        <VolunteerDetail />
        <DisplayTime />
        <Modules />
      </div>
    </div>
  );
};

export default VolunteerDashboard;
