import { Client } from "./Clients";
import { Product } from "./Products";
import { Employee } from "./Professionals";

export type Os = {
    id: number;
    date: Date;
    value: number;
    forecast: string;
    carId : number;
    carName : string;
    carChassi : number;
    carYear : number;
    carPlaque : string;
    carKm : number; 
    clientEmail : string;
    clientNumber : number;
    clientNickname : string;
    productDescription : string;
    productId: number;
    productValue : number;
    productQuant : number;
    productTotal : number;
    serviceProfessionalId: number;
    serviceProfessionalName : string;
    serviceDescription : string;
    serviceValue : number;
    obs: string;
    description: string;
}

export interface OrderService {
    orderId: number;
    orderDate: string;
    orderForecast: string;
    orderValue: number;
    carId: number;
    carName: string;
    carChassi: number;
    carYear: number;
    carPlaque: string;
    carKm: number;
    clientId: number;
    productId: number;
    productQuant: number;
    productTotal: number;
    serviceProfessionalId: number;
    serviceDescription: string;
    serviceValue: number;
    obs: string;
    description: string;
    client: Client;
    employee: Employee;
    product: Product;
  }