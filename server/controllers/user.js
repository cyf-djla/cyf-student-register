const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// signup
exports.signup = async (req, res, next) => {
	console.log('hit here')
	console.log(req.body)
	try {
		const hash = await bcrypt.hash(req.body.password, 10);
		const user = new User({
			email: req.body.email,
			username: req.body.username,
			cohort: req.body.cohort,
			password: hash,
			isVolunteer: req.body.isVolunteer,
		});
		await User.create(req.body);
		res.status(201).json({
			message: "User added successfully!",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
};

// login
exports.login = async (req, res, next) => {
	try {
		const user = await User.findOne({email: req.body.email});
		if (!user) {
			return res.status(401).json({
				error: new Error("User not found!"),
			});
		}
		const valid = await bcrypt.compare(req.body.password, user.password);
		if (!valid) {
			return res.status(401).json({
				error: new Error("Incorrect password!"),
			});
		}
		const token = jwt.sign({userId: user._id, username: user.username, isVolunteer: user.isVolunteer}, process.env.TOKEN, {expiresIn: "24h"});
		// res.cookie("nToken", token, {maxAge: 900000, httpOnly: true});
		res.status(200).json({
			userId: user._id,
			token: token,
			isVolunteer: user.isVolunteer,
			username: user.username
		});
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
};

// logout
exports.logout = async (req, res) => {
	try {
		res.clearCookie("nToken");
		res.send("userisloggedout");
		res.redirect("/");
	} catch (error) {
		res.status(500).json({error: error});
	}
};

// get all users
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({error: error});
	}
};

// delete user
exports.deleteUser = async (req, res, next) => {
	try {
		if (req.auth.isVolunteer !== true) {
			return res.status(403).json({message: "You are not authorised"});
		}
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({error: "User not found"});
		}
		res.json({message: "User deleted"});
	} catch (error) {
		res.status(500).json({error: error});
	}
};

// Find user by ID - working
exports.getUserbyID = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({error: "User not found"});
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({error: error});
	}
};

// Create user
exports.createUser = async (req, res) => {
	try {
		if (req.auth.isVolunteer !== true) {
			return res.status(403).json({message: "You are not authorised"});
		}
		const user = new User(req.body);
		await User.save();
		res.status(201).json({message: "Student created", user});
	} catch (error) {
		res.status(500).json({error: error});
	}
};

// update user
exports.updateUser = async (req, res, next) => {
	try {
		if (req.auth.isVolunteer !== true) {
			res.status(403).json({message: "You are not authorised"});
			return;
		}
		const updatedUser = await User.findOneAndUpdate(
			{_id: req.params.id},
			{
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
				cohort: req.body.cohort,
				isVolunteer: req.body.isVolunteer,
			},
			{new: true}
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(400).json({error: error});
	}
};

// find by username
exports.findUserByUserName = async (req, res) => {
	try {
		const user = await User.findOne({username: req.params.username});
		if (!user) {
			return res.status(404).json({error: "User not found"});
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({error: error});
	}
};
