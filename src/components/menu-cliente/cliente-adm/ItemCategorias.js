import {React, useState, useRef, useEffect } from 'react';
import { ListGroup, Button, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';


const ItemCategorias = (props) => {   
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);

    const URL = process.env.REACT_APP_API_URL

    const id = useParams().id;
    const [nombreCategoria, setNombreCategoria]=useState({});
    const nombreCategoriaRef= useRef();

const eliminarCategoria =(id)=>{
    console.log(id)
    Swal.fire({
        title: 'Estas seguro que deseas eliminar?',
        text: "Esta accion no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro'
      }).then(async(result) => {
        if (result.isConfirmed) {
            // const URL = `${process.env.REACT_APP_API_URL}/categorias/${id}`;
            try{
                const res = await fetch(`${URL}/categorias/${id}`, {
                    method: "DELETE",
                    headers:{
                        "Content-Type": "application-json"
                    }
                });
                console.log(res)
                if(res.status=== 200){
                    console.log("categoria eliminada correctamente")
                    Swal.fire(
                        'Eliminado',
                        'La categoria fue eliminada correctamente',
                        'success'
                    )
                    props.setConsultarCat(true);
            }
          
        }catch(error){
            console.log(error)
        }
        }
      })
};


// const traerCat = () =>{
//     handleShow();
//     console.log("desde funcion traer cat")
// }
   
// useEffect(()=>{
//      const consultarCategoria = async ()=>{
//          try{
//              const respuesta= await fetch (`${URL}/categorias/${id}`)
//              console.log(respuesta)
//              if(respuesta.status===200);
//              const res= await respuesta.json();
//              setNombreCategoria(res);
//              console.log(res)

//          }catch(err){
//              console.log(err)
//          }
//      };
//      consultarCategoria();
//  },[id]);
 

const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const catModificada = nombreCategoriaRef.current.value;

        const respuesta = await fetch(`${URL}/categorias/${id}`, {
            method: "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(catModificada)
        })
        if(respuesta.status ===200){
            console.log("categoria modificada correctamente")
        }

    }catch(error){
        console.log(error)
    }
}
    

    return (
        <div>
             {/* modal Editarcategoria */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Categorias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="formAddCat">
    <Form.Label>Nombre Categoria</Form.Label>
    <Form.Control 
    type="text" 
    ref={nombreCategoriaRef}
    defaultValue={nombreCategoria}
    
      />
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
        <ListGroup.Item className="d-flex justify-content-around mx-3">
            <h5>{props.cat.nombreCategoria}</h5>
            <Button 
            variant="warning"
            onClick={handleShow}>
<FontAwesomeIcon icon={faEdit}> Editar</FontAwesomeIcon>
            </Button>
            <Button variant="danger" onClick={()=>eliminarCategoria(props.cat.id)}><FontAwesomeIcon icon={faTrashAlt}>Eliminar</FontAwesomeIcon></Button>
        </ListGroup.Item>
        </div>
    );
};

export default ItemCategorias;