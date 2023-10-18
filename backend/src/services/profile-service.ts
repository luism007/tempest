import UserData from "../models/UserData";
import Profile from "../models/Profile";
import User from "../models/User";
import { readProfileData, readUserData, writeProfileData } from "../utils/data-util";
import ProfileData from "../models/ProfileData";
import { v4 as uuid } from 'uuid';
import { updateUserProfileId } from "./user-service";

export const addProfile = async (profile: Profile, userId: string) => {

    let profileData = await readProfileData();

    const userData: UserData = await readUserData();

    if (!userData) {
        throw new Error('No user data can be found at this time.');
    }

    const userWithProfile = userData.users.find((usr: User) => usr.id === userId);

    if (userWithProfile) {
        if (userWithProfile.profileId !== null || userWithProfile.profileId?.length > 0) {
            throw new Error('This user already has a profile. Try updating instead.');
        }
    }

    if (!profileData) {
        profileData = new ProfileData();
        profileData.profiles = [];
    }

    let profiles = [...profileData.profiles];

    const profileId = uuid();
    profile.id = profileId;
    profile.userId = userId;
    profiles = [...profiles, profile];

    try {
        const updatedProfileData: ProfileData = new ProfileData(profiles);
        await writeProfileData(updatedProfileData);
        await updateUserProfileId(userId, profile.id);

        return new Promise<Profile>(resolve => resolve(profile));
    } catch (e) {
        throw new Error(`Unable to create profile: ${e}`);
    }
}