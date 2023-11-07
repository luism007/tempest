import express from 'express';
import * as TraineeController from '../controllers/trainee-controller';

export const router = express.Router();

router.get('/getTrainees', TraineeController.getAllTrainees);
router.post('/createTrainee', TraineeController.createTrainee);

