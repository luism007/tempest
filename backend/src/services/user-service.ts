import { readUserData, writeUserData } from "../utils/data-util";
import { hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';
import User from '../models/User';
import UserData from "../models/UserData";
import { SignUpError } from "../constants/SignUpError";


export const userEmailExists = async(email: string): Promise<boolean> => {
    const userData = await readUserData();
    if (!userData || userData.users.length === 0) {
        throw new Error("No users found.");
    }
    const user = userData.users.find((usr) => usr.email === email);
    return (user) ? true : false;
}

export const getUser = async(email: string) => {

    const userData = await readUserData();

    if (!userData || userData.users.length === 0) {
      throw new Error("No users found.");
    }

    const user = userData.users.find((usr) => usr.email === email);

    if (!user) {
      throw new Error("Could not find user with given email");
    }

    return user;
}

export const addUser = async (user: User) => {
    const data = await readUserData();

    if (data.users.length === 0) {
        data.users = [];
    }

    let users = [...data.users];



    const userId = uuid();
    const hashedPw = await hash(user.password, 12);

    user.id = userId;
    user.password = hashedPw;
    users = [...users, user];

    try {
        const userData: UserData = new UserData(users);
        await writeUserData(userData);
        return new Promise<User>(resolve => resolve(user));
    } catch (e) {
        return new SignUpError(user.email, '', 'Failed to add user. Data writing issue.');
    }
}

export const updateUserProfileId = async (user: User, profileId: string) => {
    const userData = await readUserData();
    const users = [...userData.users];

    for (const usr of users){
        if (usr.id === user.id) {
            usr.profileId = profileId;
            return;
        }
    }

    const updatedUsers: UserData = new UserData(users);
    await writeUserData(updatedUsers);
}