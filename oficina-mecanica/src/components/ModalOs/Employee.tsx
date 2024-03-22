
import { ReactElement } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Modal } from "reactstrap"
import { Employee } from '../../types/Professionals';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
    employee: Employee;
}

function ModalOsEmployee({ toggleState, modalState, employee }: ModalProps): ReactElement {

    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState}>
                <ModalHeader toggle={toggleState}>Funcionario Responsavel</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
                        <Row>
                            <Col md='12' sm='12' className='mb-1'>
                                <Label className='form-label'>
                                    Nome: {employee.name}
                                </Label><br />
                                <Label className='form-label'>
                                    Data de Nascimento: {employee.birth}
                                </Label><br />
                                <Label className='form-label'>
                                    Data de Início do Contrato: {employee.firstDateContract}
                                </Label><br />
                                <Label className='form-label'>
                                    Data de Término do Contrato: {employee.endDateContract}
                                </Label><br />
                                <Label className='form-label'>
                                    Telefone: {employee.fone}
                                </Label><br />
                                <Label className='form-label'>
                                    CEP: {employee.cep}
                                </Label><br />
                                <Label className='form-label'>
                                    Apelido: {employee.nickname}
                                </Label><br />
                                <Label className='form-label'>
                                    Email: {employee.email}
                                </Label><br />
                                <Label className='form-label'>
                                    CPF: {employee.cpf}
                                </Label><br />
                                <Label className='form-label'>
                                    Endereço: {employee.address}
                                </Label><br />
                                <Label className='form-label'>
                                    Número: {employee.numberAddress}
                                </Label><br />
                                <Label className='form-label'>
                                    Estado: {employee.state}
                                </Label><br />
                                <Label className='form-label'>
                                    Observação: {employee.obs}
                                </Label><br />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Modal>
        </>
    );
}

export default ModalOsEmployee;