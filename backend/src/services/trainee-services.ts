import { readProfileData, readTraineeData, writeTraineeData } from "../utils/data-util";
import Trainee from "../models/Trainee";
import TraineeData from "../models/TraineeData";
import {v4 as uuid } from 'uuid';

export const addTrainee = async (trainee: Trainee, profileId: string) => {
    const traineeData: TraineeData = await readTraineeData();

    if (!traineeData) {
        throw new Error('No trainee data can be found at this time.');
    }

    const traineeWithProfile = traineeData.trainees.find((t: Trainee) => t.profileId === profileId);

    if (traineeWithProfile) {
        throw new Error('This profile already is a trainee.');
    }

    const traineeId = uuid();
    trainee.id = traineeId;
    trainee.profileId = profileId;

    const trainees = [...traineeData.trainees, trainee];

    try {
        const updatedTraineeData: TraineeData = new TraineeData(trainees);
        await writeTraineeData(updatedTraineeData);
        return new Promise<Trainee>(resolve => resolve(trainee));
    } catch (e) {
        throw new Error(`Unable to create profile: ${e}`);
    }
}

export const getTrainees = async ()=> {
    const traineeData: TraineeData = await readTraineeData();
    if (traineeData.trainees?.length <= 0 || traineeData === null) {
        throw new Error('No trainee data found. Please try again.');
    }

    return new Promise<Trainee[]>(resolve => resolve(traineeData.trainees));
}