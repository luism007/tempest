import * as express from "express";
import { Request, Response, NextFunction } from 'express';
import User from "../models/User";
import { isEmailValid } from "../utils/validation";
import { SignUpError } from "../constants/SignUpError";
import { addUser, getUser, userEmailExists } from "./user-service";
import { createJSONToken } from "../utils/auth";

export const signUpService = async (newUser: User) => {
    const error: SignUpError = new SignUpError('');

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