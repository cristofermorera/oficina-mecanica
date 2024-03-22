import axios from "axios";

const api = axios.create({ baseURL: process.env.URL_APP_API});

export const useApi = () => ({

    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com', role: 2 }
        };
        //const response = await api.post('/validate', { token });
        //return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.get(`http://localhost:8080/api/user/${email}/${password}`);
        return { user: response['data'] };
    },
    logout: async () => {
        return { status: true };
        //const response = await api.post('/logout');
        //return response.data;
    } 
});