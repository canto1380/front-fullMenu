import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SidebarCliente from '../SideBarCliente';
import '../../css/sidebar.css'
import BarraPrincipal from '../BarraPrincipal';

const IndexClienteAdm = (props) => {
    const {inactivo, setInactivo} = props

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
        <SidebarCliente 
            inactivo={inactivo}
            setInactivo={setInactivo}
        />
        <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
        <BarraPrincipal/>
        <Row className='d-flex justify-content-between align-items-center mx-0'>
            <Col >
                <h4>Bienvenidos</h4>
            </Col>
        </Row>
        <Row className="d-flex justify-content-between mx-0">
            <Col xs={12} md={6}>
                <div className='border border-2 rounded'>
                    <p><b>Venta total del dia</b></p>
                    <div>
                        
                    </div>    
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className='border border-2 rounded'>
                    <p>Venta total por encargado</p>
                </div>
            </Col>
        </Row>
        </div>
        </Container>
    );
};

export default IndexClienteAdm;