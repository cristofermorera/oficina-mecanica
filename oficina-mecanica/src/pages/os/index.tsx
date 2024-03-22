import Header from "../../components/navbar"
import { Wrapper } from "./style"
import { Card, CardBody, Row, Button, Table, ButtonToolbar } from 'reactstrap'
import { useEffect, useContext, useState } from "react";
import ModalOs from "../../components/ModalOs";
import ModalProduct from "../../components/ModalOs/Product";
import ModalClient from "../../components/ModalOs/Client";
import ModalEmployee from "../../components/ModalOs/Employee";
import { AuthContext } from "../../contexts/auth/authContext";
import { useApi } from "../../hooks/Os";
import { OrderService } from "../../types/Os";
import { Client } from '../../types/Clients';
import { Product } from "../../types/Products";
import { Employee } from "../../types/Professionals";

export const OS = () => {
    const api = useApi();
    const auth = useContext(AuthContext);

    const [modal, setModal] = useState<boolean>(false);
    const [modalClient, setModalClient] = useState<boolean>(false);
    const [modalEmployee, setModalEmployee] = useState<boolean>(false);
    const [modalProduct, setModalProduct] = useState<boolean>(false);
    const [orderService, setOrderService] = useState<OrderService[]>([]);
    const [clientOrders, setClientOrders] = useState<Client>();
    const [employeeOrders, setEmployeeOrders] = useState<Employee>();
    const [productOrders, setProductOrders] = useState<Product>();

    const toggle = () => setModal(!modal);

    const toggleClientModal = () => {
        if (clientOrders) {
            toggleClient(clientOrders);
        }
    };

    const toggleEmployeeModal = () => {
        if (employeeOrders) {
            toggleEmployee(employeeOrders);
        }
    };

    const toggleProductModal = () => {
        if (productOrders) {
            toggleProduct(productOrders);
        }
    };

    const toggleClient = (client: Client) => {
        setModalClient(!modalClient);
        setClientOrders(client);
    };

    const toggleEmployee = (employee: Employee) => {
        setModalEmployee(!modalEmployee);
        setEmployeeOrders(employee);
    };

    const toggleProduct = (product: Product) => {
        setModalProduct(!modalProduct);
        setProductOrders(product);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.listOs(); 
                setOrderService(data); 
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <>
            <Wrapper>
                <Header />
                <Card className='m-2' color='light'>
                    <CardBody>
                        <ButtonToolbar>
                            <div className="me-3">
                                <h3>Ordens de Serviço</h3>
                            </div>
                            <div className="align-items-end">
                                <Button color="primary" onClick={toggle}> Adicionar</Button>
                            </div>
                        </ButtonToolbar>
                        Bem vindo {auth.user?.name}
                        
                        <Row className='m-1'>
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Data O.S.</th>
                                        <th>Prev. Entrega</th>
                                        <th>Carro</th>
                                        <th>Cliente</th>
                                        <th>Funcionario</th>
                                        <th>Produtos</th>
                                        <th>Serviço</th>
                                        <th>Obs.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderService.map((orderService, index) => (
                                        <tr key={index}>
                                            <td>{orderService.orderId}</td>
                                            <td>{orderService.orderDate}</td>
                                            <td>{orderService.orderForecast}</td>
                                            <td>{orderService.carName}</td>
                                            <td><Button color="primary" onClick={() => toggleClient(orderService.client)}> Cliente</Button></td>
                                            <td><Button color="primary" onClick={() => toggleEmployee(orderService.employee)}> Funcionarios</Button></td>
                                            <td><Button color="primary" onClick={() => toggleProduct(orderService.product)}> Produtos</Button></td>
                                            <td>{orderService.serviceDescription}</td>
                                            <td>{orderService.obs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
                <ModalOs toggleState={toggle} modalState={modal} />
                {clientOrders && (
                     <ModalClient client={clientOrders} toggleState={toggleClientModal} modalState={modalClient} />
                )}
                {employeeOrders && (
                    <ModalEmployee employee={employeeOrders} toggleState={toggleEmployeeModal} modalState={modalEmployee} />
                )}
                {productOrders && (
                    <ModalProduct product={productOrders} toggleState={toggleProductModal} modalState={modalProduct} />
                )}
            </Wrapper>
        </>
    )
}

export default OS;