export interface Order {
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

export interface Employee {
  id: number;
  name: string;
  birth: string;
  firstDateContract: string;
  endDateContract: string;
  fone: number;
  cep: number;
  nickname: string;
  email: string;
  cpf: number;
  address: string;
  numberAddress: number;
  state: string;
  obs: string;
}

export interface Product {
  id: number;
  description: string;
  marca: string;
  fornecedor: string;
  valueCust: number;
  valueMargem: number;
  valueVenda: number;
  validation: string;
  value: number;
  stock: number;
}

export interface Props {
  order?: Order;
  client?: Client;
  employee?: Employee;
  product?: Product;
}

