import { useRef, useState, useEffect, useContext } from "react";
import axios from "./Api/axios";
import AuthContext from "./context/AuthProvider";

const LOGIN_URL = "http://localhost:8080/login";

const VolunteerLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [validVolunteers, setValidVolunteers] = useState([]);

  useEffect(() => {
    userRef.current.focus();
    // Load valid volunteers from JSON file
    fetch("/volunteer.json")
      .then((response) => response.json())
      .then((data) => setValidVolunteers(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrMsg("");

    // Check if volunteer credentials are valid
    const validVolunteer = validVolunteers.find((v) => v.user === user && v.pwd === pwd);

    if (validVolunteer) {
      // if volunteer credentials are valid
      setAuth({
        user: validVolunteer.user,
        pwd: validVolunteer.pwd,
        roles: ["volunteer"],
        accessToken: "fake_access_token",
      });
      setUser("");
      setPwd("");
      setSuccess(true);
    } else {
      // Volunteer credentials are invalid
      setErrMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <b>Successful Entry</b>
            {/* <a href="#">Go to Home</a> */}
          </p>
        </section>
      ) : (
        <section>
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
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <i>Click on the button below to sign up</i>
          </p>
        </section>
      )}
    </>
  );
};

export default VolunteerLogin;

