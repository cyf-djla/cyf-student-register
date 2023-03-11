import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer.js";
import "./index.css";
// import Header from "./StudentDashboard/Header";
import "./StudentDashboard/Header.css";
import HomeHeader from "./HomeHeader.js";

function Menu() {
  return (
    <section>
      <HomeHeader />
      <div className="background-wrapper">
        <h1 className="home__title">#We are here</h1>

        <div className="volunteer-menu-container">
          <div className="buttons-container">
            <NavLink to="/Login" className="massive-red-button">
              Trainee Login
            </NavLink>
            <NavLink to="/Register" className="massive-red-button">
              Trainee Register
            </NavLink>
            <NavLink to="/VolunteerMenu" className="massive-red-button">
              Volunteer Menu
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Menu;
