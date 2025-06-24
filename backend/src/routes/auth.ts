import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();
const authController = new AuthController();

router.post('/signup', authController.signUp.bind(authController));
router.post('/signin', authController.signIn.bind(authController));

export default router;//..