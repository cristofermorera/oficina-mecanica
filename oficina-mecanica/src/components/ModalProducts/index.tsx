import { FC } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Input, Modal } from "reactstrap"
import { Products } from '../../types/Products';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useApi } from '../../hooks/Products';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
}
const ModalProducts: FC<ModalProps> = ({ toggleState, modalState }) => {
    const { handleSubmit, control } = useForm<Products>()

    const api = useApi();

    const onSubmit: SubmitHandler<Products> = async (data) =>
    {
        const isInsert = await api.insertProducts(data);
        /* if(isInsert.user.name === 'José'){
            console.log('Tá chegando aqui na mensagem de volta no arquivo de cadastro');
        }else{
            console.log('Erro')
        } */
    }

    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState} fullscreen>
                <ModalHeader toggle={toggleState}>Adicionar Produto</ModalHeader>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md='7' sm='12' className='mb-1' >
                                <Label className='form-label' for='desProduct'>
                                    Descrição do Produto
                                </Label>
                                <Controller
                                    name="description"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='desProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='marcaProduct'>
                                    Marca
                                </Label>
                                <Controller
                                    name="marca"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='marcaProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='fornecedorProduct'>
                                    Fornecedor
                                </Label>
                                <Controller
                                    name="fornecedor"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='fornecedorProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='custoProduct'>
                                    Valor de Custo
                                </Label>
                                <Controller
                                    name="valueCust"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='custoProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='margemProduct'>
                                    % de Margem
                                </Label>
                                <Controller
                                    name="valueMargem"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='margemProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='vendaProduct'>
                                    Valor de Venda
                                </Label>
                                <Controller
                                    name="valueVenda"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='vendaProduct' placeholder='' />}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='validationProduct'>
                                    Validade
                                </Label>
                                <Controller
                                    control={control}
                                    name="validation"
                                    render={({ field }: { field: FieldValues['validation'] }) => (
                                        <Input
                                            {...field}
                                            id="validationProduct"
                                            type="date"
                                            value={field.value || ''}
                                        />
                                    )}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='stockProduct'>
                                    Quant. Estoque
                                </Label>
                                <Controller
                                    name="stock"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='stockProduct' placeholder='' />}
                                />
                            </Col>

                            <Col sm='12' className="m-2">
                                <div className='d-flex'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <button type="submit">Criar conta</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Modal>
        </>

    )
}

export default ModalProducts;