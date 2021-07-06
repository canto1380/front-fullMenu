import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import Logo from '../../img/logo.png'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faUserCog, faHamburger, faList, faClipboard, faWaveSquare, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const NavAdmin = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fw-bold">
            <Container fluid className=''>
                <Navbar.Brand href="/"><Image src={Logo} className='logo-navbar' rounded /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Alejandro"  id="collasible-nav-dropdown">
                            <NavDropdown.Item href=""><FontAwesomeIcon icon={faList} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Categorias</NavDropdown.Item>
                            <NavDropdown.Item  href=""><FontAwesomeIcon icon={faHamburger} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Productos</NavDropdown.Item>
                            <NavDropdown.Item  href=""><FontAwesomeIcon icon={faClipboard} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Pedidos</NavDropdown.Item>
                            <NavDropdown.Item  href=""><FontAwesomeIcon icon={faWaveSquare} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Estadisticas</NavDropdown.Item>
                            <NavDropdown.Item  href=""><FontAwesomeIcon icon={faUserCog} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Configuracion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  href=""><FontAwesomeIcon icon={faSignInAlt} size='lg' className='me-2 size-icon'></FontAwesomeIcon>Salir</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavAdmin;