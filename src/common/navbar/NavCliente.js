import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavCliente = () => {
    return (
        <Navbar fixed="top"  expand="lg" className=" w-100 nav text-light">
  <Navbar.Brand href="#home" className=" mx-4 text-light">EL PAISA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="text-light" href="#home">FullMenu</Nav.Link>
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