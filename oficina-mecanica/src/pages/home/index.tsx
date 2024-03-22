import Header from "../../components/navbar"
import { Wrapper } from "./style"
import { Card, CardBody, Row, Button, Table, ButtonToolbar } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/Clients";
import Modal from "../../components/ModalClients";
import { Client } from "../../types/Clients";

export const Clients = () => {

    const [modal, setModal] = useState(false);
    const api = useApi();
    const [clientes, setClientes] = useState<Client[]>([]);
    const toggle = () => setModal(!modal);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.listClients(); // Chame a função listClients da API
                setClientes(data); // Defina os dados recebidos no estado
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };
        fetchData(); // Chame a função fetchData para carregar os dados ao montar o componente
    }, []);
    
    return (
        <> 
            <Wrapper>
                <Header />
                <Card className='m-2' color='light'>
                    <CardBody>
                        <ButtonToolbar>
                            <div className="me-3">
                                <h3>Clientes Cadastrados</h3>
                            </div>
                            <div className="align-items-end">
                                <Button color="primary" onClick={toggle}> Adicionar</Button>
                            </div>
                        </ButtonToolbar>
                        
                        <Row className='m-1'>
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Data de Nascimento</th>
                                        <th>Tipo</th>
                                        <th>Apelido</th>
                                        <th>Telefone</th>
                                        <th>Email</th>
                                        <th>CPF</th>
                                        <th>CEP</th>
                                        <th>Endereço</th>
                                        <th>Número</th>
                                        <th className="text-center" style={{ width: '12px' }}>Mais+</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map((cliente, index) => (
                                        <tr key={index}>
                                            <td>{cliente.clientId}</td>
                                            <td>{cliente.clientName}</td>
                                            <td>{cliente.clientLastName}</td>
                                            <td>{cliente.clientBirth}</td>
                                            <td>{cliente.clientType}</td>
                                            <td>{cliente.clientNickname}</td>
                                            <td>{cliente.clientPhone}</td>
                                            <td>{cliente.clientEmail}</td>
                                            <td>{cliente.clientCPF}</td>
                                            <td>{cliente.clientCEP}</td>
                                            <td>{cliente.clientAddress}</td>
                                            <td>{cliente.clientAddressNumber}</td>
                                            <td><Link to="/professional"><AiFillDiff /></Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
                <Modal toggleState={toggle} modalState={modal} />
            </Wrapper>
        </>
    )
}

export default Clients;