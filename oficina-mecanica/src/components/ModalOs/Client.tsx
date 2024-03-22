import { ReactElement } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Modal } from "reactstrap"
import { Client } from '../../types/Clients';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
    client: Client; 
}


function ModalOsClient({ toggleState, modalState, client }: ModalProps): ReactElement {
    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState}>
                <ModalHeader toggle={toggleState}>Dados do Cliente</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
                        <Row>
                            <Col md='12' sm='12' className='mb-1'>
                                <Label className='form-label'>
                                    Cliente (Apelido): {client?.clientNickname}
                                </Label><br />
                                <Label className='form-label'>
                                    Aniversário: {client?.clientBirth}
                                </Label><br />
                                <Label className='form-label'>
                                    Tipo: {client?.clientType}
                                </Label><br />
                                <Label className='form-label'>
                                    Telefone/Celular: {client?.clientPhone}
                                </Label><br />
                                <Label className='form-label'>
                                    Email: {client?.clientEmail}
                                </Label><br />
                                <Label className='form-label'>
                                    CPF: {client?.clientCPF}
                                </Label><br />
                                <Label className='form-label'>
                                    CEP: {client?.clientCEP}
                                </Label><br />
                                <Label className='form-label'>
                                    Endereço: {client?.clientAddress}
                                </Label><br />
                                <Label className='form-label'>
                                    Numero: {client?.clientAddressNumber}
                                </Label>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Modal>
        </>
    );
}

export default ModalOsClient;
