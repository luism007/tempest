import { Button } from "primereact/button";
import { Steps } from "primereact/steps";
import React, { useState, useContext, useEffect } from "react";
import { useMultistepper } from "../../hooks/useMultistepper";
import { ProfileSetupContext } from "../../store/ProfileSetupStore";
import { CreateProfile } from "./CreateProfile";
import { CreateTrainee } from "./CreateTrainee";
import { SelectGym } from "./SelectGym";
import { SelectMembership } from "./SelectMembership";

export const ProfileSetupWrapper = () => {
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