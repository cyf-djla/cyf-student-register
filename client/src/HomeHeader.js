// // import React from 'react'

// // const HomeHeader = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default HomeHeader
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import "./Header.css";
// import Layout from "./Layout";

const HomeHeader = () => {
  const [Flag, setFlag] = useState(false);

  return (
    <div className="header">
      <img
        className="logo"
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt=""
      />

      {/* <div>
        <h1 className="desktop__title">#We are here</h1>
      </div> */}

      <div className={`right-nav ${Flag ? "small" : "large"}`}>
        <div className="nav-link">
          <ul className="links__container">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/bye">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {Flag ? (
        <img
          className="menu__icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_-_6rMslNQ1yVbCWWovN5lAXCGf6rsqGislEIari7rt_pY16j1C8&usqp=CAU"
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      ) : (
        <img
          className="menu__icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r_MjvW52clz8DsS6DKk6uwy0ohkssiw5xA&usqp=CAU"
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      )}
    </div>
  );
};

export default HomeHeader;
