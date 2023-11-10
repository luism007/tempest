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
            <Button    name = "profileNext" label="Next" disabled = {(!valid) ? true : false}/>
        </form>
    );
}

const CreateTrainee = () => {
    const { form, handleTraineeSetupNext } = useContext(ProfileSetupContext);
    const rules = new Map<string, Rule>();

    rules.set('height', {validation: new RegExp(/^$/), required: true});
    rules.set('age', {validation: new RegExp(/^$/), required: true});
    rules.set('weight', {validation: new RegExp(/^$/), required: true});
    rules.set('dob', {validation: new RegExp(/^$/), required: true});

    const submit = () => {
        handleTraineeSetupNext(formState);
    }

    const {valid, formState, handleSubmit, handleInputChange } = useForm(submit, rules);


    return(
        <>
            <h1> Setup Your Trainee Profile </h1>
            <form onSubmit={handleSubmit}>
                <InputText name = "height" required  keyfilter= "int" placeholder = "Enter Height (cm)" onChange = { handleInputChange } />
                <InputText name = "weight" required  keyfilter= "int" placeholder = "Enter Weight (lbs)" onChange = { handleInputChange } />
                <InputText name = "age" required  keyfilter= "int" placeholder = "Enter Age" onChange = { handleInputChange } />
                <InputText name = "dob" required  placeholder = "Enter DOB (mm/dd/yyyy)" onChange = { handleInputChange } />
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