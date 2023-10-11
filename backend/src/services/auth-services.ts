import User from "../models/User";
import { isEmailValid, isPasswordValid } from "../utils/validation";
import { AuthContract } from "../constants/AuthContract";
import { addUser, getUser, userEmailExists } from "./user-service";
import { createJSONToken } from "../utils/auth";

export const signUpService = async (newUser: User) => {
    const error: AuthContract = new AuthContract('');

    if (!isEmailValid(newUser.email)) {
        error.email = 'Invalid email. Please try again'
    }

    const exists = await userEmailExists(newUser.email);
    if (exists) {
        error.email = 'User with this email already exists.';
    }

    if(error.email?.length > 0) return { error };

    const createdUser = await addUser(newUser);
    const authToken = createJSONToken(createdUser.email);
    return { user: createdUser, token: authToken };

}

export const loginService = async (user: User) => {
    const loginUser = await getUser(user.email);
    const response = new AuthContract('');
    if (!loginUser) {
        response.error = 'No user was found with this email. Please create an account.';
    }

    const isPwValid = await isPasswordValid(user.password, loginUser.password);

    if (!isPwValid) {
        response.error = 'Incorrect password. Please try again.';
    }

    if (response.error?.length > 0) {
        return response;
    }
    const token = createJSONToken(loginUser.email);

    response.email = loginUser.email;
    response.message = `${loginUser.email} has logged in!`;
    response.token = token;
    response.userId = loginUser.id;


    return response;
}