import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, {useState} from "react";
import { validPasswordPattern } from "../constants/constants";
import { Button } from "primereact/button";

const signupFormPasswordFooter = (
    <>
        <Divider/>
        <p className="mt-2"> Suggestions </p>
        <ul className= "pl-2 ml-2 mt-0 line-height-3">
            <li> At least 15 characters long. </li>
            <li> At least one lowercase letter. </li>
            <li> At least one uppercase letter. </li>
            <li> At least one numeric character.</li>
            <li> At least one special character (ex: @, !, #). </li>
        </ul>
    </>
);

const isValidEmail = (email: string): boolean => {
    return (email.includes('@')) ? true : false;
}
const isValidPassword = (password: string): boolean => {
    return (password.length >= 13 && password.match(validPasswordPattern) !== null) ? true : false;
}

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
                <Password className = {(passwordValidState) ? '' : 'p-invalid'} placeholder = "Enter Password" footer = {signupFormPasswordFooter} onChange={(p) => { updatePasswordValidState(isValidPassword(p.target.value)); setPassword(p.target.value) }} toggleMask/>
            </div>
            {
                <div className="p-inputgroup flex-1">
                    <Button disabled={!readyToSubmit()} label="Create Account" onClick={() => props.submit(email, password, 'signup')}></Button>
                </div>
            }
        </>
    )
}

export default SignUpForm;