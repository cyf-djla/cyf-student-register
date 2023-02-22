const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/create', userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/:id' , userCtrl.getUserbyID)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router;
  
//   // put routes here for now - I have already created user sign up and login look in controllers/ routes and middleware
//   // get users
//   const Student = mongoose.model('Student', {
// 	username: String,
// 	_id: mongoose.Schema.Types.ObjectId,
// 	email: String,
// 	cohort: String
//   });
  
//   // Define a new route that creates a new student document.
//   app.post('/api/students', async (req, res) => {
// 	try {
// 	  const student = new Student(req.body);
// 	  await student.save();
// 	  res.status(201).json({ message: 'Student created', student });
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });
  
//   // Define a new route that retrieves all student documents and returns them as a response.
//   app.get('/api/students', async (req, res) => {
// 	try {
// 	  const students = await Student.find();
// 	  res.json(students);
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });
  
//   // get user by id
//   // Define a new route that retrieves a student document by ID and returns it as a response.
//   app.get('/api/students/:id', async (req, res) => {
// 	try {
// 	  const student = await Student.findById(req.params.id);
// 	  if (!student) {
// 		return res.status(404).json({ error: 'Student not found' });
// 	  }
// 	  res.json(student);
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });
  
//   // get user by username
//   app.get('/api/students/username/:username', async (req, res) => {
// 	try {
// 	  const student = await Student.findOne({ username: req.params.username });
// 	  if (!student) {
// 		return res.status(404).json({ error: 'Student not found' });
// 	  }
// 	  res.json(student);
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });
  
  
//   // Define a new route that updates a student document by ID and returns it as a response.
//   app.put('/api/students/:id', async (req, res) => {
// 	try {
// 	  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
// 	  if (!student) {
// 		return res.status(404).json({ error: 'Student not found' });
// 	  }
// 	  res.json(student);
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });
  
  
//   // Define a new route that deletes a student document by ID.
//   app.delete('/api/students/:id', async (req, res) => {
// 	try {
// 	  const student = await Student.findByIdAndDelete(req.params.id);
// 	  if (!student) {
// 		return res.status(404).json({ error: 'Student not found' });
// 	  }
// 	  res.json({ message: 'Student deleted' });
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });