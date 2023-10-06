import React from "react";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
const Authentication = () => {
    const authSteps: MenuItem[] = [{ label: 'Sign Up' }, { label: 'Create Profile' }];

    return(
        <div>
            <Steps model={authSteps}></Steps>
        </div>
    );

}

export default Authentication;