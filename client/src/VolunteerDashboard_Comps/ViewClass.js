import React from "react";
import { useNavigate } from "react-router-dom";
import "C:/Users/Dewayne/Documents/CYF/cyf-student-register/client/src/index.css"
const ViewClass = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate.push("/Dashboard2");
  }
  return (
    <div className="buttons">
      <button className="login__button" onClick={handleClick}>
        View Class
      </button>
    </div>
  );
};
export default ViewClass