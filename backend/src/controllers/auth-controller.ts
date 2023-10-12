import * as AuthService from '../services/auth-services';
import { Request, Response, NextFunction } from 'express';

export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    try {
        const contract = await AuthService.signUpService(user);

        if (contract.error?.length > 0) {

            return res.status(401).send({message: contract.error});
        }

        return res.send({message: `${contract.email} has signed up!`, token: contract.token }).status(200);
    } catch (e) {
        next(e);
    }
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    try {
        const contract = await AuthService.loginService(user);

        if(contract.error?.length > 0) {
            return res.status(401).send({message: contract.error });
        }
        return res.send({userId: contract.userId, token: contract.token, email: contract.email, message: contract.message }).status(200);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    signUpController,
    loginController
}