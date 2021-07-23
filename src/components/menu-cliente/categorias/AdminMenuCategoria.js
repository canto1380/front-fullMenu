import React, {useState, useEffect} from 'react';
import {Button, Card, Modal, Form, ListGroup, Container} from "react-bootstrap";
import BarraPrincipal from '../../BarraPrincipal';
import ItemCategorias from './ItemCategorias';
import SideBarCliente from '../../SideBarCliente';


const AdminMenuCategoria = (props) => {

  const { consultarCat, setConsultarCat, categorias} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const URL = process.env.REACT_APP_API_URL + "/categorias"

    const [nombreCategoria, setNombreCategoria]=useState("");
    const nuevaCategoria = {nombreCategoria}
    
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log("desde submit")
      try {
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body : JSON.stringify(nuevaCategoria)
        };
        const res =await fetch (URL, config);
        if(res.status ===201){
          console.log(res);
          setConsultarCat(true);
          console.log(consultarCat);
        }
      }catch(error){
        console.log(error)
      }
    }


    return (
      <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
        <SideBarCliente/>
        <div className="">
        <BarraPrincipal/>
            <h3>Categorias</h3>
            <Button variant="primary" onClick={handleShow}>
        Agregar 
      </Button>
      {/* modal agregar categoria */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Categorias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formAddCat">
    <Form.Label>Nombre Categoria</Form.Label>
    <Form.Control type="text" placeholder="ingrese un nombre" onChange={(e)=>setNombreCategoria(e.target.value)} />
  </Form.Group>
          <Button variant="primary" onClick={handleClose} type="submit">
            Guardar
          </Button>
            <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
</Form>
        </Modal.Body>
      </Modal>
            <hr />
            <ListGroup>
             {categorias.map((cat)=>(
                <ItemCategorias cat={cat} key={cat.id} setConsultarCat={props.setConsultarCat}/>
              ))}
            </ListGroup>
        </div>
        
  </Container>
    );
};

export default AdminMenuCategoria;