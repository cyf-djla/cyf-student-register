import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAndOutClass.css";
const LoginAndOutClass = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate.push("/Dashboard2");
  }
  return (
    <div className="buttons">
      <button className="login__class" onClick={handleClick}>
        Log in class
      </button>
      <button className="logout__class" onClick={handleClick}>
        Log out class
      </button>
    </div>
  );
};

export default LoginAndOutClass;
