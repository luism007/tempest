import express from 'express';
import * as MembershipController from '../controllers/membership-controller';
export const router = express.Router();

router.get('/membershipsFromGym', MembershipController.getGymMemberships);