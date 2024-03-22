
import { FC } from 'react';
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form';
import { ModalHeader, Card, CardBody, Row, Col, Label, Modal, Input, Button } from "reactstrap"
import { Clients } from '../../types/Clients';
import { useApi } from '../../hooks/Clients';


interface ModalProps {
    toggleState: () => void;
    modalState: boolean;
}

const ModalClients: FC<ModalProps> = ({ toggleState, modalState }) => {

    const api = useApi();

    const { handleSubmit, control } = useForm<Clients>()

    const onSubmit: SubmitHandler<Clients> = async (data) => 
    {
        const isInsert = await api.insertClients(data);
        if(isInsert.user.name === 'José'){
            console.log('Tá chegando aqui na mensagem de volta no arquivo de cadastro');
        }else{
            console.log('Erro')
        }
    }

    return (
        <>
            <Modal isOpen={modalState} toggle={toggleState} fullscreen>
                <ModalHeader toggle={toggleState}>Adicionar Cliente</ModalHeader>
                <Card className='m-2' color='light'>
                    <CardBody>
                        <Row>
                            <Col md='7' sm='12' className='mb-1' >
                                <Label className='form-label' for='nameClientMulti'>
                                    Nome Completo
                                </Label>
                                <Controller
                                    name="nameClient"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id='nameClientMulti'/>}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='lastNameMulti'>
                                    Nome Para Contato
                                </Label>
                                <Controller
                                    name="lastname"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id='lastNameMulti' />}
                                />
                            </Col>
                            <Col md='3' sm='12' className='mb-1'>
                                <Label className='form-label' for='birthMulti'>
                                    Data de Nascimento
                                </Label>
                                <Controller
                                    control={control}
                                    name="birth"
                                    render={({ field }: { field: FieldValues['birth'] }) => (
                                        <Input
                                            {...field}
                                            id="birthMulti"
                                            placeholder="Data de Aniversário"
                                            type="date"
                                            value={ field.value || '' }
                                        />
                                    )}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='cpfMulti'>
                                    CPF
                                </Label>
                                <Controller
                                    name="cpf"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} id='cpfMulti' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='foneMulti'>
                                    Telefone
                                </Label>
                                <Controller
                                    name="fone"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} id='foneMulti' />}
                                />
                            </Col>
                            <Col md='5' sm='12' className='mb-1'>
                                <Label className='form-label' for='emailMulti'>
                                    Email
                                </Label>
                                <Controller
                                    name="emailClient"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id='emailMulti' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='cepMulti'>
                                    CEP
                                </Label>
                                <Controller
                                    name="cep"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} id='cepMulti' />}
                                />
                            </Col>
                            <Col md='8' sm='12' className='mb-1'>
                                <Label className='form-label' for='adressMulti'>
                                    Endereço
                                </Label>
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} id='adressMulti' />}
                                />
                            </Col>
                            <Col md='2' sm='12' className='mb-1'>
                                <Label className='form-label' for='number_foneMulti'>
                                    Numero
                                </Label>
                                <Controller
                                    name="number_address"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => <Input {...field} id='number_foneMulti' />}
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

    )
}

export default ModalClients;