import User from "../models/User";
import { isEmailValid, isPasswordValid } from "../utils/validation";
import { AuthContract } from "../constants/AuthContract";
import { addUser, getUser, userEmailExists } from "./user-service";
import { createJSONToken } from "../utils/auth";

export const signUpService = async (newUser: User) => {
    const authContract: AuthContract = new AuthContract('');

    if (!isEmailValid(newUser.email)) {
        authContract.error = 'Invalid email. Please try again'
    }

    const exists = await userEmailExists(newUser.email);
    if (exists) {
        authContract.error = 'User with this email already exists.';
    }

    if(authContract.error?.length > 0){
        return authContract;
    };

    const createdUser = await addUser(newUser);
    const authToken = createJSONToken(createdUser.email);

    authContract.email = createdUser.email;
    authContract.token = authToken;

    return authContract;

}

export const loginService = async (user: User) => {
    const loginUser = await getUser(user.email);
    const authContract = new AuthContract('');
    if (!loginUser) {
        authContract.error = 'No user was found with this email. Please create an account.';
    }

    const isPwValid = await isPasswordValid(user.password, loginUser.password);

    if (!isPwValid) {
        authContract.error = 'Incorrect password. Please try again.';
    }

    if (authContract.error?.length > 0) {
        return authContract;
    }
    const token = createJSONToken(loginUser.email);

    authContract.email = loginUser.email;
    authContract.message = `${loginUser.email} has logged in!`;
    authContract.token = token;
    authContract.userId = loginUser.id;


    return authContract;
}