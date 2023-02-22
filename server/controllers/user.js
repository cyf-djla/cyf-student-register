const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// signup working
exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10).then((hash) => {
		const user = new User({
			email: req.body.email,
			username: req.body.username,
			cohort: req.body.cohort,
			password: hash,
			isVolunteer: req.body.isVolunteer,
		});
		user
			.save()
			.then(() => {
				res.status(201).json({
					message: "User added successfully!",
				});
			})
			.catch((error) => {
				res.status(500).json({
					error: error,
				});
			});
	});
};

// login working
exports.login = (req, res, next) => {
	User.findOne({email: req.body.email})
		.then((user) => {
			if (!user) {
				return res.status(401).json({
					error: new Error("User not found!"),
				});
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({
							error: new Error("Incorrect password!"),
						});
					}
					const token = jwt.sign({userId: user._id}, "RANDOM_TOKEN_SECRET", {expiresIn: "24h"});
					res.status(200).json({
						userId: user._id,
						token: token,
					});
				})
				.catch((error) => {
					res.status(500).json({
						error: error,
					});
				});
		})
		.catch((error) => {
			res.status(500).json({
				error: error,
			});
		});
};


// get all users working
exports.getUsers = async (req, res) => {
		try {
		  const users = await User.find();
		  res.json(users);
		} catch (error) {
		  console.error(error);
		  res.status(500).json({ error: 'Internal server error' });
		}
}

// delete user working
exports.deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}
		res.json({ message: 'User deleted' });
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

// Find user by ID - working
exports.getUserbyID = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

// Create user
exports.createUser = async (req, res) => {
	try {
		const user = new User(req.body);
		await User.save();
		res.status(201).json({ message: 'Student created', user });
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

// update user BUG
exports.updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

exports.findUserByUserName = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });
		if (!user) {
		  return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

  
  

  
  

