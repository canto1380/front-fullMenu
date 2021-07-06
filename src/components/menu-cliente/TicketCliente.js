import React from 'react';
import {Card, Form, Button } from 'react-bootstrap';

const TicketCliente = () => {
    return (
        <Card className="tarjetas ticket text-dark my-3 border-4">
  <Card.Header as="h5" className="d-flex justify-content-between">
      <div>
      <p>Pedido N° 1234</p>
      <p>Fecha 7/6/2021</p>
      </div>
      <div>
      <p>Mesa N° 4</p>
      <p>Hora 21:33</p>
      </div>
  </Card.Header>
  <Card.Body>
      <hr />
      <div className="d-flex justify-content-between">
          <span>Empanadas</span>
          <span>$$$$</span>
      </div>
      <div className="d-flex justify-content-between">
          <span>Empanadas</span>
          <span>$$$$</span>
      </div>
      <div className="d-flex justify-content-between">
          <span>Empanadas</span>
          <span>$$$$</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
      <h5>TOTAL</h5>
          <h5>$$$$$</h5>
      </div>
  </Card.Body>
  <Card.Footer>
      <hr />
      <Form>
          <h5>Forma de pago</h5>
          <Form.Group className="my-4">
              <Form.Check type="radio" name="pago" value="efectivo" inline label="Efectivo"></Form.Check>
              <Form.Check type="radio" name="pago" value="tarjeta" inline label="Tarjeta"></Form.Check>
          </Form.Group>
          <div className="d-flex justify-content-center my-4">
          <Button className="mx-4">Enviar pedido</Button>
            <Button className="mx-4">Cancelar</Button>
          </div>
      

      </Form>
  </Card.Footer>
</Card>

    );
};

export default TicketCliente;