import Header from "../../navbar"
import { Wrapper } from "./style"
import { Card, CardBody, Row, Col, Input, Form, Button, Label, Table, ButtonToolbar, Modal, ModalHeader } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Profess = () => {

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
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th className="text-center" style={{ width: '12px' }}>Mais+</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark Fernandes da silva castro</td>
                                        <td>fulano@gmail.com</td>
                                        <td>55999387784</td>
                                        <td className="text-center"><Link to="/professional"><AiFillDiff /></Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
                <Modal isOpen={modal} toggle={toggle} fullscreen>
                    <ModalHeader toggle={toggle}>Adicionar Proffisional</ModalHeader>
                    <Card className='m-2' color='light'>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md='7' sm='12' className='mb-1' >
                                    <Label className='form-label' for='nameMulti'>
                                        Nome Completo
                                    </Label>
                                    <Input type='text' name='name' id='nameMulti' placeholder='' />
                                </Col>
                                <Col md='5' sm='12' className='mb-1'>
                                    <Label className='form-label' for='lastNameMulti'>
                                        Nome Para Contato
                                    </Label>
                                    <Input type='text' name='lastname' id='lastNameMulti' placeholder='' />
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='cityMulti'>
                                        Data de Nascimento
                                    </Label>
                                    <Input type='date' name='city' id='cityMulti' placeholder='' />
                                </Col>
                                <Col md='2' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        CPF
                                    </Label>
                                    <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                </Col>
                                <Col md='2' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        Telefone
                                    </Label>
                                    <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                </Col>
                                <Col md='5' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CompanyMulti'>
                                        Email
                                    </Label>
                                    <Input type='text' name='company' id='CompanyMulti' placeholder='' />
                                </Col>
                                <Col md='2' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        CEP
                                    </Label>
                                    <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                </Col>
                                <Col md='8' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        Endereço
                                    </Label>
                                    <Input type='text' name='country' id='CountryMulti' placeholder='' />
                                </Col>
                                <Col md='2' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        Numero
                                    </Label>
                                    <Input type='number' name='country' id='CountryMulti' placeholder='' />
                                </Col>
                                <Col md='2' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        Estado
                                    </Label>
                                    <Input id="exampleSelect" name="select" type="select">
                                        <option>Selecionar</option>
                                        <option>RS</option>
                                        <option>SC</option>
                                        <option>PR</option>
                                    </Input>
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

export default Profess;