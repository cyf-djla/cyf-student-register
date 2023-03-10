import React, { useState } from "react";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

const TraineeRegister = () => {
  const [showLogin, setShowLogin] = useState(true);
  const handleShowLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <main className="App">
      {!showLogin ? <Login /> : <Register />}
      <button className="login__button" onClick={handleShowLogin}>
        {!showLogin ? "Login" : "Sign up"}
      </button>
    </main>
  );
};

export default TraineeRegister;
