import React, {useRef, useState, useEffect, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "./context/AuthProvider";
import Layout from "./StudentDashboard/Layout";
import "./StudentDashboard/Header.css";
import Header from "./StudentDashboard/Header";
import {Route, Routes} from "react-router-dom";

const Login = () => {


  
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);

	const navigate = useNavigate();

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("https://cyf-student-register.onrender.com/api/auth/login", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({email, password}),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error("Login failed");
				}
			})
			.then((data) => {
				if (isMounted) {
					localStorage.setItem("token", data.token);
					localStorage.setItem("userId", data.userId);
					localStorage.setItem("isVolunteer", data.isVolunteer);
					localStorage.setItem("username", data.username);
					console.log(data.token, data.userId, data.isVolunteer, data.username);
					navigate("/Layout");
					setPassword("");
					setEmail("");
					setErrorMessage("");
				}
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage("Invalid email or password");
			});
	};

	return (
    <>
      <section>
        <Header />
        <div className="trainee__page">
          <br />
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <p className="title-bh1">
            <u>Trainee Login</u>
          </p>
          <div className="form__container">
            <form>
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

              <button
                className="login__button"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
          </div>
          <div className="form_div">
            <p>
              Need an Account?
              <br />
              <i>
                Click on the Menu at the top right to return to the home page{" "}
              </i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
