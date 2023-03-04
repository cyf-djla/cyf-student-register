import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./Api/axios";
import "./index.css";
import "./StudentDashboard/Header.css"
import Header from "./StudentDashboard/Header";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@volunteers\.codeyourfuture\.io$/;

const VOLUNTEER_REGISTER_URL = "/VolunteerRegister";

const VolunteerRegister = () => {
  const userRef = useRef();
  const errRef = useRef();
  const emailRef = useRef();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [users])

  function fetchUsers(){
  fetch("https://cyf-student-register.onrender.com/api/auth/")
  .then((res) => {
    return res.json();
  })
  .then((data) => setUsers(data))
  .catch((error) => console.log(error));
}

  const [username, setUserName] = useState([]);
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
      email,
      isVolunteer: true
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
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>Welcome you have successfully Signed up as a volunteer</p>
        </section>
      ) : (
        <section>
        <Header/>
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
            <u>Volunteer Register </u>
          </p>
          <form onSubmit={handleSubmit}>
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
              CYF Email:
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
              aria-describedby="passwordnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="passwordnote"
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
                className={validMatch || !matchPassword ? "hide" : "invalid"}
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

            <button
              className="sign-up-button"
              disabled={!validuserName || !validPassword || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p className = "bottom-description">
            Already registered?
            <br />
            <i>Click on the Menu at the top right to return to the home page  </i>
          </p>
        </section>
      )}
    </>
  );
};

export default VolunteerRegister;