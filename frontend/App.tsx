import React from 'react'
import { PrimeReactProvider} from 'primereact/api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as logoutAction } from './components/auth/logout/Logout';
import Root from './routes/Root';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

//theme
import "primereact/resources/themes/lara-light-blue/theme.css";
import { checkAuthLoader, tokenLoader } from './utils/auth';
import ProfileSetup from './pages/ProfileSetup';
        
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        id: 'root',
        loader: tokenLoader,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home/>,
                loader: checkAuthLoader
            },
            {
                path: '/auth',
                element: <Authentication/>
            },
            {
                path: '/logout', 
                action: logoutAction
            },
            {
                path: '/createProfile',
                element: <ProfileSetup/>,
                loader: checkAuthLoader
            }
        ]
    }
]);
const App = () => {
    return (
        <PrimeReactProvider>
            <RouterProvider router={router}/>
        </PrimeReactProvider>
    )
};
export default App;