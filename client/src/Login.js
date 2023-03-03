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
 
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate=useNavigate()


  useEffect(() => {
    setErrMsg("");
  }, [email, password]);


  const handleSubmit =  (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:4200/api/auth/login', {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
     
    setPassword("");
    setEmail("");
    setSuccess(true)
    navigate("/Layout")
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
          <form >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
            {/* <Link to="/Layout"> */}
              <button className="login__button" type='submit' onClick={handleSubmit}>Sign In</button>
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