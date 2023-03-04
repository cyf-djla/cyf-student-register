import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./Api/axios";
import AuthContext from "./context/AuthProvider";
import VolunteerDashboard from "./VolunteerDashboard";
import "./StudentDashboard/Header.css";
import Header from "./StudentDashboard/Header";
import "./index.css";

const LOGIN_URL = "http://localhost:8080/login";

const VolunteerLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [validVolunteers, setValidVolunteers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
    // Load valid volunteers from JSON file
    fetch("http://127.0.0.1:4200/api/auth/volunteers")
      .then((response) => response.json())
      .then((data) => setValidVolunteers(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrMsg("");

    // Check if volunteer credentials are valid
    const validVolunteer = validVolunteers.find((v) => v.username === username && v.password === password);

    if (validVolunteer) {
      // if volunteer credentials are valid
      setAuth({
        username: validVolunteer.username,
        password: validVolunteer.password,
        roles: ["volunteer"],
        accessToken: "fake_access_token",
      });
      setUsername("");
      setPassword("");
      setSuccess(true);
      navigate("/VolunteerDashboard");
    } else {
      // Volunteer credentials are invalid
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
          <u>Volunteer Login</u>
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
        <p className = "bottom-description">
          Need an Account?
          <br />
          <i>Click on the Menu at the top right to return to the home page</i>
        </p>
      </section>
    </>
  );
};

export default VolunteerLogin;
