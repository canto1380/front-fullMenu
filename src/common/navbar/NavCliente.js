import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavCliente = () => {
    return (
        <Navbar fixed="top" bg="light" expand="lg" className=" w-100">
  <Navbar.Brand href="#home" className=" mx-4">EL PAISA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home">FullMenu</Nav.Link>
    </Nav>
    <Nav className="mx-3">
        <span>Cliente</span>
    </Nav>
    <Nav className="mx-3">
        <span>Mesa 4</span>
    </Nav>
    <Nav className="mx-3">
        <span>Total a pagar</span>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavCliente;