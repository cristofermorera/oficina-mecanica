import axios from "axios";
import { Products } from "../types/Products";

const api = axios.create({ baseURL: process.env.URL_APP_API});

export const useApi = () => ({

    insertProducts: async (product: Products) => {
        const response = await api.post('http://localhost:8080/api/product/insert', { params: { product } });
        return response.data;
    },
    updateProducts: async (id: number, product: Products) => {
        const response = await api.get('http://localhost:8080/api/product/update', { params: { id, product } });
        return response.data;
    },
    deleteProducts: async (id: number) => {
        const response = await api.get('http://localhost:8080/api/product/delete', { params: { id } });
        return response.data;
    },
    listProducts: async () => {
        const response = await api.get('http://localhost:8080/api/product');
        return response.data;
    },
});