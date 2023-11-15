import {api} from './configs/AxiosConfig';
export const GymApi = {
    getGymsOfType: async(type: string) => {
        console.log('Type', type);
        const response = await api.request({
            url: `api/gyms/getGymsOfType`,
            method: 'POST',
            params: {
                type: type
            }
        });
        return response.data;
    }
};