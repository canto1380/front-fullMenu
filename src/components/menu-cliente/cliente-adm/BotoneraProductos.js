import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStar, faUpload} from '@fortawesome/free-solid-svg-icons';
import '../../../css/clienteAdm.css'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const BotoneraProductos = () => {

    const eliminarProducto =(id) =>{
        Swal.fire({
            title: "Estas seguro de borrar esta noticia?",
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
                
                  Swal.fire(
                    "Producto Eliminada!",
                    "El producto se elimino correctamente",
                    "success"
                  );
              } catch (error) {
                console.log(error);
              }
            }
          });
    }

    return (
        <div>
            <Button title='Destacar' className='p-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </Button>
            <Button as={Link} to={'/admin-cliente/productos/editarProducto'} title='Editar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button> 
            <Button title='Eliminar' onClick={()=>eliminarProducto()} className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
            <Button title='Publicar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
            </Button>
        </div>
    );
};

export default BotoneraProductos;