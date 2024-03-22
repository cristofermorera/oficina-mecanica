import axios from "axios";
import { Os } from "../types/Os";

const api = axios.create({ baseURL: process.env.URL_APP_API});

export const useApi = () => ({

    insertOs: async (os: Os) => {
        const response = await api.get('http://localhost:8080/api/os/insert', { params: { os } });
        return response.data;
    },
    updateOs: async (os: Os) => {
        const response = await api.get('http://localhost:8080/api/os/update/', { params: { os } });
        return response.data;
    },
    deleteOs: async (id: number) => {
        const response = await api.get('http://localhost:8080/api/os/delete', { params: { id } });
        return response.data;
    },
    listOs: async () => {
        const response = await api.get('http://localhost:8080/api/os');
        return response.data;
    }
});