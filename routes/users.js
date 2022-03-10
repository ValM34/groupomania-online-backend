const express = require('express');
const router = express.Router(); 

const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');


router.post('/signup', usersCtrl.signupUser);
router.post('/signin', usersCtrl.signinUser);
router.get('/all', auth, usersCtrl.getAllUsers); // Nom, prénom, id.
router.get('/', auth, usersCtrl.isLoggedIn);
router.delete('/delete', auth, usersCtrl.deleteUser);
router.get('/isadmin', auth, usersCtrl.isAdmin);

module.exports = router;