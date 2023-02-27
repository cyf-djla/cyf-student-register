import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";
import Header from "./StudentDashboard/Header";


function Menu() {
  return (
    <section>
    <Header/>
    <div className="background-wrapper">
    <br />
    <h1>
    <b>#We are here</b>
    </h1>
    <div className="volunteer-menu-container">
      <div className="buttons-container">
        <NavLink to="/TraineeLogin" className="massive-red-button">Trainee Login</NavLink>
        <NavLink to="/TraineeRegister" className="massive-red-button">Trainee Sign-up</NavLink>
        <NavLink to="/Volunteer" className="massive-red-button">Volunteer</NavLink>
      </div>
    </div>
    </div>
    </section>
  );
}

export default Menu;


