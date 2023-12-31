import fs from 'node:fs/promises';
import UserData from '../models/UserData';
import path from 'path';

const dataPath = path.resolve(__dirname, '../../data');

export const readUserData = async (): Promise<UserData> => {
    const data = await fs.readFile(`${dataPath}/users.json`, 'utf8');
    return JSON.parse(data);
}

export const writeUserData = async(data: any) => {
    await fs.writeFile(`${dataPath}/users.json`, JSON.stringify(data));
}