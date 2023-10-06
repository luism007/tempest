import fs from 'node:fs/promises';

export const readUserData = async () => {
    const data = await fs.readFile('../../data/users.json', 'utf8');
    return JSON.parse(data);
}

export const writeUserData = async(data: any) => {
    await fs.writeFile('../../data/users.json', JSON.stringify(data));
}