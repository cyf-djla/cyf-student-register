const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const classSchema = mongoose.Schema({
	classId: {type: Number, required: true},
	name: {type: String, required: true},
	cohort: {type: String},
	time: {type: String, required: true},
	date: {type: Date, required: true},
	trainees: [{
		_id: {type: String, required: true},
		username: {type: String, required: true},
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
