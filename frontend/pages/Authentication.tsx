import React from "react";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import AuthForm from "../components/auth/auth/AuthForm";
import './Authentication.css';
const Authentication = () => {
    const authSteps: MenuItem[] = [{ label: 'Sign Up' }, { label: 'Create Profile' }];

    return(
        <div className="container">
            <AuthForm authMode="signup"></AuthForm>
        </div>
    );

}

export default Authentication;