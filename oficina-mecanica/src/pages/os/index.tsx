import Header from "../../navbar"
import { Wrapper } from "./style"
import { Card, CardBody, Row, Button, Table, ButtonToolbar, Badge } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

export const OS = () => {

    const [modal, setModal] = useState<boolean>(false);

    const toggle = () => setModal(!modal);
    
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
                        
                        <Row className='m-1'>
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Data O.S.</th>
                                        <th>Veículo</th>
                                        <th>Cliente</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th className="text-center" style={{ width: '12px' }}>Mais+</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>12/12/12</td>
                                        <td>Celta 2012</td>
                                        <td>Fernando Machado da silva</td>
                                        <td>1.290,00R$</td>
                                        <td><Badge color="warning">Em Andamento</Badge></td>
                                        <td className="text-center"><Link to="/professional"><AiFillDiff /></Link></td>
                                    </tr>
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

export default OS;