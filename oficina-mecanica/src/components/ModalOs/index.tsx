
import { ReactElement } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Input, Modal, Button } from "reactstrap"
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Os } from '../../types/Os';
import { useApi } from '../../hooks/Os';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
}
function ModalOs({ toggleState, modalState }: ModalProps): ReactElement {
    const { handleSubmit, control } = useForm<Os>()

    const api = useApi();

    const onSubmit: SubmitHandler<Os> = async (data) => /* console.log(data) */
    {
        const isInsert = await api.insertOs(data);
        /* if(isInsert.user.name === 'José'){
            console.log('Tá chegando aqui na mensagem de volta no arquivo de cadastro');
        }else{
            console.log('Erro')
        } */
    }
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
                            <Col md='6' sm='12' className='mb-1'>
                                <Label className='form-label' for='nameId'>
                                    Cliente (Apelido)
                                </Label>
                                <Controller
                                    name="clientNickname"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='nameId' placeholder='' />}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1' >
                                <Label className='form-label' for='lastNameId'>
                                    Telefone/Celular
                                </Label>
                                <Controller
                                    name="clientNumber"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} id='lastNameId' placeholder='' />}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='emailId'>
                                    Email
                                </Label>
                                <Controller
                                    name="clientEmail"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='email' id='emailId' placeholder='' />}
                                />
                            </Col>

                            <hr className="mb-2 mt-2" />
                            <div className='text-center mb-2'>
                                <h6>Dados do Veículo</h6>
                            </div>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='veiculoId'>
                                    Veículo
                                </Label>
                                <Controller
                                    name="carId"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='veiculoId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='placaId'>
                                    Placa
                                </Label>
                                <Controller
                                    name="carPlaque"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='placaId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='chassiId'>
                                    Chassi
                                </Label>
                                <Controller
                                    name="carChassi"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='chassiId' placeholder='' />}
                                />
                            </Col>
                            <Col md='1' sm='12' className='mb-1'>
                                <Label className='form-label' for='anoId'>
                                    Ano
                                </Label>
                                <Controller
                                    name="carYear"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='anoId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='quilometragemId'>
                                    Quilometragem
                                </Label>
                                <Controller
                                    name="carKm"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='quilometragemId' placeholder='' />}
                                />
                            </Col>

                            <hr className="mb-2 mt-2" />
                            <div className='text-center mb-2'>
                                <h6>Dados do Serviço</h6>
                            </div>
                            <Col md='6' sm='12' className='mb-1'>
                                <Label className='form-label' for='descricaoId'>
                                    Descrição
                                </Label>
                                <Controller
                                    name="serviceDescription"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='descricaoId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='valorId'>
                                    Valor
                                </Label>
                                <Controller
                                    name="serviceValue"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='valorId' placeholder='' />}
                                />
                            </Col>
                            <Col md='4' sm='12' className='mb-1'>
                                <Label className='form-label' for='profissionalId'>
                                    Profissional
                                </Label>
                                <Controller
                                    name="serviceProfessionalName"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='profissionalId' placeholder='' />}
                                />
                            </Col>

                            <hr className="mb-2 mt-2" />
                            <div className='text-center mb-2'>
                                <h6>Dados dos Produtos</h6>
                            </div>
                            <Col md='6' sm='12' className='mb-1'>
                                <Label className='form-label' for='descricaoProdutosId'>
                                    Descrição
                                </Label>
                                <Controller
                                    name="productDescription"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='descricaoProdutosId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='valorProdutoId'>
                                    Valor
                                </Label>
                                <Controller
                                    name="productValue"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='valorProdutoId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='quantidadeProdutoId'>
                                    Qtde.
                                </Label>
                                <Controller
                                    name="productQuant"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='quantidadeProdutoId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='totalProdutoId'>
                                    Total
                                </Label>
                                <Controller
                                    name="productTotal"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='totalProdutoId' placeholder='' />}
                                />
                            </Col>

                            <hr className="mb-2 mt-2" />
                            <div className='text-center mb-2'>
                                <h6>Dados do Obsrvações</h6>
                            </div>
                            <Col md='10' sm='12' className='mb-1'>
                                <Label className='form-label' for='descricaoProblemaId'>
                                    Descrição do Problema.
                                </Label>
                                <Controller
                                    name="description"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id="descricaoProblemaId" type="textarea" />}
                                />
                            </Col>
                            <Col md='10' sm='12' className='mb-1'>
                                <Label className='form-label' for='obsId'>
                                    OBS.
                                </Label>
                                <Controller
                                    name="obs"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id="obsId" type="textarea" />}
                                />
                            </Col>
                            <Col sm='12' className="m-2">
                                <div className='d-flex'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Button type="submit">Criar conta</Button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Modal>
        </>

    );
}

export default ModalOs;