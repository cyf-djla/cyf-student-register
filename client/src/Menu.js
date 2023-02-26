import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";
import Header from "./StudentDashboard/Header";


function Menu() {
  return (
    <main className="App">
    <Header/>
    <div className="background-wrapper">
    <div className="volunteer-menu-container">
    <h1>
    <b>#We are here</b>
    </h1>
      <div className="buttons-container">
        <NavLink to="/TraineeLogin" className="massive-red-button">Login</NavLink>
        <NavLink to="/TraineeRegister" className="massive-red-button">Register</NavLink>
      </div>
    </div>
    </div>
    </main>
  );
}

export default Menu;


