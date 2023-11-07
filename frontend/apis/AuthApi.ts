import User from "../models/User";
import { api } from "./configs/AxiosConfig";

export const AuthApi = {
    signUp: async (user: User) => {
        const response = await api.request({
            url: `api/auth/signup`,
            method: 'POST',
            data: user
        });
        return response.data;
    },

    login: async (user: User) => {
        const response = await api.request({
            url: `api/auth/login`,
            method: 'POST',
            data: user
        });
        return response.data;
    }
}