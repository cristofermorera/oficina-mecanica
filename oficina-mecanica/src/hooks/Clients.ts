import axios from "axios";
import { Clients } from "../types/Clients";

const api = axios.create({ baseURL: process.env.URL_APP_API});

export const useApi = () => ({

    insertClients: async (clients: Clients) => {
        const response = await api.post('http://localhost:8080/api/client/insert', { params: { clients } });
        return response.data;
    },
    updateClients: async (id: number ,clients: Clients) => {
        const response = await api.get('http://localhost:8080/api/client/update', { params: { id, clients } });
        return response.data;
    },
    deleteClients: async (id: number) => {
        const response = await api.get('http://localhost:8080/api/client/delete', { params: { id } });
        return response.data;
    },
    listClients: async () => {
        const response = await api.get('http://localhost:8080/api/client');
        return response.data;
    }
});