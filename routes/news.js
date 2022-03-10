const express = require('express');
const router = express.Router(); 

const newsCtrl = require('../controllers/news');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get('/publications', auth, newsCtrl.getAllPublications);
router.get('/publications/:id', auth, newsCtrl.getOnePublication);
router.post('/publications/add', auth, multer, newsCtrl.addPublication);
router.post('/publications/update', auth, multer, newsCtrl.updatePublication);
router.delete('/publications/delete', auth, newsCtrl.deletePublication);


module.exports = router;