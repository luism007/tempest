import Profile from "../models/Profile";

class ProfileContract {
    profile: Profile;
    userId: string;

    constructor (
        _profile ?: Profile,
        _userId ?: string
    ) {
        this.profile = _profile;
        this.userId = _userId;
    }
}

export default ProfileContract;