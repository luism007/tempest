import { Request, Response, NextFunction } from 'express';
import GymContract from '../constants/GymContract';
import { addGym, getGymsByType } from '../services/gym-services';

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

export const getGymsOfType = async(req: Request, res: Response, next: NextFunction) => {
    const type = req.query.type as string;
    getGymsByType(type)
    .then((gyms) => {
        res.send({message: `All ${type} gyms returned!`, gyms}).status(200);
    })
    .catch((e) => {
        res.send({message: `No ${type} can be found. Error: ${e}`}).status(400);
    })
}