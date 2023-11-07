import { Request, Response, NextFunction } from "express";
import TraineeContract from "../api-contracts/TraineeContract";
import { addTrainee, getTrainees } from "../services/trainee-services";
import Trainee from "../models/Trainee";

export const createTrainee = async (req: Request, res: Response, next: NextFunction) => {
    const traineeContract: TraineeContract = req.body;

    addTrainee(traineeContract.trainee, traineeContract.profileId)
    .then((t: Trainee) => {
        res.send({message: 'Trainee created successfully'}).status(200);
    })
    .catch((e) => {
        res.send({message: `Failed to create trainee. Error: ${e}`}).status(400);
        next(e);
    })
}

export const getAllTrainees = async(req: Request, res: Response, next: NextFunction) => {
    getTrainees()
    .then((trainees: Trainee[]) => {
        res.send({message: 'All trainees.', trainees}).status(200);
    })
    .catch((e) => {
        res.send({message: `Failed to get trainees. Error: ${e}`}).status(400);
        next(e);
    })
}