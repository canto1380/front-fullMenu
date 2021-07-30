import React, {useState} from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FiltrosPedidos = (props) => {
const {filtradoEncargado, setFiltradoEncargado} =props
const [filtroEncargado, setFiltroEncargado] = useState('')
const [monto, setMonto] = useState()
console.log(filtroEncargado)

const valorEncargado =(e) =>{
  setFiltroEncargado(e.target.value)
}
const valorMonto = (e) =>{
  setMonto(e.target.value)
}

let array=[];
const filtrarEncargado =() =>{
  
}


// filtrarMonto()
console.log(array)
  return (
    <Row className='border border-2 py-3 mx-2 mb-3'>
      <Col xs={12} md={4} className='border-end border-2'>
        <Form.Label
          className="me-sm-2"
          htmlFor="inlineFormCustomSelect"
        >
          <b>Monto</b>
        </Form.Label>
        <select className="form-select" onKeyUp={filtrarEncargado} onChange={valorMonto} aria-label="Default select example" >
          <option defaultValue>Rango</option>
          <option value="1">Entre $1 - $1000</option>
          <option value="2">Entre $1001 - $1600</option>
          <option value="3">Entre $1601 - $2000</option>
          <option value="3">Entre $2001 - $3000</option>
          <option value="3">Mayor a $3000</option>
        </select>
      </Col>
      <Col xs={12} md={4} className='border-end border-2'>
        <Form.Label
          className="me-sm-2"
          htmlFor="inlineFormCustomSelect"
        >
          <b>Encargado</b>
        </Form.Label>
        <select className="form-select" aria-label="Default select example" onKeyUp={filtrarEncargado} onChange={valorEncargado}>
          <option defaultValue>Encargado</option>
          <option value="Paula Perez">Paula Perez</option>
          <option value="Pablo Paz">Pablo Paz</option>
        </select>
      </Col>
      <Col xs={12} md={4} className=''>
        <Form.Label
          className="me-sm-2"
          htmlFor="inlineFormCustomSelect"
        >
          <b>Fecha</b>
        </Form.Label>
        <input
          type="date"
          className="form-control form-control-md"
          id="fecha"
          name="fecha"
          required
        />
      </Col>
    </Row>
  );
};

export default FiltrosPedidos;