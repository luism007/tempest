import User from "../models/User";
import { api, basePath } from "./configs/AxiosConfig";

export const AuthApi = {
    signUp: async (user: User) => {
        console.log(basePath);
        const response = await api.request({
            url: `/auth/signup`,
            method: 'POST',
            data: user
        });
        return response.data;
    }
}