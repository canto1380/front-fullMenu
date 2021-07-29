import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStar, faUpload} from '@fortawesome/free-solid-svg-icons';
import '../../../css/clienteAdm.css'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const BotoneraProductos = (props) => {
  const {productos, setConsultarProductos} = props
  const eliminarProducto =(id) =>{
        const URL = process.env.REACT_APP_API_URL+ `/productos/${id}`
        Swal.fire({
            title: "Estas seguro de borrar este producto?",
            text: "Una vez eliminado no se puede volver atrás!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                  const res = await fetch(URL, {
                    method: 'DELETE',
                    headers:{
                      "Content-Type":"application-json"
                    }
                  })
                  if(res.status === 200){
                    Swal.fire(
                      "Producto Eliminado!",
                      "El producto se elimino correctamente",
                      "success"
                    );
                    setConsultarProductos(true)
                  }
              } catch (error) {
                console.log(error);
              }
            }
          });
    }

  const publicarProducto = async (id, publicado) =>{
    const url = process.env.REACT_APP_API_URL+'/productos/'+id;
    try {
      const res =await fetch(url)
      if(res.status !== 200){
        const resp = await res.json()
        if(resp.publicado === undefined){
          console.log('pppp')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Error'
          })
        }
      } else{
        const urlEditar = process.env.REACT_APP_API_URL+'/productos/'+id
        try {
          const productoModificado ={
            nombreProducto:productos.nombreProducto,
            descripcion:productos.descripcion,
            precio:productos.precio,
            destacado:productos.destacado ,
            descuento: productos.descuento,
            categoria:productos.categoria ,
            foto:productos.foto,
            publicado: !publicado,
            total: productos.total
          }
          const respuesta = await fetch(urlEditar,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(productoModificado)
          });
          if(respuesta.status === 200){
            setConsultarProductos(true)
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
  }

  const destacarProducto= async (id, destacado)=>{
    const url = process.env.REACT_APP_API_URL+'/productos/'+id;
    try {
      const res = await fetch(url)
      if(res.status !== 200){
        const resp = await res.json()
        if(resp.publicado === undefined){
          console.log('pppp')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Error'
          })
        }
      } else{
        const urlEditar = process.env.REACT_APP_API_URL+'/productos/'+id
        try {
          const productoModificado ={
            nombreProducto:productos.nombreProducto,
            descripcion:productos.descripcion,
            precio:productos.precio,
            destacado: !destacado ,
            descuento: productos.descuento,
            categoria:productos.categoria ,
            foto:productos.foto,
            publicado: productos.publicado,
            total: productos.total
          }
          const respuesta = await fetch(urlEditar,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(productoModificado)
          });
          if(respuesta.status === 200){
            setConsultarProductos(true)
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
  }

    return (
        <div>
          <Button 
            title={productos.destacado ? 'Quitar' : 'Destacar'} 
            className={`${productos.destacado ? 'bg-dark border-dark text-light p-1' : 'p-1 bg-light border-dark text-dark'}`}
            onClick={()=>destacarProducto(productos.id, productos.destacado)}
            >
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </Button>

            <Button as={Link} to={`/admin-cliente/productos/editarProducto/${productos.id}`} title='Editar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button> 
            <Button title='Eliminar' onClick={()=>eliminarProducto(productos.id)} className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
            <Button 
              title={productos.publicado ? 'Quitar' :'Publicar'} 
              className={`${productos.publicado ? 'bg-primary text-light p-1 ms-1' : 'ms-1 p-1 bg-light border-dark text-dark'}`}
              onClick={()=>publicarProducto(productos.id, productos.publicado)}
              >
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
            </Button>
        </div>
    );
};

export default BotoneraProductos;