import {api} from './configs/AxiosConfig';
export const ProfileApi = {
    getGymsOfType: async(type: string) => {
        const response = await api.request({
            url: `api/gyms/getGymsOfType`,
            method: 'GET',
            data: {type: type}
        });
        return response.data;
    }
};