import { useState } from "react";
import { useApi } from "../../hooks/Clients";
import { Clients } from "../../types/Clients";
import { Os } from "../../types/Os";
import { Professionals } from "../../types/Professionals";
import { Vehicle } from "../../types/Vehicle";
import { Products } from "../../types/Products";
import { EndpointsContext } from "./endpointContexts";

export const EndpointsProvider = ({ children }: { children: JSX.Element }) => {

    const [dadosCli, setDadosCli] = useState<Clients | null>(null);
    const api = useApi();

    const clients = async () => {
        const data = await api.listClients();
        setDadosCli(data.dadosCli);
        return data;
        //const data = await api.clients(Cli);
        //if (data.user && data.token) {
            //setToken(data.token);
        //}
       // return false;
    }




    return (
        <></>
    );
}


