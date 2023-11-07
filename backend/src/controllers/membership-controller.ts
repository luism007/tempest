import {Request, Response, NextFunction } from 'express';
import { createMembership, getMembershipsFromGym } from '../services/membership-services';

export const getGymMemberships = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gymId = req.params.id;
        const memberships = await getMembershipsFromGym(gymId);
        if (!memberships || memberships?.length === 0) {
            res.send({message: `No memberships found for this gym`}).status(400);
        }
        res.send({message: `Memberships found for this gym.`, memberships}).status(200);
    } catch (e) {
        res.send({message: `No memberships found for this gym. Error: ${e}`}).status(400);
        next(e);
    }

}

export const addGymMembership = async (req: Request, res: Response, next: NextFunction) =>{

        const membership = req.body;
        const gymId = req.params.id;

        await createMembership(membership, gymId)
          .then((newMembership) => {
            res
              .send({
                message: `${newMembership.membershipName} added successfully!`,
              })
              .status(201);
          })
          .catch((e) => {
            res.send({ message: `Failed to create membership. Error: ${e}` });
            next(e);
          });
}