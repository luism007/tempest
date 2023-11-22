import { useState } from "react"

export const useMultistepper = (steps: React.JSX.Element[], customCallback?: () => {}) => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        if(customCallback instanceof Function) customCallback();

        setStep((currentStep) => (currentStep >= steps.length - 1 ) ? currentStep : currentStep + 1);
    }

    const backStep = () => {
        setStep((currentStep) => (currentStep <=0 ) ? 0 : currentStep - 1);
    }

    return {
        step,
        nextStep,
        backStep
    }
}