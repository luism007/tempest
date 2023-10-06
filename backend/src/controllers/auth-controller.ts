import * as AuthService from '../services/auth-services';
import { Application, Request, Response, NextFunction } from 'express';

export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    try {
        const contract = await AuthService.signUpService(user);

        if (contract.error) return res.send({message: contract.error}).status(401);

        return res.send({message: `${contract.user.email} has signed up!`, token: contract.token }).status(200);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    signUpController
}