import React from 'react';
import { faTrashAlt, faEdit, faStar, faUpload} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {useState, useRef, useEffect } from 'react';
import { ListGroup, Button, Form, Modal, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';
import "../../../css/Botones.css";

const BotoneraCategorias = (props) => {
  // const {id} = useParams();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) =>setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () =>setShow2(true);

  const URL = process.env.REACT_APP_API_URL

  
  const [nombreCategoria, setNombreCategoria]=useState({});
  const nombreCategoriaRef= useRef("");

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

/*DESTACAR*/

 const destacarCategoria = async(id, nombre, destacada) =>{
   const url = `${URL}/categorias/${id}`
   if(!destacada){
           try {
             console.log("categoria destacada")
               const categoriaModificada = {
                   nombreCategoria: props.cat.nombreCategoria,
                   publicada: props.cat.publicada,
                   destacada: !props.cat.destacada
               }
               const res = await fetch(url,{

                   method: "PUT",
                   headers: {
                       "Content-Type": "application/json",
                   },
                   body: JSON.stringify(categoriaModificada)
               })
               if(res.status ===200){
                   props.setConsultarCat(true);
                  props.history.push(`/admin-cliente/categorias`);
               }
           } catch (error) {

           }
   } else {
       try {
        console.log("sacar destacada")
           const categoriaModificada = {
            nombreCategoria: props.cat.nombreCategoria,
            publicada: props.cat.publicada,
            destacada: !props.cat.destacada
           }
           const res = await fetch(url,{
               method: "PUT",
               headers: {
                    "Content-Type": "application/json",
                   },
               body: JSON.stringify(categoriaModificada)
           })
           if(res.status ===200){
               props.setConsultarCat(true);
               props.history.push(`/admin-cliente/categorias`);
           }
       } catch (error) {

       }
   }
 };

 /*PUBLICAR*/
 const publicarCategoria = async(id, nombre, publicada) =>{
  const url = `${URL}/categorias/${id}`
  if(!publicada){
          try {
            console.log("categoria publicada")
              const categoriaModificada = {
                  nombreCategoria: props.cat.nombreCategoria,
                  destacada: props.cat.destacada,
                  publicada: !props.cat.publicada
              }
              const res = await fetch(url,{

                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(categoriaModificada)
              })
              if(res.status ===200){
                  props.setConsultarCat(true);
                 props.history.push(`/admin-cliente/categorias`);
              }
          } catch (error) {
            console.log(error)
          }
  } else {
      try {
       console.log("sacar publicado")
          const categoriaModificada = {
           nombreCategoria: props.cat.nombreCategoria,
           destacada: props.cat.destacada,
           publicada: !props.cat.publicada
          }
          const res = await fetch(url,{
              method: "PUT",
              headers: {
                   "Content-Type": "application/json",
                  },
              body: JSON.stringify(categoriaModificada)
          })
          if(res.status ===200){
              props.setConsultarCat(true);
              props.history.push(`/admin-cliente/categorias`);
          }
      } catch (error) {
        console.log(error)
      }
  }
};

/*FORM EDITAR*/
const handleSubmit1=async(e)=>{
  e.preventDefault();
  try{
      console.log(props.cat.id)
      console.log(props.cat.nombreCategoria)
      const catModificada = {
        nombreCategoria: nombreCategoriaRef.current.value};
      console.log(catModificada)

      const respuesta = await fetch(`${URL}/categorias/${props.cat.id}`, {
          method: "PUT",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify(catModificada)
      });
      console.log(respuesta)
      if(respuesta.status ===200){
          console.log("categoria modificada correctamente")
          props.setConsultarCat(true);
      }

  }catch(error){
      console.log(error)
  }
}
/*FORM PUBLICAR*/
const handleSubmit2=async(e)=>{
  e.preventDefault();
  try{  console.log("desde publicar")
      // console.log(props.cat.id)
      // console.log(props.cat.nombreCategoria)
      // const catModificada = {
      //   nombreCategoria: nombreCategoriaRef.current.value};
      // console.log(catModificada)

      // const respuesta = await fetch(`${URL}/categorias/${props.cat.id}`, {
      //     method: "PUT",
      //     headers : {
      //         "Content-Type" : "application/json"
      //     },
      //     body : JSON.stringify(catModificada)
      // });
      // console.log(respuesta)
      // if(respuesta.status ===200){
      //     console.log("categoria modificada correctamente")
      //     props.setConsultarCat(true);
      // }

  }catch(error){
      console.log(error)
  }
}

    return (
        <div> 
            {
                    (!props.cat.destacada) ? (
                        <Button className=" p-1 bg-light text-dark border-1 border-dark" onClick={()=> destacarCategoria(props.cat.id, props.cat.nombreCategoria, props.cat.destacada)}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </Button>
                    ) : 
                    (
                        <Button className="p-1 bg-dark text-dark border-1 border-dark " title="Destacar categoria" onClick={()=> destacarCategoria(props.cat.id, props.cat.nombreCategoria, props.cat.destacada)}>
                            <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                        </Button>
                    )
                } 
      <Button variant=""
      className='p-1 ms-1  bg-light text-dark border-1 border-dark'
      onClick={handleShow1}>
<FontAwesomeIcon icon={faEdit}> Editar</FontAwesomeIcon>
            </Button>
            <Button
            className='p-1 ms-1  bg-light text-dark border-1 border-dark'
            onClick={()=>eliminarCategoria(props.cat.id)}>
              <FontAwesomeIcon icon={faTrashAlt}>Eliminar</FontAwesomeIcon>
              </Button>
            {
                    (!props.cat.publicada) ? (
                        <Button className=" p-1 ms-1  bg-light text-dark border-1 border-dark" onClick={()=> publicarCategoria(props.cat.id, props.cat.nombreCategoria, props.cat.publicada)}>
                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                        </Button>
                    ) : 
                    (
                        <Button className="p-1 ms-1  bg-dark text-dark border-1 border-dark " title="Publicar categoria" onClick={()=> publicarCategoria(props.cat.id, props.cat.nombreCategoria, props.cat.publicada)}>
                            <FontAwesomeIcon icon={faUpload} className="text-warning"></FontAwesomeIcon>
                        </Button>
                    )
                } 
         {/* modal Editarcategoria */}
      <Modal show={show1} onHide={handleClose1} id>
        <Modal.Header closeButton>
          <Modal.Title>Editar Categorias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit1} >
  <Form.Group className="mb-3" controlId="formAddCat">
    <Form.Label>Nombre Categoria</Form.Label>
    <Form.Control
    type="text"
    ref={nombreCategoriaRef}
    defaultValue={props.cat.nombreCategoria}


      />
  </Form.Group>
          <Button variant="primary" onClick={handleClose1} type="submit">
            Guardar
          </Button>
            <Button variant="secondary" onClick={handleClose1}>
            Cerrar
          </Button>
</Form>
        </Modal.Body>
      </Modal>
      {/* modal Publicar*/}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Publicar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit2} >
  <Form.Group className="mb-3" controlId="formAddCat">
    <Form.Label>Agregar descuento %</Form.Label>
    <Form.Control
    type="number"
    ref={nombreCategoriaRef}
    defaultValue={props.cat.nombreCategoria}

      />
  </Form.Group>
          <Button variant="primary" onClick={handleClose2} type="submit">
            Publicar
          </Button>
            <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
</Form>
        </Modal.Body>
      </Modal>
        </div>
    );
};

export default BotoneraCategorias;