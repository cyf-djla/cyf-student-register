const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login',  userCtrl.login);
router.get('/logout', userCtrl.logout);
router.post('/create', userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/:id' , userCtrl.getUserbyID)
router.get('/:username' , userCtrl.findUserByUserName)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router;