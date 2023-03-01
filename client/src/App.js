import React from "react";
import {Route, Routes } from "react-router-dom";
import Layout from "./StudentDashboard/Layout"
import TraineeRegister from './TraineeRegister';
import TraineeLogin from './TraineeLogin';
import MainMenu from './MainMenu';
import VolunteerDashboard from "./VolunteerDashboard";
import "./index.css";


function App() {
  return (
      <Routes>
        <Route path="/TraineeRegister" element={<TraineeRegister />} />
        <Route path="/TraineeLogin" element={<TraineeLogin />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/" element={<MainMenu/>} />
        <Route path="/VolunteerDashboard" element={<VolunteerDashboard/>} />
      </Routes>
  );
}

export default App;
