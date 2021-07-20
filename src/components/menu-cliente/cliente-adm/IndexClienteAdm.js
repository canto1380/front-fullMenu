import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SidebarCliente from '../../SideBarCliente';
import '../../../css/sidebar.css'
import BarraPrincipal from '../../BarraPrincipal';

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
        </div>
        </Container>
    );
};

export default IndexClienteAdm;