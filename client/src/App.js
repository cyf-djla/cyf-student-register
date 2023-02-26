import React from "react";
import {Route, Routes } from "react-router-dom";
import Layout from "./StudentDashboard/Layout"
import Register from './Register';
import Login from './Login';
import MainMenu from './MainMenu';
import "./index.css";


function App() {
  return (
      <Routes>
        <Route path="/TraineeRegister" element={<Register />} />
        <Route path="/TraineeLogin" element={<Login />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/" element={<MainMenu/>} />
      </Routes>
  );
}

export default App;
