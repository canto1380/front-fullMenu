import React from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import ItemProductos from './ItemProductos';
import SidebarCliente from '../../SideBarCliente';
import { Link } from 'react-router-dom';
import '../../../css/clienteAdm.css'

const ProductosClienteAdm = (props) => {
    const { inactivo, setInactivo } = props

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SidebarCliente
                inactivo={inactivo}
                setInactivo={setInactivo}
            />
            <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
                <BarraPrincipal />
                <Row className="d-flex justify-content-between align-items-center mx-0">
                    <Col className='text-start'>
                        <h4>Productos de Categoria</h4>
                    </Col>
                    <Col className='text-end'>
                        <Link to={'/admin-cliente/productos/nuevoProducto'} type='button' className='btn btn-primary'>Nuevo producto</Link>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end align-items-center mx-0 my-3'>
                    <Col xs={12} md={6} lg={4} className=''>
                        <Form.Group className="mb-0 d-flex">
                            <Form.Control
                                as="select"
                                size='sm'
                                className='rounded-pill'
                            >
                                <option>Seleccione una categoría</option>
                                <option>Categoria 1</option>
                                <option>Categoria 2</option>
                                <option>Categoria 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='margenTop'>
                        <form className="d-flex">
                            <Form.Control size="sm" type="search" placeholder="Buscar Producto" className='rounded-pill' />
                            <Button size='sm' className="btn btn-light ms-3 border rounded" type="submit">Buscar</Button>
                        </form>
                    </Col>
                </Row>
                <ListGroup>
                    {
                        <ItemProductos />
                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default ProductosClienteAdm;