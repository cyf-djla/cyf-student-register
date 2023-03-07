import React from "react";
import "./VolunteerDetail.css";

const VolunteerDetail = () => {
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem('userId')
  // console.log(token)
  return (
    <div className="student__detail">
      <h2 className="mobile__title"># We are here</h2>
      <p>Trainee Dashboard</p>
      
      <p>Hello! {username} </p>
    </div>
  );
};

export default VolunteerDetail;
