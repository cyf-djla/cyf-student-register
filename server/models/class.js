const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const classSchema = mongoose.Schema({
	classId: {type: Number, required: true},
	name: {type: String, required: true},
	cohort: {type: String, required: true},
	time: {type: String, required: true},
	date: {type: Date, required: true},
	trainees: [{
		name: {type: String, required: true},
		logintime: {type: Date},
		logouttime: {type: Date},
		flags: [{type: String}]
	  }],
	volunteers:[{
		name: {type: String, required: true},
		logintime: {type: Date},
		logouttime: {type: Date}
	  }]
});

classSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Class", classSchema);
