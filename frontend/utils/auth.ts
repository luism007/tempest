import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedExpiration = localStorage.getItem('expiration') as string;
    const expirationDate = new Date(storedExpiration);
    const now =  new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export const getAuthToken = (): string | null => {
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();
    if(!tokenDuration && tokenDuration < 0) { 
        return 'EXPIRED';
    }
    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = tokenLoader();

    if (!token) { 
        return redirect('/auth');
    }

    return null;
}