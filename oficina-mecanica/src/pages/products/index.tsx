import Header from "../../navbar"
import { Wrapper } from "./style"
import { useState } from 'react';
import { Card, CardBody, Row, Button, Table, ButtonToolbar } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Modal from "./modal";

export const Products = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Wrapper>
                <Header />
                <Card className='m-2' color='light'>
                    <CardBody>
                        <ButtonToolbar>
                            <div className="me-3">
                                <h3>Produtos Cadastrados</h3>
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
                                        <th>Descrição</th>
                                        <th>Valor Venda</th>
                                        <th>Estoque</th>
                                        <th>Status</th>
                                        <th className="text-center" style={{ width: '12px' }}>Mais+</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark Fernandes da silva castro</td>
                                        <td>12,00 R$</td>
                                        <td>3 Unid</td>
                                        <td>Disponível</td>
                                        <td className="text-center"><Link to="/produto"><AiFillDiff /></Link></td>
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

export default Products;