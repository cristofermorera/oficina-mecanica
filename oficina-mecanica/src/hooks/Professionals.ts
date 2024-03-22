import axios from "axios";
import { Employee } from "../types/Professionals";

const api = axios.create({ baseURL: process.env.URL_APP_API});

export const useApi = () => ({

    insertEmployee: async (employee: Employee) => {
        const response = await api.post('http://localhost:8080/api/employee/insert', { params: { employee }});
        return response.data;
    },
    updateEmployee: async (id: number, employee: Employee) => {
        const response = await api.get('http://localhost:8080/api/employee/update', { params:{ id, employee }});
        return response.data;
    },
    deleteEmployee: async (id: number) => {
        const response = await api.get('http://localhost:8080/api/employee/delete', { params:{ id }});
        return response.data;
    },
    listEmployee: async () => {
        const response = await api.get('http://localhost:8080/api/employee');
        return response.data;
    },
});