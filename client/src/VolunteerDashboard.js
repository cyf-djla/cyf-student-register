import React from "react";
import Header from "./StudentDashboard/Header.js";
import "./StudentDashboard/Layout.css";

import StudentDetail from "./StudentDashboard/StudentDetail";
import DisplayTime from "./StudentDashboard/DisplayTime";
import Modules from "./StudentDashboard/DropdownMenu";
import LoginAndOutClass from "./StudentDashboard/LoginAndOutClass";
import LoginTime from "./StudentDashboard/LoginTime";
import LogoutTime from "./StudentDashboard/LogoutTime";
const VolunteerDashboard = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="body">
        <StudentDetail />
        <DisplayTime />
        <Modules />
        <LoginTime />
        <LogoutTime />
        <LoginAndOutClass />
      </div>
    </div>
  );
};

export default VolunteerDashboard;
