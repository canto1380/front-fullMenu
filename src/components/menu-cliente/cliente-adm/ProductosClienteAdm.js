import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup, Table } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import ItemProductos from './ItemProductos';
import SidebarCliente from '../../SideBarCliente';
import { Link } from 'react-router-dom';
import '../../../css/clienteAdm.css'

const ProductosClienteAdm = (props) => {
    const { inactivo, setInactivo, productos, consultarProductos, setConsultarProductos } = props
    const [cat, setCat] = useState('')
    const [buscador, setBuscador] = useState([])

    const valorCategoria =(e) =>{
        setCat(e.target.value)
    }
    const valorBuscador =(e) =>{
        setBuscador(e.target.value)
    }

    let productosFiltrados = productos.filter((a)=> a.categoria === cat);
    const filtrar =() =>{
        let filtroBuscador = productos.filter((item)=>{
            if(item.nombreProducto.toLowerCase().includes(buscador)){
                return item
            } else {
                setBuscador('NADA')
            }
        });
        setBuscador(filtroBuscador)
    }
    console.log(buscador)
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
                        <h4>Productos</h4>
                    </Col>
                    <Col className='text-end'>
                        <Link to={'/admin-cliente/productos/nuevoProducto'} type='button' className='btn btn-primary'>Nuevo producto</Link>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end align-items-center mx-0 my-3'>
                    <Col xs={12} md={6} lg={4} className=''>
                        <Form.Group className="mb-0 d-flex">
                            <select
                                onChange={valorCategoria}
                                aria-label='Default select example'
                                className='form-select'
                            >
                                <option>Seleccione una categoría</option>
                                <option value='Categoria 1'>Categoria 1</option>
                                <option value='Categoria 2'>Categoria 2</option>
                                <option value='Categoria 3'>Categoria 3</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='margenTop'>
                        <form className="d-flex">
                            <Form.Control 
                                size="sm" 
                                onChange={valorBuscador} 
                                onKeyUp={filtrar}
                                type="search" 
                                placeholder="Buscar Producto"
                            />
                            <Button size='sm' className="btn btn-light ms-3 border rounded" type="submit">Buscar</Button>
                        </form>
                    </Col>
                </Row>
                <div>
                    
                    {<ItemProductos 
                                productos={productos}
                                buscador={buscador}
                                productosFiltrados={productosFiltrados}
                                buscador={buscador}
                                setConsultarProductos={setConsultarProductos}
                            />
                    }
                </div>
                
            </div>
        </Container>
    );
};

export default ProductosClienteAdm;