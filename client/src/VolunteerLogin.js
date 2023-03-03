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
        <p>
          Need an Account?
          <br />
          <i>Click on the button below to sign up</i>
        </p>
      </section>
    </>
  );
};
// 	const userRef = useRef();
// 	const errRef = useRef();

// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [errMsg, setErrMsg] = useState("");
// 	const [errorMessage, setErrorMessage] = useState("");
// 	const [isMounted, setIsMounted] = useState(false);

// 	useEffect(() => {
// 		setIsMounted(true);
// 		return () => {
// 			setIsMounted(false);
// 		};
// 	}, []);

// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		setErrMsg("");
// 	}, [email, password]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		fetch("http://127.0.0.1:4200/api/auth/login", {
// 			method: "post",
// 			headers: {
// 				"Content-type": "application/json",
// 			},
// 			body: JSON.stringify({email, password}),
// 		})
// 			.then((res) => {
// 				if (res.ok) {
// 					return res.json();
// 				} else {
// 					throw new Error("Login failed");
// 				}
// 			})
// 			.then((data) => {
// 				if (isMounted) {
// 					localStorage.setItem("token", data.token);
// 					localStorage.setItem("userId", data.userId);
// 					localStorage.setItem("isVolunteer", data.isVolunteer);
// 					localStorage.setItem("username", data.username);
// 					console.log(data.token, data.userId, data.isVolunteer, data.username);
// 					navigate("/Layout");
// 					setPassword("");
// 					setEmail("");
// 					setErrorMessage("");
// 				}
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 				setErrorMessage("Invalid email or password");
// 			});
// 	};

// 	return (
// 		<>
// 			<section>
// 				<Header />

// 				<br />
// 				<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
// 					{errMsg}
// 				</p>
// 				<h1>
// 					<b>#We are here</b>
// 				</h1>
// 				<br />
// 				<p className='title-bh1'>
// 					<u>Trainee Login</u>
// 				</p>
// 				<form>
// 					<label htmlFor='email'>Email:</label>
// 					<input type='email' id='email' ref={userRef} autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required />

// 					<label htmlFor='password'>Password:</label>
// 					<input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
// 					{/* <Link to="/Layout"> */}
// 					<button className='login__button' type='submit' onClick={handleSubmit}>
// 						Sign In
// 					</button>
// 					{/* </Link> */}
// 					{errorMessage && <p className='error'>{errorMessage}</p>}
// 				</form>
// 				<p>
// 					Need an Account?
// 					<br />
// 					<i>Click on the button below to sign up</i>
// 				</p>
// 			</section>
// 		</>
// 	);
// };

export default VolunteerLogin;
