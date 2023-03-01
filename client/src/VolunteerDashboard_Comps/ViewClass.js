import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewClass.css";
const ViewClass = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate.push("/Dashboard2");
  }
  return (
    <div className="buttons">
      <button className="view_class" onClick={handleClick}>
        View Class
      </button>
    </div>
  );
};
export default ViewClass