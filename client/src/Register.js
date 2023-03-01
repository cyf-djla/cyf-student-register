import React,{ usernameef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./Api/axios";
import "./StudentDashboard/Header.css"
import Header from "./StudentDashboard/Header";

const username_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const password_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const REGISTER_URL = "/register";

const Register = () => {
  const usernameRef = usernameef();
  const errRef = usernameef();
  const emailRef = usernameef();

  const [username, setusername] = useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setusernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setpassword] = useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);

  const [matchpassword, setMatchpassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [cohort, setcohort] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(username_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    const isValidEmail = EMAIL_REGEX.test(email);
    setValidEmail(isValidEmail);
  }, [email]);

  useEffect(() => {
    setValidpassword(password_REGEX.test(password));
    setValidMatch(password === matchpassword);
  }, [password, matchpassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchpassword, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if someone attempts to edit button messing with the code
    const v1 = username_REGEX.test(username);
    const v2 = password_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password, email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setusername("");
      setpassword("");
      setEmail("");
      setMatchpassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("usernamename Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
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
            <b>#We are here</b>
          </h1>
          <br />
          <p className="title-bh1">
            <u className ="title-bh1">Student Register </u>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="usernamename">
              usernamename:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="usernamename"
              ref={usernameRef}
              autoComplete="off"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setusernameFocus(true)}
              onBlur={() => setusernameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                usernameFocus && username && !validName ? "instructions" : "offscreen"
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
              onChange={(e) => setcohort(e.target.value)}
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
                className={validpassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validpassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
              aria-invalid={validpassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setpasswordFocus(true)}
              onBlur={() => setpasswordFocus(false)}
            />
            <p
              id="passwordnote"
              className={passwordFocus && !validpassword ? "instructions" : "offscreen"}
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
            <label htmlFor="confirm_password">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchpassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchpassword ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setMatchpassword(e.target.value)}
              value={matchpassword}
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
              className="login__button"
              disabled={!validName || !validpassword || !validMatch ? true : false}
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
