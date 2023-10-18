import Profile from "./Profile";

class ProfileData {
    profiles: Profile[];

    constructor (_profiles?: Profile[]) {
        this.profiles = _profiles || [];
    }
}

export default ProfileData;