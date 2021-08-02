import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import ItemCategorias from './menu-cliente/categorias/ItemCategorias';
import SideBarCliente from './SideBarCliente';
import BarraPrincipal from './BarraPrincipal';
import Menu from './Menu';

const MenuCliente = (props) => {
    const {inactivo, setInactivo, categorias, consultarCat, setConsultarCat, productos, consultarProductos, setConsultarProductos}=props;
    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
        <SideBarCliente
        inactivo={inactivo}
        setInactivo={setInactivo}
        />
        <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
        <BarraPrincipal/>
        <Menu
        productos={productos}
        setConsultarCat={setConsultarCat}
        categorias={categorias}
        />          
        </div>
        
  </Container>
    );
};

export default MenuCliente;