import React from 'react'
import Header from './Header';
import { NavLink } from 'react-router-dom';
import "../index.css";

const GoodBye = () => {
  fetch('https://cyf-student-register.onrender.com/api/auth/logout', {
      method: "get",
      headers: {
        "Content-type": "application/json"
      },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  return (
    <div className='signed-out__page'>
      <Header/>
      
        {/* <p>Signed out</p>
        <p>See You soon!</p>  */}       
          <p className="title-bh1"> 
            Signed out
            <br />
            See you soon!
          </p>
      
      <div className="volunteer-menu-container">
      <div className="buttons-container">
            <NavLink to="/" className="massive-red-button-signed-out">
              Home Page
            </NavLink>
            </div>
            </div>
    </div>
  );
}

export default GoodBye
