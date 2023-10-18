import { Request, Response, NextFunction } from 'express';
import GymContract from '../constants/GymContract';
import { addGym } from '../services/gym-services';

export const createGym = async(req: Request, res: Response, next: NextFunction) => {
    const gym: GymContract = req.body;

    addGym(gym.gym)
    .then((g) => {
        res.send({message: `${g.name} has been created.`}).status(200);
    })
    .catch((e) => {
        res.send({message: `Failed to create gym: ${e}`}).status(400);
        next(e);
    });
}