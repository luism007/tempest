import React, { useRef, useState } from "react";
import LoginForm from "../login/LoginForm";
import SignUpForm from "../signup/SignupForm";
import { Link, redirect, useNavigate, useSearchParams } from "react-router-dom";
import User from "../../../models/User";
import { AuthApi } from "../../../apis/AuthApi";
import { Toast } from "primereact/toast";
import './AuthForm.css';


const AuthForm: React.FC<{authMode: string}> = (props) => {

    const [searchParams] = useSearchParams();
    const isLogin = () => { 
        const mode = searchParams.get('form');
        if (mode === null || mode === 'login') { 
            return true;
        } else if (mode !== 'login') { 
            return false;
        }
    }
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();

    const initializeSession = (token: string, screen: string) => {
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expiration.toISOString());
        return navigate(screen);
    }
    const submit = async (email: string, password: string, action: string) => {
        const user = new User( email, password, null, null);
        if (action === 'signup') { 
            AuthApi.signUp(user)
            .then((response)=> {
                toast?.current?.show({severity:'success', summary: 'Success', detail:`${response?.message}`, life: 3000});
                initializeSession(response.token, '/createProfile');
            })
            .catch((e) => {
                toast?.current?.show({severity:'error', summary: 'Error', detail:`${e?.response?.data?.message}`, life: 3000});
                return;
            });
        } else { 
            AuthApi.login(user)
            .then((response) => {
                toast?.current?.show({severity: 'success', summary: 'Logged In', detail: `${response?.message}`, life: 3000});
                initializeSession(response.token, '/home');
            })
            .catch((e)=>{
                toast?.current?.show({severity: 'error', summary: 'Login Failure', detail: `${e?.response?.data?.message}`, life: 3000});
            })
        }
    }

     return(
        <div className = "authForm">
            { (isLogin()) ? <LoginForm submit={submit}/> : <SignUpForm submit = {submit}/> }
             <Link to={`?form=${isLogin() ? 'signup' : 'login'}`}>
                 {isLogin() ? 'Don\'t have an account? Create an Account' : 'Already have an account? Login'}
             </Link>
             <Toast ref={toast}/>
        </div>
    );

}
export default AuthForm;