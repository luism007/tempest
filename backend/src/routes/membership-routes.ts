import express from 'express';
import * as MembershipController from '../controllers/membership-controller';
export const router = express.Router();

router.post('/membershipsFromGym/:id', MembershipController.getGymMemberships);
router.post('/createMembership/:id', MembershipController.addGymMembership);