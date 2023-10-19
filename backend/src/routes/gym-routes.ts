import express from 'express';
import * as GymController from '../controllers/gym-controller';

export const router = express.Router();

router.post('/createGym', GymController.createGym);
router.get('/getGymsOfType', GymController.getGymsOfType);