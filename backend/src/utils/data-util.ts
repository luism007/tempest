import fs from 'node:fs/promises';
import UserData from '../models/UserData';
import path from 'path';
import ProfileData from '../models/ProfileData';
import GymData from '../models/GymData';
import TraineeData from '../models/TraineeData';

const dataPath = path.resolve(__dirname, '../../data');

export const readUserData = async (): Promise<UserData> => {
    const data = await fs.readFile(`${dataPath}/users.json`, 'utf8');
    return JSON.parse(data);
}

export const writeUserData = async(data: any) => {
    await fs.writeFile(`${dataPath}/users.json`, JSON.stringify(data));
}


export const readProfileData = async (): Promise<ProfileData> => {
    const data = await fs.readFile(`${dataPath}/profiles.json`, 'utf8');
    return JSON.parse(data);
}
export const writeProfileData = async(data: any) => {
    await fs.writeFile(`${dataPath}/profiles.json`, JSON.stringify(data));
}

export const readTraineeData = async(): Promise<TraineeData> => {
    const data = await fs.readFile(`${dataPath}/trainees.json`, 'utf8');
    return JSON.parse(data);
}

export const writeTraineeData = async (data: any) => {
  await fs.writeFile(`${dataPath}/trainees.json`, JSON.stringify(data));
};

export const writeGymData = async (data: any) => {
    await fs.writeFile(`${dataPath}/gyms.json`, JSON.stringify(data));
}

export const readGymData = async(): Promise<GymData> => {
    const data = await fs.readFile(`${dataPath}/gyms.json`, 'utf8');
    return JSON.parse(data);
}