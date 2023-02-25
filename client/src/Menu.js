import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import "./index.css";

function Menu() {
  return (
    <div className="volunteer-menu-container">
        <div className="buttons-container">
          <NavLink to="/Register" className="massive-red-button" onClick={handleRegisterClick}>Register</NavLink>
          <NavLink to="/Login" className="massive-red-button" onClick={handleLoginClick}>Login</NavLink>
        </div>
    </div>
  );
}

export default Menu;

