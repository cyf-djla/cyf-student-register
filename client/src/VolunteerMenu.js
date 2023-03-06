import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";
import Header from "./StudentDashboard/Header";
import "./StudentDashboard/Header.css";


function VolunteerMenu() {
  return (
    <section>
    <Header/>
    <div className="about__hero">
    <br />
    <h1>
    <b>#We are here</b>
    </h1>
    <div className="volunteer-menu-container">
      <div className="buttons-container">
        <NavLink to="/VolunteerLogin" className="massive-red-button">Volunteer Login</NavLink>
        <NavLink to="/VolunteerRegister" className="massive-red-button">Volunteer Register</NavLink>
      </div>
    </div>
    </div>
    </section>
  );
}

export default VolunteerMenu;
