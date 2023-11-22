import { DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react"

type FormElement = { 
    field: string;
    touched: boolean;
}

export const useForm = (submitCallback: Function, rules: Map<string, Rule>) => {
    
    const [valid, setValid] = useState(false);
    const [formState, setFormState] = useState({});
    const [elementValue, setElementValue] = useState('');
    const [formPrestinity, setFormPrestinity] = useState<Map<string, FormElement>>(new Map())

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const field = e.target.getAttribute('name') as string;
        const value = e.target.value;
        const rule = rules.get(field)

        if (rule?.validation instanceof RegExp) {
            const matches = value.match(rule.validation);
            setValid((matches !== null));
        }

        e.persist();
        setFormState({...formState, [field]: value });
        setElementValue(value);
    }

    function handleDropdownChange(e: DropdownChangeEvent) { 
        const field = e.target.name;
        const value = e.target.value;
        const rule = rules.get(field);

        if(rule?.validation === null) { 
            setValid(true);
        }

        setFormState({...formState, [field]: value });
        console.log('Form State', formState);
        setElementValue(value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (submitCallback instanceof Function) submitCallback();
    }

    function handleTouch(field) {
      formPrestinity.set(field, { field: field, touched: true });
      setFormPrestinity(formPrestinity);
    }

    function getFormFieldPristinity (field) { 
        const formItem = formPrestinity.get(field);
        return formItem?.touched;
    }
    
    return {
      valid,
      formState,
      handleTouch,
      elementValue,
      handleSubmit,
      handleInputChange,
      handleDropdownChange,
      getFormFieldPristinity
    };
}