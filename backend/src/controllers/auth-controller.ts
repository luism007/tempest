import * as AuthService from '../services/auth-services';
import { Application, Request, Response, NextFunction } from 'express';
export const signUpController = (req: Request, res: Response, next: NextFunction) => {
    return AuthService.signUpService(req, res, next);
}

module.exports = {
    signUpController
}