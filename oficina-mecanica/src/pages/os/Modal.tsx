
import { FC } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Input, Button, Modal } from "reactstrap"

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
  }
  const modal: FC<ModalProps> = ({ toggleState, modalState }) => {

    return (
        <>
        <Modal isOpen={modalState} toggle={toggleState} fullscreen>
            <ModalHeader toggle={toggleState}>Adicionar Ordem de Serviço</ModalHeader>
            <Card className='m-2' color='light'>
                <CardBody>
                    <Row>
                        <div className='text-center mb-2'>
                            <h6>Dados do Cliente</h6>
                        </div>
                        <Col md='6' sm='12' className='mb-1' >
                            <Label className='form-label' for='nameMulti'>
                                Cliente (Apelido)
                            </Label>
                            <Input type='text' name='name' id='nameMulti' placeholder='' />
                        </Col>
                        <Col md='3' sm='12' className='mb-1'>
                            <Label className='form-label' for='lastNameMulti'>
                                Telefone/Celular
                            </Label>
                            <Input type='text' name='lastname' id='lastNameMulti' placeholder='' />
                        </Col>
                        <Col md='3' sm='12' className='mb-1'>
                            <Label className='form-label' for='cityMulti'>
                                Email
                            </Label>
                            <Input type='date' name='city' id='cityMulti' placeholder='' />
                        </Col>

                        <hr className="mb-2 mt-2" />
                        <div className='text-center mb-2'>
                            <h6>Dados do Veículo</h6>
                        </div>
                        <Col md='5' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Veículo
                            </Label>
                            <Input type='text' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Placa
                            </Label>
                            <Input type='text' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CompanyMulti'>
                                Chassi
                            </Label>
                            <Input type='text' name='company' id='CompanyMulti' placeholder='' />
                        </Col>
                        <Col md='1' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Ano
                            </Label>
                            <Input type='text' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Quilometragem
                            </Label>
                            <Input type='text' name='country' id='CountryMulti' placeholder='' />
                        </Col>

                        <hr className="mb-2 mt-2" />
                        <div className='text-center mb-2'>
                            <h6>Dados do Serviço</h6>
                        </div>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Descrição
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Valor
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='4' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Profissional
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>

                        <hr className="mb-2 mt-2" />
                        <div className='text-center mb-2'>
                            <h6>Dados dos Produtos</h6>
                        </div>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Descrição
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Valor
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Qtde.
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <Col md='2' sm='12' className='mb-1'>
                            <Label className='form-label' for='CountryMulti'>
                                Total
                            </Label>
                            <Input type='number' name='country' id='CountryMulti' placeholder='' />
                        </Col>
                        <hr className="mb-2 mt-2" />
                        <div className='text-center mb-2'>
                            <h6>Dados do Obsrvações</h6>
                        </div>
                        <Col md='10' sm='12' className='mb-1'>
                            <Label className='form-label' for='EmailMulti'>
                                Descrição do Problema.
                            </Label>
                            <Input id="exampleText" name="text" type="textarea" />
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
                </CardBody>
            </Card>
        </Modal>
        </>
        
    )
}

export default modal;