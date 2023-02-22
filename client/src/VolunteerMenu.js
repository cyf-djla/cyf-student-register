import React, { useState } from 'react';
import VolunteerRegister from './VolunteerRegister';
import VolunteerLogin from './VolunteerLogin';
import "./index.css";

function VolunteerMenu() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <div className="volunteer-menu-container">
      {!showRegister && !showLogin && (
        <div className="buttons-container">
          <button className="massive-red-button" onClick={handleRegisterClick}>Register</button>
          <button className="massive-red-button" onClick={handleLoginClick}>Login</button>
        </div>
      )}
      {showRegister && <VolunteerRegister />}
      {showLogin && <VolunteerLogin />}
    </div>
  );
}

export default VolunteerMenu