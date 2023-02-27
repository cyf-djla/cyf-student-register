const express = require('express');
const router = express.Router();

const classCtrl = require('../controllers/class');

router.get("/", classCtrl.getAllClasses);
router.get('/:id', classCtrl.getOneClass);
router.post('/', classCtrl.createClass);
router.put('/:id', classCtrl.modifyClass);
router.delete('/:id',classCtrl.deleteClass);
router.post('/classsignin/:id', classCtrl.traineeClassSignIn);
router.post('/classsignout/:id', classCtrl.traineeClassSignOut);
router.post('/volunteersignin/:id', classCtrl.volunteerClassSignIn);
router.post('/volunteersignout/:id', classCtrl.volunteerClassSignOut);

module.exports = router;