const Class = require("../models/class");

// modify Class
exports.modifyClass = async (req, res, next) => {
	try {
		if (req.auth.isVolunteer !== true) {
			res.status(403).json({message: "You are not authorised"});
			return;
		}
		const updatedClass = await Class.findOneAndUpdate(
			{_id: req.params.id},
			{
				name: req.body.name,
				time: req.body.time,
				date: req.body.date,
			},
			{new: true}
		);
		res.status(200).json(updatedClass);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// delete a Class
exports.deleteClass = async (req, res, next) => {
	try {
		const found = await Class.findOne({_id: req.params.id});

		if (req.auth.isVolunteer !== true) {
			res.status(403).json({message: "You are not authorized"});
			return;
		}

		await Class.deleteOne({_id: req.params.id});

		res.status(200).json({message: `${found.name} has been deleted`});
	} catch (error) {
		res.status(400).json({error: error});
	}
};

// createClass
exports.createClass = async (req, res, next) => {
	try {
		if (req.auth.isVolunteer !== true) {
			res.status(403).json({message: "You are not authorised"});
			return;
		}
		let newClass = new Class({
			classId: req.body.classId,
			name: req.body.name,
			time: req.body.time,
			date: req.body.date,
		});
		await newClass.save();
		res.status(201).json({message: "Class saved successfully"});
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// volunteer sign out of class
exports.volunteerClassSignOut = async (req, res, next) => {
	try {
		let user = {name: req.body.name, logouttime: new Date(Date.now())};

		const todaysclass = await Class.findOne({_id: req.params.id});

		const volunteerIndex = todaysclass.volunteers.findIndex((volunteer) => volunteer.name === user.name);
		if (volunteerIndex === -1) {
			res.status(400).json({error: "Trainee not found"});
			return;
		} else {
			todaysclass.volunteers[volunteerIndex].logouttime = user.logouttime;
		}

		const updatedClass = await todaysclass.save();

		res.status(200).json({todaysclass: updatedClass});
	} catch (error) {
		res.status(400).json({error: error});
	}
};

// volunteer sign in to class
exports.volunteerClassSignIn = async (req, res, next) => {
	try {
		let user = {name: req.body.name, logintime: new Date(Date.now())};

		const todaysclass = await Class.findOne({_id: req.params.id});

		const volunteerIndex = todaysclass.volunteers.findIndex((volunteer) => volunteer.name === user.name);
		if (volunteerIndex === -1) {		
			todaysclass.volunteers.push(user);
		} else {
			todaysclass.volunteers[volunteerIndex].logintime = user.logintime;
		}

		const updatedClass = await todaysclass.save();

		res.status(200).json({todaysclass: updatedClass});
	} catch (error) {
		res.status(400).json({error: error});
	}
};