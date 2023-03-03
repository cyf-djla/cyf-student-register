import React, { useState } from "react";

const ViewClass = () => {
  const [trainees, setTrainees] = useState([]);

  function handleClick() {
    fetch("https://cyf-student-register.onrender.com/api/classes")
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setTrainees(data.trainee || []); 
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="buttons">
      <button className="login__button" onClick={handleClick}>
        View Class
      </button>
      <ul>
        {trainees.map(trainee => (
          <li key={trainee.id}>
            {trainee._id}, {trainee.logintime}, {trainee.logouttime}, {trainee.flags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewClass;
