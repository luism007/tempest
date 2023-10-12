import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, {useState} from "react";
import { isValidEmail, isValidPassword } from "../../../constants/constants";
import { Button } from "primereact/button";
import './SignupForm.css';
import SignupFormPasswordFooter from "./SignUpPasswordFooter";


const SignUpForm: React.FC<{submit: (email: string, password:string, action: string) => void }> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValidState, setEmailValidState] = useState(true);
    const [passwordValidState, setPasswordValidState] = useState(true);

    const updateEmailValidState = (state: boolean) =>{
        setEmailValidState(state);
    }

    const updatePasswordValidState = (state: boolean) => {
        setPasswordValidState(state);
    }
    const readyToSubmit = () => {
        return (emailValidState && passwordValidState) && (isValidEmail(email) && isValidPassword(password));
    }

    return(
        <>
            <div className = "p-inputgroup flex-1">
                <InputText className = {(emailValidState) ? '' : 'p-invalid'} placeholder="Enter Email" onChange={(e) => { updateEmailValidState(isValidEmail(e.target.value)); setEmail(e.target.value) }}></InputText>
            </div>
            <div className = "p-inputgroup flex-1">
                <Password className = {(passwordValidState) ? '' : 'p-invalid'} placeholder = "Enter Password" footer = { <SignupFormPasswordFooter password= {password} />} onChange={(p) => { updatePasswordValidState(isValidPassword(p.target.value)); setPassword(p.target.value) }} toggleMask/>
            </div>
            {
                <div className="p-inputgroup flex-1 button-wrapper">
                    <Button disabled={!readyToSubmit()} label="Create Account" onClick={() => props.submit(email, password, 'signup')}></Button>
                </div>
            }
            
        </>
    )
}

export default SignUpForm;