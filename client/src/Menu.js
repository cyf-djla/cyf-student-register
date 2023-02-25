import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

function Menu() {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  return (
    <div>
      <h1>Menu</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button onClick={handleShowRegister}>
        Register
      </button>
      {showRegister && <Register />}
    </div>
  );
}

export default Menu;
