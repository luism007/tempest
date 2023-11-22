import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { ProfileSetupContext } from "../../store/ProfileSetupStore";
import { saveProfileFormInLocalStorage, getProfileFormItem } from "../../utils/localStorageUtils";

export const CreateProfile: React.FC<{handleNext?: () => void}> = (props) => {
    const dropdownOptions = ['Trainer', 'Trainee'];
    const {handleProfileSetupNext} = useContext(ProfileSetupContext);

    const submit = () => {
        handleProfileSetupNext(formState)
        saveProfileFormInLocalStorage(formState);
        if (props?.handleNext !== undefined) props.handleNext();
    }


    const rules = new Map<string, Rule>();
    rules.set('firstName', { validation: new RegExp(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/), required: true });
    rules.set('lastName', { validation: new RegExp(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/), required: true });
    rules.set('profileType', { validation: null, required: true });

    const {valid, elementValue, formState, handleSubmit, handleTouch, getFormFieldPristinity, handleInputChange, handleDropdownChange } = useForm(submit, rules);

    const showcaseValue = (field: string) =>{ 
        if(!getFormFieldPristinity(field)) { 
            const item = getProfileFormItem(field, formState);
            if(item === null || item === undefined) { 
                return formState[field];
            } else {
                return item;
            }
        } else { 
            return formState[field];
        }
    }

    return(
        <form onSubmit={ handleSubmit }>
            <InputText name = "firstName"   required placeholder = "First Name" keyfilter= "alpha" onChange={handleInputChange} onFocus={() => handleTouch('firstName')} value={showcaseValue('firstName')}/>
            <InputText name = "lastName"    required placeholder = "Last Name" keyfilter= "alpha" onChange={handleInputChange} onFocus={() => handleTouch('lastName')} value={showcaseValue('lastName')}/>
            <Dropdown  name = "profileType" required placeholder = "Profile Type" options={dropdownOptions} onChange={ handleDropdownChange } onFocus={() => handleTouch('profileType')} value={showcaseValue('profileType')}/>
            <Button    name = "profileNext" label="Next" disabled = {(!valid) ? true : false}/>
        </form>
    );
}
