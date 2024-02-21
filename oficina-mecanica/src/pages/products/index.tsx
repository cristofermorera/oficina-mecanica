import Header from "../../navbar"
import { Wrapper } from "./style"
import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Input, Form, Button, Label, Table, ButtonToolbar, Modal, ModalHeader } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";

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

                <Modal isOpen={modal} toggle={toggle} fullscreen>
                    <ModalHeader toggle={toggle}>Adicionar Produto</ModalHeader>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col md='7' sm='12' className='mb-1' >
                                        <Label className='form-label' for='nameMulti'>
                                            Descrição do Produto
                                        </Label>
                                        <Input type='text' name='name' id='nameMulti' placeholder='' />
                                    </Col>
                                    <Col md='5' sm='12' className='mb-1'>
                                        <Label className='form-label' for='lastNameMulti'>
                                            Marca
                                        </Label>
                                        <Input type='text' name='lastname' id='lastNameMulti' placeholder='' />
                                    </Col>
                                    <Col md='3' sm='12' className='mb-1'>
                                        <Label className='form-label' for='cityMulti'>
                                            Fornecedor
                                        </Label>
                                        <Input type='date' name='city' id='cityMulti' placeholder='' />
                                    </Col>
                                    <Col md='2' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CountryMulti'>
                                            Valor de Custo
                                        </Label>
                                        <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                    </Col>
                                    <Col md='2' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CountryMulti'>
                                            % de Margem
                                        </Label>
                                        <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                    </Col>
                                    <Col md='2' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CountryMulti'>
                                            Valor de Venda
                                        </Label>
                                        <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                    </Col>
                                    <Col md='5' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CompanyMulti'>
                                            Validade
                                        </Label>
                                        <Input type='date' name='company' id='CompanyMulti' placeholder='' />
                                    </Col>
                                    <Col md='2' sm='12' className='mb-1'>
                                        <Label className='form-label' for='CountryMulti'>
                                            Quant. Estoque
                                        </Label>
                                        <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                    </Col>

                                    <Col md='10' sm='12' className='mb-1'>
                                        <Label className='form-label' for='EmailMulti'>
                                            OBS.
                                        </Label>
                                        <Input id="exampleText" name="text" type="textarea" />
                                    </Col>
                                    <Col sm='12' className="m-2">
                                        <div className='d-flex'>
                                            <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                                                Adicionar
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Modal>
            </Wrapper>
        </>
    )
}

export default Products;