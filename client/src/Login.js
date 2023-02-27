import React,{ useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./Api/axios";
import AuthContext from "./context/AuthProvider";
import Layout from "./StudentDashboard/Layout";
import "./StudentDashboard/Header.css"
import Header from "./StudentDashboard/Header";
import { Route, Routes } from "react-router-dom";




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
  const navigate=useNavigate()
  // const [Flag, setFlag] = useState(false);

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
      navigate("/Layout")
    } else {
      // User credentials are invalid
      setErrMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
     
        <section>
          <Header />

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
            {/* <Link to="/Layout"> */}
              <button className="login__button">Sign In</button>
            {/* </Link> */}
          </form>
          <p>
            Need an Account?
            <br />
            <i>Click on the button below to sign up</i>
          </p>
        </section>
      
    </>
  );
};

export default Login;
