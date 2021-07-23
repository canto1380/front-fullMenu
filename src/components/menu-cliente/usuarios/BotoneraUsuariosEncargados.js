import React from 'react';
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BotoneraUsuariosEncargados = (props) => {

        

        const eliminarUsuario =(id) =>{
          const URL= `${process.env.REACT_APP_API_URL}/users/${id}`
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
                    const res = await fetch (URL,{
                      method: "DELETE",
                      headers : {
                        "Content-Type" : "application/json"
                      }
                    }
                      
                    )

                    
                      Swal.fire(
                        "Usuario Eliminado!",
                        "El usuario del encargado se elimino correctamente",
                        "success"
                      );

                      props.setConsultarUsuarios(true)
                  } catch (error) {
                    console.log(error);
                  }
                }
              });
        }

    return (
        <div>
            <Button as={Link} to={`/admin-cliente/usuarios/editarEncargado/${props.user.id}`} title='Editar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button> 
            <Button title='Eliminar' onClick={()=>eliminarUsuario(props.user.id)} className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>   
        </div>
    );
};

export default BotoneraUsuariosEncargados;