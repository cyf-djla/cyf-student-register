CYF student attendance register.

npm i in client

npm i in server

you may need to npm i helmet in server separatley

npm start in client to run server

nodemon server in server to run backend

Routes


localhost:4200/api/auth/ -post signup
localhost:4200/api/auth/login -post login
localhost:4200/api/auth/logout -get logout
localhost:4200/api/auth/ -get get all users
localhost:4200/api/auth/:id -get get user by id
localhost:4200/api/auth/:username -get user by username
localhost:4200/api/auth/:id -put update user
localhost:4200/api/auth/:id -delete delete user
localhost:4200/api/auth/create -post create new user

localhost:4200/api/classes/ -get get all classes
localhost:4200/api/classes/:id -get get one class by id
localhost:4200/api/classes/ -post create new class
localhost:4200/api/classes/:id -put modify class
localhost:4200/api/classes/:id -delete delete class
localhost:4200/api/classes/classsignin/:id -post trainee class sign in
localhost:4200/api/classes/classsignout/:id -post trainee class sign out
localhost:4200/api/classes/volunteersignin/:id -post volunteer sign in
localhost:4200/api/classes/volunteersignout/:id -post trainee classsign in
localhost:4200/api/classes/postflag/:id -post trainee flag

  const userRef = useRef();
  const errRef = useRef();
  const emailRef = useRef();

  // if someone attempts to edit button messing with the code
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);

    try {
      let result = await axios.post(
        `${REGISTER_URL}/signup`,
        JSON.stringify({ username, password, email, cohort}),
        {
          headers: { "Content-Type": "application/json" },
        
        }
        
      );
      console.log(result.response.data);
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUserName("");
      setPassword("");
      setEmail("");
      setMatchPassword("");
      setCohort("")
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      // errRef.current.focus();
    }
