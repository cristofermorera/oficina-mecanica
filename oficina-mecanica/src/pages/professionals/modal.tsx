
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
                <ModalHeader toggle={toggleState}>Adicionar Proffisional</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
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
                    </CardBody>
                </Card>
            </Modal>
        </>

    )
}

export default modal;