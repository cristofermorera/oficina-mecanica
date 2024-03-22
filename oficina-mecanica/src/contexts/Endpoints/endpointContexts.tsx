import { createContext } from 'react';
import { Os } from '../../types/Os';
import { Services } from '../../types/Services';
import { Vehicle } from '../../types/Vehicle';
import { Professionals } from '../../types/Professionals';
import { Products } from '../../types/Products';
import { Client } from '../../types/Clients';

export type endpointsContextType = {
    serviceOrders: (osData: Os) => Promise<boolean>;
    clients: Client | null;
    products: (productsData: Products) => Promise<boolean>;
    professional: (professionalData: Professionals) => Promise<boolean>;
    vehicle: (vehicleData: Vehicle) => Promise<boolean>;
    servicer: (servicesData: Services) => Promise<boolean>;
}

export const EndpointsContext = createContext<endpointsContextType>(null!);
