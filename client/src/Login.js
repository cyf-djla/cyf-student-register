import React,{ useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "./Api/axios";
import AuthContext from "./context/AuthProvider";
import Layout from "./StudentDashboard/Layout";
import "./StudentDashboard/Header.css"


const LOGIN_URL = "http://localhost:8080/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [validUsers, setValidUsers] = useState([]);
  const [Flag, setFlag] = useState(false);

  useEffect(() => {
    userRef.current.focus();
    // Load valid users from JSON file
    fetch("/credentials.json")
      .then((response) => response.json())
      .then((data) => setValidUsers(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrMsg("");

    // Check if user credentials are valid
    const validUser = validUsers.find((u) => u.user === user && u.pwd === pwd);

    if (validUser) {
      // if user credentials are valid
      setAuth({
        user: validUser.user,
        pwd: validUser.pwd,
        roles: ["user"],
        accessToken: "fake_access_token",
      });
      setUser("");
      setPwd("");
      setSuccess(true);
    } else {
      // User credentials are invalid
      setErrMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      {success ? (
        <section>
          <Layout />
        </section>
      ) : (
        <section>
        <div className="header">
      <img
        className="logo"
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt=""
      />

      <div className={`right-nav ${Flag ? "small" : "large"}`}>
        <div className="nav-link">
          <ul>
            <Link className="link" to="/">
              TraineeLogin
            </Link>
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
    <br />
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>
            <b>#We are here</b>
          </h1>
          <br />
          <p className="title-bh1">
            <u>Trainee Login</u>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="login__button">Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <i>Click on the button below to sign up</i>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
