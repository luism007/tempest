import fs from 'node:fs/promises';
import UserData from '../models/UserData';
import path from 'path';
import ProfileData from '../models/ProfileData';
import GymData from '../models/GymData';
import TraineeData from '../models/TraineeData';
import MembershipData from '../models/MembershipData';
import MembershipToGymData from '../models/MembershipToGymData';
import TraineesToMembershipData from '../models/TraineesToMembershipData';

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

export const readMembershipData = async(): Promise<MembershipData> => {
    const data = await fs.readFile(`${dataPath}/memberships.json`, 'utf8');
    return JSON.parse(data);
}

export const writeMembershipData = async(data: any) => {
    await fs.writeFile(`${dataPath}/memberships.json`, JSON.stringify(data));
}

export const readMembershipsToGymData = async(): Promise<MembershipToGymData[]> => {
    const data = await fs.readFile(`${dataPath}/memberships-to-gym.json`, 'utf8');
    return JSON.parse(data);
}

export const writeMembershipsToGymData = async(data: any) => {
    await fs.writeFile(`${dataPath}/memberships-to-gym.json`, JSON.stringify(data));
}

export const readTraineesToMembershipData = async():Promise<TraineesToMembershipData> => {
    const data = await fs.readFile(`${dataPath}/trainee-to-membership.json`, 'utf8');
    return JSON.parse(data);
}

export const writeTraineesToMembershipData = async(data: any) => {
    await fs.writeFile(`${dataPath}/trainee-to-membership.json`, JSON.stringify(data));
}