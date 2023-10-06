import * as express from "express";
import { Request, Response, NextFunction } from 'express';
import User from "../models/User";
import { isEmailValid } from "../utils/validation";
import { SignUpError } from "../constants/SignUpError";

export const signUpService = (user: User) => {
    let error: SignUpError;
    if (!isEmailValid(user.email)) { 
        error.email = 'Invalid email. Please try again'
    }
}