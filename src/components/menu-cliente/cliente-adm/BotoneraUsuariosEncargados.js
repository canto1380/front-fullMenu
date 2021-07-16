import React from 'react';
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BotoneraUsuariosEncargados = () => {

        const eliminarUsuario =(id) =>{
            Swal.fire({
                title: "Estas seguro de borrar el usuario?",
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
                        "Usuario Eliminado!",
                        "El usuario del encargado se elimino correctamente",
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
            <Button as={Link} to={'/admin-cliente/usuarios/editarEncargado'} title='Editar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button> 
            <Button title='Eliminar' onClick={()=>eliminarUsuario()} className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>   
        </div>
    );
};

export default BotoneraUsuariosEncargados;