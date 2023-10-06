import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div id = "navbar">
                <nav>
                    <ul>
                        <li> <Link to={'/home'}> Home </Link> </li>
                        <li> <Link to={'/auth'}> Login </Link> </li>
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}

export default Root;