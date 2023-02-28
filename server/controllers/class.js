const Class = require("../models/class");

// trainee sign into class
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

// trainee sign out of class
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

// trainee sign out of class
exports.traineeFlags = async (req, res, next) => {
	try {
		let user = {name: req.body.name, flags: req.body.value};

		const todaysclass = await Class.findOne({_id: req.params.id});

		const traineeIndex = todaysclass.trainees.findIndex((trainee) => trainee.name === user.name);
		if (traineeIndex === -1) {
			res.status(400).json({error: "Trainee not found"});
			return;
		} else {
			todaysclass.trainees[traineeIndex].flags = user.flags;
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






