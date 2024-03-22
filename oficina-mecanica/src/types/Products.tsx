export type Products = {
    id: number;
    description: string;
    marca: string;
    fornecedor: string;
    valueCust: number;
    valueMargem: number;
    valueVenda: number;
    validation: Date;
    value: number;
    stock: number;
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