import Header from "../../components/navbar"
import { Wrapper } from "./style"
import { Card, CardBody, Row, Button, Table, ButtonToolbar } from 'reactstrap'
import { useEffect, useState } from "react";
import Modal from "./modal";
import { useApi } from "../../hooks/Professionals";
import { Employee } from "../../types/Professionals";

export const Profess = () => {

    const [modal, setModal] = useState(false);

    const api = useApi();
    const [employee, setEmployee] = useState<Employee[]>([]);
    const toggle = () => setModal(!modal);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.listEmployee(); // Chame a função listClients da API
                setEmployee(data); // Defina os dados recebidos no estado
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
                                <h3>Profissionais Cadastrados</h3>
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
                                        <th>Nascimento</th>
                                        <th>Ini Contrato</th>
                                        <th>Fim Contrato</th>
                                        <th>Celular</th>
                                        <th>CEP</th>
                                        <th>Nickname</th>
                                        <th>Email</th>
                                        <th>CPF</th>
                                        <th>Address</th>
                                        <th>Numero</th>
                                        <th>Estado</th>
                                        <th>Obs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employee.map((employee, index) => (
                                        <tr key={index}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.birth}</td>
                                            <td>{employee.firstDateContract}</td>
                                            <td>{employee.endDateContract}</td>
                                            <td>{employee.fone}</td>
                                            <td>{employee.cep}</td>
                                            <td>{employee.nickname}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.cpf}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.numberAddress}</td>
                                            <td>{employee.state}</td>
                                            <td>{employee.obs}</td>
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

export default Profess;