const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res) => {
  res.json({ pong: true });
});

router.post('/user/sigin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/status', UserController.getStates);
router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.put('/categories', AdsController.getCategories);
router.put('/add/add', AdsController.addAction);
router.put('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);




module.exports = router;