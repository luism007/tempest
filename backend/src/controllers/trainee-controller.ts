import { Request, Response, NextFunction } from "express";
import TraineeContract from "../api-contracts/TraineeContract";
import { addTrainee } from "../services/trainee-services";
import Trainee from "../models/Trainee";

export const createTrainee = async (req: Request, res: Response, next: NextFunction) => {
    const traineeContract: TraineeContract = req.body;
    
    addTrainee(traineeContract.trainee, traineeContract.profileId)
    .then((t: Trainee) => {
        res.send({message: 'Trainee created successfully'}).status(200);
    })
    .catch((e) => {
        res.send({message: `Failed to create trainee. Error: ${e}`}).status(400);
    })
}