
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./StudentDashboard/Layout";
import Login from "./Login";
import About from "./StudentDashboard/About";
import GoodBye from "./StudentDashboard/GoodBye";
import Register from "./Register";
import MainMenu from "./MainMenu";
import VolunteerDashboard from "./VolunteerDashboard";
import VolunteerMenu from "./VolunteerMenu";
import VolunteerRegister from "./VolunteerRegister";
import VolunteerLogin from "./VolunteerLogin";
import "./index.css";



function App() {
  return (
    <Routes>
      <Route path="/bye" element={<GoodBye />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/" element={<TraineeLogin />} />
      <Route path="/Layout" element={<Layout />} /> */}
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/VolunteerMenu" element={<VolunteerMenu />} />
      <Route path="/VolunteerRegister" element={<VolunteerRegister />} />
      <Route path="/VolunteerLogin" element={<VolunteerLogin />} />
      <Route path="/Layout" element={<Layout />} />
      <Route path="/" element={<MainMenu />} />
      <Route path="/VolunteerDashboard" element={<VolunteerDashboard />} />
    </Routes>
  );
}
export default App;
