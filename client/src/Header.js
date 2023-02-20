import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [Flag, setFlag] = useState(false);

  return (
    <div className="header">
      <img
        className="logo"
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt=""
      />

      <div className={`right-nav ${Flag ? "small" : "large"}`}>
        <div className="nav-link">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
      </div>
      {Flag ? (
        <img
          className="menu__icon"
          src="https://www.pngitem.com/pimgs/m/485-4856652_close-menu-icon-white-png-transparent-png.png"
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      ) : (
        <img
          className="menu__icon"
          src="https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg"
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      )}
    </div>
  );
};

export default Header;
