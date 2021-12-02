import { Router } from 'express';
import { privateRoute } from '../middlewares/Auth';
import * as UserController from '../controllers/userController';
import * as AuthController from '../controllers/authController';
import * as AdsController from '../controllers/adsController';


const router = Router();

router.post('/user/sigin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/states', UserController.getStates);
router.get('/user/me', privateRoute, UserController.info);
router.put('/user/me', privateRoute, UserController.editAction);

router.put('/categories', privateRoute, AdsController.getCategories);
router.put('/add/add', privateRoute, AdsController.addAction);
router.put('/ad/list', privateRoute, AdsController.getList);
router.get('/ad/item', privateRoute, AdsController.getItem);
router.post('/ad/:id', privateRoute, AdsController.editAction);

export default router;