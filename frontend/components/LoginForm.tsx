import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { validPasswordPattern } from "../constants/constants";
import React, { useState } from "react";
import { Button } from "primereact/button";

const isValidEmail = (email: string): boolean => {
    return (email.includes('@')) ? true : false;
}
const isValidPassword = (password: string): boolean => {
    return (password.length >= 13 && password.match(validPasswordPattern) !== null) ? true : false;
}

const LoginForm: React.FC<{ submit: (email: string, password:string, action: string) => void }> = (props) => {
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

    return (
        <>
            <div className="p-inputgroup flex-1">
                <InputText className={(emailValidState) ? '' : 'p-invalid'} placeholder="Email" onChange={(e) => { updateEmailValidState(isValidEmail(e.target.value)); setEmail(e.target.value) }}></InputText>
            </div>
            <div className="p-inputgroup flex-1">
                <Password className={(passwordValidState) ? '' : 'p-invalid'} placeholder='Password' onChange={(p) => { updatePasswordValidState(isValidPassword(p.target.value)); setPassword(p.target.value) }} toggleMask />
            </div>
            {
                <div className="p-inputgroup flex-1">
                    <Button disabled = {!readyToSubmit()} label="Login" onClick={() => props.submit(email, password, 'login')}></Button>
                </div>
            }
        </>
    )
};
export default LoginForm;