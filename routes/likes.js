const express = require('express');
const router = express.Router(); 

const likesCtrl = require('../controllers/likes');
const auth = require('../middleware/auth');

router.get('/likes/getall', auth, likesCtrl.getLikes);
router.post('/likes/add', auth, likesCtrl.addLike);

module.exports = router;