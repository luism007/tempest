import { MenuItem } from "primereact/menuitem";
import React from "react";
const CreateProfile = () => {
    const createAccountSteps: MenuItem[] = [{label: 'Create Credentials'}, {label: 'Security Questions'}, {label: 'Profile Setup'}];
    const loginAccountSteps: MenuItem[] = [{label: 'Enter Credentials'}];
    const trainerSteps: MenuItem[] = [{label: 'Connect to a Gym'}];
    const traineeSteps: MenuItem[] = [{label: 'Add Physical Information'}, {label: 'Connect to a Gym - Add a Coach'}];
}
export default CreateProfile;