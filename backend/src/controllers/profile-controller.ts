import { Request, Response, NextFunction } from 'express';
import ProfileContract from '../constants/ProfileContract';
import { addProfile } from '../services/profile-service';
import Profile from '../models/Profile';

export const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    const user: ProfileContract = req.body;

    addProfile(user.profile, user.userId)
    .then((profile: Profile) => {
        res.send({message: `${profile.firstName}'s profile has been created successfully!`}).status(200);
    })
    .catch((e) => {
        res.send({message: `Failed to create profile: ${e}`}).status(400);
        next(e);
    });
}
