import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import VolunteerMenu from "./VolunteerMenu";
import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <main className="App">
      <img src="/img/images.jpg" alt="cyf logo" className="img" />
      <Routes>
        <Route path="/" element={<VolunteerMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <button onClick={handleShowLogin}>
        {showLogin ? "Show Register" : "Show Login"}
      </button>

      {showLogin ? (
        <Link to="/login">Go to Login</Link>
      ) : (
        <Link to="/register">Go to Register</Link>
      )}

      <Link to="/">Go to Volunteer Menu</Link>
    </main>
  );
}

export default App;
