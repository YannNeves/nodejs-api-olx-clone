import { Router } from 'express';
import * as UserController from '../controllers/userController';
import * as AuthController from '../controllers/authController';
import * as AdsController from '../controllers/adsController';


const router = Router();

router.get('/ping', (req, res) => {
  res.json({ pong: true });
});

router.post('/user/sigin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/states', UserController.getStates);
router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.put('/categories', AdsController.getCategories);
router.put('/add/add', AdsController.addAction);
router.put('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);

export default router;