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
                <ModalHeader toggle={toggleState}>Adicionar Produto</ModalHeader>
                <Card>
                    <CardBody>
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
                    </CardBody>
                </Card>
            </Modal>
        </>

    )
}

export default modal;