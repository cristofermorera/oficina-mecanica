
import { FC } from 'react';
import { ModalHeader, Card, CardBody, Row, Col, Label, Input, Modal } from "reactstrap"
import { Professionals } from '../../types/Professionals';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useApi } from '../../hooks/Professionals';

interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
}
const ModalProfessionals: FC<ModalProps> = ({ toggleState, modalState }) => {
    const { handleSubmit, control } = useForm<Professionals>()

    const api = useApi();

    const onSubmit: SubmitHandler<Professionals> = async (data) => 
    {
        /*const isInsert = await api.insertEmployee(data);
         if(isInsert.user.name === 'José'){
            console.log('Tá chegando aqui na mensagem de volta no arquivo de cadastro');
        }else{
            console.log('Erro')
        } */
    }

    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState} fullscreen>
                <ModalHeader toggle={toggleState}>Adicionar Proffisional</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
                        <Row>
                            <Col md='7' sm='12' className='mb-1' >
                                <Label className='form-label' for='nameId'>
                                    Nome Completo
                                </Label>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='nameId' placeholder='' />}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='nicknameId'>
                                    Nome Para Contato
                                </Label>
                                <Controller
                                    name="nickname"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='nicknameId' placeholder='' />}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='birthId'>
                                    Data de Nascimento
                                </Label>
                                <Controller
                                    control={control}
                                    name="birth"
                                    render={({ field }: { field: FieldValues['birth'] }) => (
                                        <Input
                                            {...field}
                                            id="birthId"
                                            type="date"
                                            value={field.value || ''}
                                        />
                                    )}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='firstDateContractId'>
                                    Início Contrato
                                </Label>
                                <Controller
                                    control={control}
                                    name="firstDateContract"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <DatePicker
                                            id='firstDateContractId'
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            selected={value}
                                        />
                                    )}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='endDateContractId'>
                                    Final Contrato
                                </Label>
                                <Controller
                                    control={control}
                                    name="endDateContract"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <DatePicker
                                            id='endDateContractId'
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            selected={value}
                                        />
                                    )}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='foneId'>
                                    Telefone
                                </Label>
                                <Controller
                                    name="fone"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='foneId' placeholder='' />}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='foneId'>
                                    Email
                                </Label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='email' id='foneId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='cepId'>
                                    CEP
                                </Label>
                                <Controller
                                    name="cep"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='cepId' placeholder='' />}
                                />
                            </Col>
                            <Col md='8' sm='12' className='mb-1'>
                                <Label className='form-label' for='addressId'>
                                    Endereço
                                </Label>
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type='text' id='addressId' placeholder='' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='numberId'>
                                    Numero
                                </Label>
                                <Controller
                                    name="number_address"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} type='number' id='numberId' placeholder='' />}
                                />
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

export default ModalProfessionals;