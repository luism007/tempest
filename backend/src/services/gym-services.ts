import { readGymData, writeGymData } from "../utils/data-util";
import Gym from "../models/Gym";
import GymData from "../models/GymData";
import {v4 as uuid } from 'uuid';

export const addGym = async(gym: Gym) => {
    const gymData = await readGymData();

    if (!gymData) {
        throw new Error('No gym data can be found at this time.');
    }

    if (gymData.gyms?.length === 0) {
        gymData.gyms = [];
    }

    const duplicateGyms = gymData.gyms.find((g: Gym) => (g.name === gym.name && g.street === gym.street && g.zip === gym.zip));

    if (duplicateGyms) {
        throw new Error (`${gym.name} already exists. You may be entering a gym at the same address.`);
    }

    try {
        gym.id = uuid();
        const gyms = [...gymData.gyms, gym];
        const updatedGymData = new GymData(gyms);
        await writeGymData(updatedGymData);
        return new Promise<Gym>(resolve => resolve(gym));
    } catch (e) {
        throw new Error (`Unable to create Gym: ${gym}`);
    }

}