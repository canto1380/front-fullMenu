import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup, Table } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import ItemProductos from './ItemProductos';
import SidebarCliente from '../../SideBarCliente';
import { Link } from 'react-router-dom';
import '../../../css/clienteAdm.css'

const ProductosClienteAdm = (props) => {
    const { inactivo, setInactivo, productos, setConsultarProductos, categorias } = props
    const [cat, setCat] = useState('')
    const [buscador, setBuscador] = useState([])
    const [filtradoBuscador, setFiltradoBuscador]=useState([])
    const valorCategoria =(e) =>{
        setCat(e.target.value)
    }
    const valorBuscador =(e) =>{
        setBuscador(e.target.value)
    }
    let productosFiltrados = productos.filter((a)=> a.categoria === cat);
    
    const filtrar =() =>{
        let filtroBuscador = productos.filter((item)=>{
            if(item.nombreProducto.toLowerCase().includes(buscador.toLowerCase())){
                return item
            }
        });
        setFiltradoBuscador(filtroBuscador)
    }
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
                                
                                className='form-select form-select-sm'
                            >
                                <option>Seleccione una categoría</option>
                                {categorias.map((cat)=>(
                                        <option value={cat.nombreCategoria} key={cat.id}>{cat.nombreCategoria}</option>
                                    ))}
                                
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
                        </form>
                    </Col>
                </Row>
                <div>
                    
                    {<ItemProductos 
                                productos={productos}
                                filtradoBuscador={filtradoBuscador}
                                productosFiltrados={productosFiltrados}
                                setConsultarProductos={setConsultarProductos}
                                buscador={buscador}
                            />
                    }
                </div>
                
            </div>
        </Container>
    );
};

export default ProductosClienteAdm;