import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MenuItem } from "primereact/menuitem";
import { Steps } from "primereact/steps";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import ProfileSetupContextProvider from "../store/ProfileSetupStore";
import { ProfileSetupContext } from "../store/ProfileSetupStore";
import { useMultistepper } from "../hooks/useMultistepper";
const ProfileSetup = () => {

    return (
        <ProfileSetupContextProvider>
            <ProfileSetupWrapper/>
        </ProfileSetupContextProvider>
    )
}

const saveInLocalStorage = (updatedData) => {
    const currentData = localStorage.getItem('profileForm');
    if (currentData !== null) { 
        const parsed = JSON.parse(currentData);
        const newData = {...parsed, ...updatedData};
        localStorage.setItem('profileForm', JSON.stringify(newData));
    } else { 
        const stringified = JSON.stringify(updatedData);
        localStorage.setItem('profileForm', stringified);
    }
}
const getProfileFormItem = (field: string, currentForm) => {
    const profileForm = localStorage.getItem('profileForm');
    if (profileForm !== null) { 
        const form  = JSON.parse(profileForm);
        return form[field];
    } else { 
        return currentForm[field];
    }
}
const ProfileSetupWrapper = () => {
    const [labels, setLabels] = useState([{label: 'Setup Profile'}]);
    const components = [<CreateProfile/>, <CreateTrainee/>, <SelectGym/>, <SelectMembership/> ]
    const {step, nextStep, backStep } = useMultistepper(components);
    const { form } = useContext(ProfileSetupContext);

    useEffect(() => {
        if (step === 0 ) {
            const profileType = form['profileType'];
            if (profileType === 'Trainee') { 
                setLabels([...labels, {label: 'Setup Trainee'}]);
            }
        }
    }, [form])

    return (
        <>
            <Steps model={labels} activeIndex={step}/>
            <span> { step} </span> <span> / </span> <span> { components.length } </span>
            {components[step]}
            { step < components.length - 1 && <Button onClick={nextStep}> Next </Button> } 
            { step > 0 && <Button onClick={backStep}> Back </Button>} 
        </>
    )
}


const CreateProfile = () => {
    const dropdownOptions = ['Trainer', 'Trainee'];
    const {form, handleProfileSetupNext} = useContext(ProfileSetupContext);

    const submit = () => {
        handleProfileSetupNext(formState)
        saveInLocalStorage(formState);
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

const CreateTrainee = () => {
    const { form, handleTraineeSetupNext } = useContext(ProfileSetupContext);
    const rules = new Map<string, Rule>();

    rules.set('height', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('age', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('weight', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('dob', {validation: new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/), required: true});

    const submit = () => {
        handleTraineeSetupNext(formState);
        saveInLocalStorage(formState);
    }

    const {valid, formState, handleSubmit, handleInputChange } = useForm(submit, rules);


    return(
        <>
            <h1> Setup Your Trainee Profile </h1>
            <form onSubmit={handleSubmit}>
                <InputText name = "height" required  keyfilter= "int" placeholder = "Enter Height (cm)" onChange = { handleInputChange } value={getProfileFormItem('height', formState)}/>
                <InputText name = "weight" required  keyfilter= "int" placeholder = "Enter Weight (lbs)" onChange = { handleInputChange } value={getProfileFormItem('weight', formState)}/>
                <InputText name = "age" required  keyfilter= "int" placeholder = "Enter Age" onChange = { handleInputChange } value={getProfileFormItem('age', formState)}/>
                <InputText name = "dob" required  placeholder = "Enter DOB (mm/dd/yyyy)" onChange = { handleInputChange } value={getProfileFormItem('dob', formState)}/>
                <Button name = "traineeNext" label = "Next" disabled = {(!valid) ? true : false }/>
            </form>

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