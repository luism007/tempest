import express from 'express';
import * as AuthController from '../controllers/auth-controller'

export const router = express.Router();

router.post('/signup', AuthController.signUpController);
router.post('/login', AuthController.loginController);