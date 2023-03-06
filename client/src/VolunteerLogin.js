import React, {useRef, useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import "./StudentDashboard/Header.css";
import Header from "./StudentDashboard/Header";
import "./index.css";

const VolunteerLogin = () => {
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
					navigate("/Volunteerdashboard");
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

				<br />
				<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
					{errMsg}
				</p>
				<h1>
					<b>#We are here</b>
				</h1>
				<br />
				<div className='title-bh1'>
					<p className='title-bh1'>
						<u>Volunteer Login</u>
					</p>
				</div>
				<form>
					<label htmlFor='email'>Email:</label>
					<input type='email' id='email' ref={userRef} autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required />

					<label htmlFor='password'>Password:</label>
					<input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} required />

					<button className='login__button' type='submit' onClick={handleSubmit}>
						Sign In
					</button>

					{errorMessage && <p className='error'>{errorMessage}</p>}
				</form>
				<p className='bottom-description'>
					Need an Account?
					<br />
					<i>Click on the Menu at the top right to return to the home page </i>
				</p>
			</section>
		</>
	);
};

export default VolunteerLogin;
