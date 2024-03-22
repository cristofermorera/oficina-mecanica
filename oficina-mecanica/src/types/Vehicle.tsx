import { Clients } from "./Clients";

export type Vehicle = {
    id: number;
    car: string;
    plaque: number;
    chassis: number;
    year: number;
    km: number;
    clients: Clients;
}