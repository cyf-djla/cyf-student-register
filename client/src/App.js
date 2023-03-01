import React from "react";
import {Route, Routes } from "react-router-dom";
import Layout from "./StudentDashboard/Layout"

import TraineeLogin from "./TraineeLogin";
import About from "./StudentDashboard/About";
import GoodBye from "./StudentDashboard/GoodBye";

import TraineeRegister from './TraineeRegister';

import MainMenu from './MainMenu';
import VolunteerMenu from './VolunteerMenu';
import VolunteerRegister from './VolunteerRegister';
import "./index.css";



function App() {
  return (
    <Routes>
      <Route path="/bye" element={<GoodBye />} />

      <Route path="/about" element={<About />} />

      {/* <Route path="/" element={<TraineeLogin />} />
      <Route path="/Layout" element={<Layout />} />  */}
        <Route path="/TraineeRegister" element={<TraineeRegister />} /> 
        <Route path="/TraineeLogin" element={<TraineeLogin />} /> 
        <Route path="/VolunteerMenu" element={<VolunteerMenu />} /> 
        <Route path="/VolunteerRegister" element={<VolunteerRegister />} /> 

        <Route path="/Layout" element={<Layout />} /> 
        <Route path="/" element={<MainMenu/>} /> 
      </Routes>
  );
}

export default App;
