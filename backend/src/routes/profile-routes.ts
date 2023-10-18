import express from 'express';
import * as ProfileController from '../controllers/profile-controller';

export const router = express.Router();

router.post('/createProfile', ProfileController.createProfile);