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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [validUsernames, setValidUsernames] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    userRef.current.focus();
    // Load valid users from JSON file
    fetch("/credentials.json")
      .then((response) => response.json())
      .then((data) => setValidUsernames(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrMsg("");

    // Check if user credentials are valid
    const validUsername = validUsernames.find((u) => u.username === username && u.password === password);

    if (validUsername) {
      // if user credentials are valid
      setAuth({
        username: validUsername.username,
        password: validUsername.password,
        roles: ["username"],
        accessToken: "fake_access_token",
      });
      setUsername("");
      setPassword("");
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
      
    </>
  );
};

export default Login;
