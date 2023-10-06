import React from 'react'
import { PrimeReactProvider} from 'primereact/api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

//theme
import "primereact/resources/themes/lara-light-blue/theme.css";
        
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        id: 'root',
        children: [
            {
                index: true,
                path: '/home',
                element: <Home/>
            },
            {
                path: '/auth',
                element: <Authentication/>
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