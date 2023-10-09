import React, { useState } from "react";
import { validPasswordPattern } from "../constants/constants";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { Link, useSearchParams } from "react-router-dom";
import User from "../models/User";



const AuthForm: React.FC<{authMode: string}> = (props) => {

    const [password, setPassword] = useState('');
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('form') === 'login';

    const updatePassword = (password: string) => {
        setPassword(password);
    }

    const submit = (email: string, password: string) => {
        const user = new User('', email, password, null, null);
        console.log('User', user); 
    }

     return(
        <>
            { (isLogin) ? <LoginForm update={updatePassword}/> : <SignUpForm submit = {submit}/> }
             <Link to={`?form=${isLogin ? 'signup' : 'login'}`}>
                 {isLogin ? 'Create an Account' : 'Login'}
             </Link>
        </>
    );

}
export default AuthForm;