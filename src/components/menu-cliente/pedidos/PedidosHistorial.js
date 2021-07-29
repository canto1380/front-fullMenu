import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import SideBarCliente from '../../SideBarCliente';
import ItemHistPedidos from './ItemHistPedidos';
import FiltrosPedidos from './filtrosPedidos/FiltrosPedidos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const PedidosHistorial = (props) => {
    const { inactivo, setInactivo, pedidos } = props
    const [filtros, setFiltros] = useState(false)
    const[filtradoEncargado, setFiltradoEncargado] = useState([])
    const [buscador, setBuscador] = useState([])
    const [filtradoBuscador, setFiltradoBuscador]=useState([])

    const valorBuscador =(e) =>{
        setBuscador(e.target.value)
    }
    console.log(buscador)
    const filtrar =() =>{
        let filtroBuscador = pedidos.filter((item)=>{
            if(item.id.includes(buscador)){
                return item
            }
        });
        setFiltradoBuscador(filtroBuscador)
    }
    console.log(filtradoBuscador)

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SideBarCliente
                inactivo={inactivo}
                setInactivo={setInactivo}
            />
            <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
                <BarraPrincipal />
                <Row className="d-flex justify-content-between align-items-center mx-0">
                    <Col className='text-start'>
                        <h4>Historial de pedidos</h4>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-start align-items-center mx-0 my-3'>
                    <Col xs={3} sm={2} md={2} className='pe-0'>
                        <Button size='sm' variant='primary' className='' onClick={() => setFiltros(!filtros)}>
                            Filtrar<ArrowDropDownIcon />
                        </Button>
                    </Col>
                    <Col xs={9} sm={6} md={4} className=''>
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
                <Form className=''>
                    {
                        (filtros) ? (<FiltrosPedidos filtradoEncargado={filtradoEncargado} setFiltradoEncargado={setFiltradoEncargado}/>) : (null)
                    }
                </Form>
                <div>
                    <ItemHistPedidos 
                        pedidos={pedidos}
                    />
                </div>
            </div>
        </Container>
    );
};

export default PedidosHistorial;