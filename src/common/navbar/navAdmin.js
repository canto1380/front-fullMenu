import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import Logo from '../../img/logo.png'
import './navbar.css'

const NavAdmin = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fw-bold">
            <Container fluid>
                <Navbar.Brand href="/"><Image src={Logo} className='logo-navbar' rounded /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="">Categorias</NavDropdown.Item>
                            <NavDropdown.Item href="">Productos</NavDropdown.Item>
                            <NavDropdown.Item href="">Pedidos</NavDropdown.Item>
                            <NavDropdown.Item href="">Estadisticas</NavDropdown.Item>
                            <NavDropdown.Item href="">Configuracion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Salir</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavAdmin;