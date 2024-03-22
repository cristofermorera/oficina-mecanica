export type Clients = {
    id: number;
    nameClient: string;
    lastname: string;
    birth: Date;
    type: string;
    nickname: string;
    fone: number;
    emailClient: string;
    cpf: number;
    cep: number;
    address: string;
    number_address: number;
    obs: string;
}


export interface Client {
    clientId: number;
    clientName: string;
    clientLastName: string;
    clientBirth: string;
    clientType: string;
    clientNickname: string;
    clientPhone: number;
    clientEmail: string;
    clientCPF: number;
    clientCEP: number;
    clientAddress: string;
    clientAddressNumber: number;
}