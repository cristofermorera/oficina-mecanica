import Header from "../../components/navbar"
import { Wrapper } from "./style"
import { useEffect, useState } from 'react';
import { Card, CardBody, Row, Button, Table, ButtonToolbar } from 'reactstrap'
import { AiFillDiff } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Modal from "./modal";
import { Product } from "../../types/Products";
import { useApi } from "../../hooks/Products";

export const Products = () => {
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState<Product[]>([]);

    const toggle = () => setModal(!modal);
    const api = useApi();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.listProducts();
                setProduct(data);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Wrapper>
                <Header />
                <Card className='m-2' color='light'>
                    <CardBody>
                        <ButtonToolbar>
                            <div className="me-3">
                                <h3>Produtos Cadastrados</h3>
                            </div>
                            <div className="align-items-end">
                                <Button color="primary" onClick={toggle}> Adicionar</Button>
                            </div>
                        </ButtonToolbar>

                        <Row className='m-1'>
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descrição</th>
                                        <th>Marca</th>
                                        <th>Fornecedor</th>
                                        <th>Custo</th>
                                        <th>Margem</th>
                                        <th>Valor Venda</th>
                                        <th>Validade</th>
                                        <th>Valor Total</th>
                                        <th>Estoque</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.description}</td>
                                            <td>{product.marca}</td>
                                            <td>{product.fornecedor}</td>
                                            <td>{product.valueCust}</td>
                                            <td>{product.valueMargem}</td>
                                            <td>{product.valueVenda}</td>
                                            <td>{product.validation}</td>
                                            <td>{product.value}</td>
                                            <td>{product.stock}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
                <Modal toggleState={toggle} modalState={modal} />
            </Wrapper>
        </>
    )
}

export default Products;