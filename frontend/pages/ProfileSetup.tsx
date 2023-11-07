import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MenuItem } from "primereact/menuitem";
import { Steps } from "primereact/steps";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const ProfileSetup = () => {

    const [setupSteps, setSetupSteps] = useState([{label: 'Setup Profile'}]);

    return (
        <>
            <Steps model={setupSteps}/>
            <CreateProfile/>
        </>
    )
}


const CreateProfile = () => {
    const dropdownOptions = ['Trainer', 'Trainee'];
    
    const submit = () => console.log(formState);

    const rules = new Map<string, Rule>();
    rules.set('firstName', { validation: new RegExp(/^$/), required: true });
    rules.set('lastName', { validation: new RegExp(/^$/), required: true });
    rules.set('profileType', { validation: null, required: true });

    const {valid, elementValue, formState, handleSubmit, handleInputChange, handleDropdownChange } = useForm(submit, rules);


    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <InputText name = "firstName"   required placeholder = "First Name" keyfilter= "alpha" onChange={handleInputChange}/>
            <InputText name = "lastName"    required placeholder = "Last Name" keyfilter= "alpha" onChange={handleInputChange} />
            <Dropdown  name = "profileType" required placeholder = "Profile Type" options={dropdownOptions} onChange={ handleDropdownChange } value={elementValue}/>
            <Button    name = "profileNext" label="Login" disabled = {(!valid) ? true : false} onClick={submit}/>
        </form>
    );
}

const CreateTrainee = () => {

}

const SelectGym = () => {

}

const SelectMembership = () => {

}
export default ProfileSetup;