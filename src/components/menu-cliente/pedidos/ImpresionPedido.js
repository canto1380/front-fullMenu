import React, {useState, useEffect} from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import '../../../css/clienteAdm.css'

const ImpresionPedido = () => {
    const [aa, setAa] = useState(false)
    
    useEffect(() => {
        window.print()
    }, [])
    setTimeout(() => {
        window.close()
    }, 1000);
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
                <div className="d-flex justify-content-between">
                    <h5>TOTAL</h5>
                    <h5>$$$$$</h5>
                </div>
            </Card.Body>
            <Card.Footer>
                <Form>
                    <h5>Forma de pago</h5>
                    <Form.Group className="my-4">
                        <Form.Check type="radio" name="pago" value="efectivo" inline label="Efectivo"></Form.Check>
                        <Form.Check type="radio" name="pago" value="tarjeta" inline label="Tarjeta"></Form.Check>
                    </Form.Group>
                    <hr />
                    <div className="ass d-flex justify-content-center my-4">
                        <Button className="mx-4">Enviar pedido</Button>
                        <Button className="mx-4">Cancelar</Button>
                    </div>


                </Form>
            </Card.Footer>
        </Card>
    );
};

export default ImpresionPedido;