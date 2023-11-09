import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MenuItem } from "primereact/menuitem";
import { Steps } from "primereact/steps";
import React, { useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import ProfileSetupContextProvider from "../store/ProfileSetupStore";
import { ProfileSetupContext } from "../store/ProfileSetupStore";
const ProfileSetup = () => {

    const [setupSteps, setSetupSteps] = useState([{label: 'Setup Profile'}]);

    return (
        <ProfileSetupContextProvider>
            <Steps model={setupSteps}/>
            <CreateProfile/>
            <CreateTrainee/>
            <SelectGym/>
            <SelectMembership/>
        </ProfileSetupContextProvider>
    )
}


const CreateProfile = () => {
    const dropdownOptions = ['Trainer', 'Trainee'];
    const profileSetupContext = useContext(ProfileSetupContext);

    const submit = (e) => {
        profileSetupContext.handleProfileSetupNext(formState)
    }


    const rules = new Map<string, Rule>();
    rules.set('firstName', { validation: new RegExp(/^$/), required: true });
    rules.set('lastName', { validation: new RegExp(/^$/), required: true });
    rules.set('profileType', { validation: null, required: true });

    const {valid, elementValue, formState, handleSubmit, handleInputChange, handleDropdownChange } = useForm(submit, rules);


    return(
        <form onSubmit={ handleSubmit }>
            <InputText name = "firstName"   required placeholder = "First Name" keyfilter= "alpha" onChange={handleInputChange}/>
            <InputText name = "lastName"    required placeholder = "Last Name" keyfilter= "alpha" onChange={handleInputChange} />
            <Dropdown  name = "profileType" required placeholder = "Profile Type" options={dropdownOptions} onChange={ handleDropdownChange } value={elementValue}/>
            <Button    name = "profileNext" label="Login" disabled = {(!valid) ? true : false}/>
        </form>
    );
}

const CreateTrainee = () => {
    return(
        <>
            <h1> Setup Your Trainee Profile </h1>
        </>
    )
}

const SelectGym = () => {
    return(
        <>
            <h1> Select Your Gym </h1>
        </>
    )
}

const SelectMembership = () => {
    return(
        <>
            <h1> Choose Your Membership </h1>
        </>
    )
}
export default ProfileSetup;