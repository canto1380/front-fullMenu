import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import SidebarCliente from '../../SideBarCliente';
import {Link}  from 'react-router-dom'
import ItemUsuarios from './ItemUsuarios';

const UsuariosAdmin = (props) => {
    const {inactivo, setInactivo} = props
    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SidebarCliente
                inactivo={inactivo}
                setInactivo={setInactivo}
            />
            <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
                <BarraPrincipal/>
                <Row className="d-flex justify-content-between align-items-center mx-0">
                    <Col className='text-start'>
                        <h4>Usuarios de encargados</h4>
                    </Col>
                    <Col className='text-end'>
                        <Link to={'/admin-cliente/usuarios/nuevoEncargado'} type='button' className='btn btn-primary'>Nuevo encargado</Link>
                    </Col>
                </Row>
                <ListGroup className='mt-3'>
                    {
                        <ItemUsuarios />
                    }
                </ListGroup>
            </div>
        </Container>
    );
};

export default UsuariosAdmin;