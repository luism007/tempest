import { MenuItem } from "primereact/menuitem";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";


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

const validateEmail = (email: string): boolean => {
    return (email.includes('@')) ? true : false;
}
const validatePassword = (password: string): boolean => {
    return (password.length >= 15) ? true : false;
}
const LoginFormGroup: React.FC<{update: (password: string) => void }> = (props) => {
    return(
        <>
            <div className="p-inputgroup flex-1">
                <InputText placeholder="Email"></InputText>
            </div>
            <div className="p-inputgroup flex-1">
                <Password placeholder = 'Password' onChange={(p) => { props.update(p.target.value) }} toggleMask/>
            </div>
        </>
    )
};

const SignUpFormGroup = () => {
    return(
        <>
            <div className = "p-inputgroup flex-1">
                <InputText placeholder="Enter Email" onChange={(e) => validateEmail(e.target.value)}></InputText>
            </div>
            <div className = "p-inputgroup flex-1">
                <Password footer = {signupFormPasswordFooter} onChange={(p) => { validatePassword(p.target.value) }} toggleMask/>
            </div>
        </>
    )
}
const AuthForm: React.FC<{authMode: string}> = (props) => {

    const [password, setPassword] = useState('');

    const updatePassword = (password: string) => {
        setPassword(password);
    }
    return(
        <>
            { (props.authMode === 'login') ? <LoginFormGroup update={updatePassword}/> : <SignUpFormGroup/> }
        </>
    );

}
export default AuthForm;