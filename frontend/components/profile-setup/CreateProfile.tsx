import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { ProfileSetupContext } from "../../store/ProfileSetupStore";
import { saveProfileFormInLocalStorage, getProfileFormItem } from "../../utils/localStorageUtils";

export const CreateProfile = () => {
    const dropdownOptions = ['Trainer', 'Trainee'];
    const {form, handleProfileSetupNext} = useContext(ProfileSetupContext);

    const submit = () => {
        handleProfileSetupNext(formState)
        saveProfileFormInLocalStorage(formState);
    }


    const rules = new Map<string, Rule>();
    rules.set('firstName', { validation: new RegExp(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/), required: true });
    rules.set('lastName', { validation: new RegExp(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/), required: true });
    rules.set('profileType', { validation: null, required: true });

    const {valid, elementValue, formState, handleSubmit, handleInputChange, handleDropdownChange } = useForm(submit, rules);


    return(
        <form onSubmit={ handleSubmit }>
            <InputText name = "firstName"   required placeholder = "First Name" keyfilter= "alpha" onChange={handleInputChange} value={getProfileFormItem('firstName', formState)}/>
            <InputText name = "lastName"    required placeholder = "Last Name" keyfilter= "alpha" onChange={handleInputChange} value={getProfileFormItem('lastName', formState)}/>
            <Dropdown  name = "profileType" required placeholder = "Profile Type" options={dropdownOptions} onChange={ handleDropdownChange } value={getProfileFormItem('profileType', formState)}/>
            <Button    name = "profileNext" label="Next" disabled = {(!valid) ? true : false}/>
        </form>
    );
}
