import * as AuthService from '../services/auth-services';
import { Application, Request, Response, NextFunction } from 'express';
export const signUpController = (req: Request, res: Response, next: NextFunction) => {
    const user = req.body();
    AuthService.signUpService(user);
   return res.send({message: "Signup!"}).status(200);
}

module.exports = {
    signUpController
}