import React from "react";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import AuthForm from "../components/AuthForm";
const Authentication = () => {
    const authSteps: MenuItem[] = [{ label: 'Sign Up' }, { label: 'Create Profile' }];

    return(
        <div>
            <AuthForm authMode="signup"></AuthForm>
        </div>
    );

}

export default Authentication;