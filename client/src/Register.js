import React,{ useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "./Api/axios";
import "./StudentDashboard/Header.css"
import Header from "./StudentDashboard/Header";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


const REGISTER_URL = "https://cyf-student-register.onrender.com/api/auth/";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const emailRef = useRef();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [users])


  // useEffect(() => {
  //   console.log(users);
  // }, [users])

  function fetchUsers(){
    fetch("https://cyf-student-register.onrender.com/api/auth/")

    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log(error))
  }

  // useEffect(() =>{
  //   console.log(users)
  // }, )

  const [username, setUserName] = useState("");
  const [validuserName, setValiduserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [cohort, setCohort] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setValiduserName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    const isValidEmail = EMAIL_REGEX.test(email);
    setValidEmail(isValidEmail);
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPassword, email]);

  const handleSubmit =  (e) => {
    e.preventDefault();


    const newUser = {
      username,
      password, 
      cohort, 
      email,
      isVolunteer: false
    }

    fetch('http://127.0.0.1:4200/api/auth/signup', {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log(error))
  
    setSuccess(true);
    //clear state and controlled inputs
    //need value attrib on inputs for this
    setUserName("");
    setPassword("");
    setEmail("");
    setMatchPassword("");
    setCohort("")
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>Welcome you have successfully signed up</p>
        </section>
      ) : (
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
            <b className="mobile__title">#We are here</b>
          </h1>
          <br />
          <p className="title-bh1">
            <u className ="title-bh1">Trainee Register </u>
          </p>

          <form>

            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validuserName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validuserName || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              required
              aria-invalid={validuserName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserNameFocus(true)}
              onBlur={() => setUserNameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userNameFocus && username && !validuserName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="email">
              Email Address:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              ef={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Please enter a valid email address.
            </p>
            <label htmlFor="dropdown">Cohort</label>
            <select
              id="dropdown"
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
            >
              <option value="">Class Region</option>
              <option value="west-midlands-5">WM5</option>
              <option value="north-west-6">NW6</option>
              <option value="london-7">LDN7</option>
              <option value="south-africa-6">SA6</option>
            </select>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pwdnote"
              className={passwordFocus && !validPassword ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPassword? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button onClick={handleSubmit} type='submit'
              className="login__button"
              disabled={!validuserName || !validPassword || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <i>Click on the button below to sign in </i>
          </p>
        </section>
      )}
    </>
  );
};
export default Register;

