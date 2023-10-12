import React, { useRef, useState } from "react";
import LoginForm from "../login/LoginForm";
import SignUpForm from "../signup/SignupForm";
import { Link, useSearchParams } from "react-router-dom";
import User from "../../../models/User";
import { AuthApi } from "../../../apis/AuthApi";
import { Toast } from "primereact/toast";
import './AuthForm.css';


const AuthForm: React.FC<{authMode: string}> = (props) => {

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('form') === 'login';
    const toast = useRef<Toast>(null);

    const submit = async (email: string, password: string, action: string) => {
        const user = new User( email, password, null, null);
        if (action === 'signup') { 
            const response = await AuthApi.signUp(user);
            toast?.current?.show({severity:'success', summary: 'Success', detail:`${response}`, life: 3000});
            console.log('Response', response);
        } else { 
            const response = await AuthApi.login(user);
            toast?.current?.show({severity: 'success', summary: 'Logged In', detail: `${response?.message}`, life: 3000});
            console.log(response);
        }
    }

     return(
        <div className = "authForm">
            { (isLogin) ? <LoginForm submit={submit}/> : <SignUpForm submit = {submit}/> }
             <Link to={`?form=${isLogin ? 'signup' : 'login'}`}>
                 {isLogin ? 'Don\'t have an account? Create an Account' : 'Already have an account? Login'}
             </Link>
             <Toast ref={toast}/>
        </div>
    );

}
export default AuthForm;