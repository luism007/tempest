import React, { useEffect, useRef } from "react";
import { Form, Link, Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getTokenDuration } from "../utils/auth";

const Root = () => {

    const token = useRouteLoaderData('root') as string;
    const navigate = useNavigate();
    let timeout = useRef<ReturnType<typeof setTimeout> | null> (null);

    useEffect(() => {
        const tokenDuration = getTokenDuration();
        if(token === 'EXPIRED') { 
            if(!location.pathname.includes('/auth')) {
                navigate('/auth');
            }
        }
        timeout.current = setTimeout(() => { 
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            navigate('/auth');

        }, tokenDuration);

        return () => {
            clearTimeout(timeout.current as NodeJS.Timeout);
        }

    }, [token]);


    return (
        <div>
            <div id = "navbar">
                <nav className="tempestNav">
                    <h1> Tempest Training </h1>
                    <ul>
                        <li> <Link to={'/home'}> Home </Link> </li>
                        { 
                        (!token || token === 'EXPIRED') && 
                            <li> <Link to={'/auth?form=login'}> Login </Link> </li> 
                        } 
                        {
                            (token && token !== 'EXPIRED') 
                            &&
                            <li>
                                <Form action="/logout" method="post">
                                    <button> Logout </button>
                                </Form>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}

export default Root;