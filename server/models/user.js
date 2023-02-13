const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  class_attendance:[{
    class_name: {type: String, required: true},
    class_date:{type: Date, required:true},
    class_checkin:{type: Number, default:(new Date()).getTime()}
  }]
  // is_student: {Boolean, required: true}
}, {
  usePushEach: true
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);


