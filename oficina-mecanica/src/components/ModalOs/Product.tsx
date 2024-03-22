
import { ReactElement } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Modal } from "reactstrap"
import { Product } from '../../types/Products';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
    product: Product; 
}
function ModalOs({ toggleState, modalState, product }: ModalProps): ReactElement {
    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState}>
                <ModalHeader toggle={toggleState}>Produtos da OS</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
                        <Row>
                            <Col md='12' sm='12' className='mb-1'>
                                <Label className='form-label'>
                                    Descrição: {product.description}
                                </Label><br />
                                <Label className='form-label'>
                                    Marca: {product.marca}
                                </Label><br />
                                <Label className='form-label'>
                                    Fornecedor: {product.fornecedor}
                                </Label><br />
                                <Label className='form-label'>
                                    Custo: {product.valueCust}
                                </Label><br />
                                <Label className='form-label'>
                                    Margem: {product.valueMargem}
                                </Label><br />
                                <Label className='form-label'>
                                    Valor de Venda: {product.valueVenda}
                                </Label><br />
                                <Label className='form-label'>
                                    Validade: {product.validation}
                                </Label><br />
                                <Label className='form-label'>
                                    Valor: {product.value}
                                </Label><br />
                                <Label className='form-label'>
                                    Estoque: {product.stock}
                                </Label>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Modal>
        </>

    );
}

export default ModalOs;