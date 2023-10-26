import {Request, Response, NextFunction } from 'express';
import { getMembershipsFromGym } from '../services/membership-services';

export const getGymMemberships = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const gymId = req.body;
        const memberships = await getMembershipsFromGym(gymId);
        if (!memberships || memberships?.length === 0) { 
            res.send({message: `No memberships found for this gym`}).status(400);
        }
        res.send({message: `Memberships found for this gym.`, memberships: memberships}).status(200);
    } catch (e) { 
        res.send({message: `No memberships found for this gym. Error: ${e}`}).status(400);
        next(e);
    }

}