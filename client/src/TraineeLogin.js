import React, { useState } from "react";
import "./index.css";

import Login from "./Login";
import Register from "./Register";
import Header from "./StudentDashboard/Header";
import "./StudentDashboard/Header.css"

const TraineeLogin = () => {
  const [showLogin, setShowLogin] = useState(true);
const handleShowLogin = () => {
  setShowLogin((prevShowLogin) => !prevShowLogin);
};
  return (
    <main className="App">
      <Header />
      {showLogin ? <Login /> : <Register />}
      <button className="login__button" onClick={handleShowLogin}>
        {showLogin ? "Sign up" : "Login"}
      </button>
    </main>
  );
}

export default TraineeLogin
