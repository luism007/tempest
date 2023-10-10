import axios from "axios";

export const basePath: string = (process.env.REACT_APP_BASE_API_URL as string) || 'http://localhost:8080/api';
export const api = axios.create({
    withCredentials: false,
    baseURL: basePath
});