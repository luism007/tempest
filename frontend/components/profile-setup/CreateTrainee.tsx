import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { ProfileSetupContext } from "../../store/ProfileSetupStore";
import { getProfileFormItem, saveProfileFormInLocalStorage } from "../../utils/localStorageUtils";

export const CreateTrainee = () => {
    const { form, handleTraineeSetupNext } = useContext(ProfileSetupContext);
    const rules = new Map<string, Rule>();

    rules.set('height', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('age', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('weight', {validation: new RegExp(/^\d{1,3}$/), required: true});
    rules.set('dob', {validation: new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/), required: true});

    const submit = () => {
        handleTraineeSetupNext(formState);
        saveProfileFormInLocalStorage(formState);
    }

    const {valid, formState, handleSubmit, handleInputChange } = useForm(submit, rules);


    return(
        <>
            <h1> Setup Your Trainee Profile </h1>
            <form onSubmit={handleSubmit}>
                <InputText name="height" required keyfilter="int" placeholder="Enter Height (cm)" onChange={handleInputChange} value={getProfileFormItem('height', formState)} />
                <InputText name="weight" required keyfilter="int" placeholder="Enter Weight (lbs)" onChange={handleInputChange} value={getProfileFormItem('weight', formState)} />
                <InputText name="age" required keyfilter="int" placeholder="Enter Age" onChange={handleInputChange} value={getProfileFormItem('age', formState)} />
                <InputText name="dob" required placeholder="Enter DOB (mm/dd/yyyy)" onChange={handleInputChange} value={getProfileFormItem('dob', formState)} />
                <Button name="traineeNext" label="Next" disabled={(!valid) ? true : false} />
            </form>

        </>
    )
}