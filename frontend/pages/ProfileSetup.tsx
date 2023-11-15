import React from "react";
import ProfileSetupContextProvider from "../store/ProfileSetupStore";
import { ProfileSetupWrapper } from "../components/profile-setup/ProfileSetupWrapper";
const ProfileSetup = () => {

    return (
        <ProfileSetupContextProvider>
            <ProfileSetupWrapper/>
        </ProfileSetupContextProvider>
    )
}
export default ProfileSetup;