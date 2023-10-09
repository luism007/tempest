import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";
const LoginForm: React.FC<{update: (password: string) => void }> = (props) => {
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
export default LoginForm;