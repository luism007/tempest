import React, { useRef, useState } from "react";
import { validPasswordPattern } from "../constants/constants";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { Link, useSearchParams } from "react-router-dom";
import User from "../models/User";
import { AuthApi } from "../apis/AuthApi";
import { Toast } from "primereact/toast";



const AuthForm: React.FC<{authMode: string}> = (props) => {

    const [password, setPassword] = useState('');
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('form') === 'login';
    const toast = useRef<Toast>(null);

    const updatePassword = (password: string) => {
        setPassword(password);
    }

    const submit = async (email: string, password: string, action: string) => {
        const user = new User( email, password, null, null);
        if (action === 'signup') { 
            const response = await AuthApi.signUp(user);
            toast?.current?.show({severity:'success', summary: 'Success', detail:`${response}`, life: 3000});
            console.log('Response', response);
        }
    }

     return(
        <>
            { (isLogin) ? <LoginForm update={updatePassword}/> : <SignUpForm submit = {submit}/> }
             <Link to={`?form=${isLogin ? 'signup' : 'login'}`}>
                 {isLogin ? 'Create an Account' : 'Login'}
             </Link>
             <Toast ref={toast}/>
        </>
    );

}
export default AuthForm;