const Class = require("../models/class");

// sign into class
exports.traineeClassSignIn = async (req, res, next) => {
	try {
		let user = {name: req.body.name, logintime: new Date(Date.now())};

		const todaysclass = await Class.findOne({_id: req.params.id});

		const traineeIndex = todaysclass.trainees.findIndex((trainee) => trainee.name === user.name);
		if (traineeIndex === -1) {		
			todaysclass.trainees.push(user);
		} else {
			todaysclass.trainees[traineeIndex].logintime = user.logintime;
		}

		const updatedClass = await todaysclass.save();

		res.status(200).json({todaysclass: updatedClass});
	} catch (error) {
		res.status(400).json({error: error});
	}
};

exports.traineeClassSignOut = async (req, res, next) => {
	try {
		let user = {name: req.body.name, logouttime: new Date(Date.now())};

		const todaysclass = await Class.findOne({_id: req.params.id});

		const traineeIndex = todaysclass.trainees.findIndex((trainee) => trainee.name === user.name);
		if (traineeIndex === -1) {
			res.status(400).json({error: "Trainee not found"});
			return;
		} else {
			todaysclass.trainees[traineeIndex].logouttime = user.logouttime;
		}

		const updatedClass = await todaysclass.save();

		res.status(200).json({todaysclass: updatedClass});
	} catch (error) {
		res.status(400).json({error: error});
	}
};

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

// getAllClasss
exports.getAllClasses = async (req, res, next) => {
	try {
		const classes = await Class.find();
		res.status(200).json(classes);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// getOneClass
exports.getOneClass = async (req, res, next) => {
	try {
		const found = await Class.findOne({_id: req.params.id});
		res.status(200).json(found);
	} catch (error) {
		res.status(400).json({error: error.message});
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
