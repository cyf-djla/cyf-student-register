* https://www.figma.com/file/hNXXZs3e2Zs04Xa3HzxpKC/We-are-Here-(CYF-register)?node-id=0%3A1&t=izBUOPKUZa7GrqA5-0

* https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku/

  const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://127.0.0.1:4200/api/auth/login", {
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
				localStorage.setItem("token", data.token, "userId", data.userId, "isVolunteer", data.isVolunteer, "username", data.username);
				console.log(data.token, data.userId, data.isAdmin, data.username)
				navigate("/Layout");
				setPassword("");
				setEmail("");
				setErrorMessage("");
        setSuccess(true);
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage("Invalid email or password");
			});
	};
