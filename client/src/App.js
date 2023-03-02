import React from "react";
import {Route, Routes } from "react-router-dom";
import Layout from "./StudentDashboard/Layout"

import TraineeLogin from "./TraineeLogin";
import About from "./StudentDashboard/About";
import GoodBye from "./StudentDashboard/GoodBye";

import TraineeRegister from './TraineeRegister';

import MainMenu from './MainMenu';
import VolunteerMenu from './VolunteerMenu';
import "./index.css";



function App() {
  return (
    // <main className="App">
    //   <img src="/img/images.jpg" alt="cyf logo" className="img" />
    //   {showLogin ? <Login /> : <Register />}
    //   <button onClick={handleShowLogin}>
    //     {showLogin ? "Show Register" : "Show Login"}
    //   </button>
    // </main>
    <Routes>
      <Route path="/bye" element={<GoodBye />} />

      <Route path="/about" element={<About />} />

      <Route path="/" element={<TraineeLogin />} />
      <Route path="/Layout" element={<Layout />} />
    {/* /</Routes>
      <Routes> */}
          <Route path="/TraineeRegister" element={<TraineeRegister />} /> 
        <Route path="/TraineeLogin" element={<TraineeLogin />} />
         <Route path="/VolunteerMenu" element={<VolunteerMenu />} /> 
{/* 
        <Route path="/Layout" element={<Layout />} /> */}
         <Route path="/menu" element={<MainMenu/>} /> 
      </Routes>
  );
}

export default App;
