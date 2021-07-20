import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const ItemCategorias = (props) => {    

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
            const URL = `${process.env.REACT_APP_API_URL}/categorias/${id}`;
            try{
                const res = await fetch(URL, {
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
    

    return (
        <ListGroup.Item className="d-flex justify-content-around mx-3">
            <h5>{props.cat.nombreCategoria}</h5>
            <Button variant="warning"><FontAwesomeIcon icon={faEdit}> Editar</FontAwesomeIcon></Button>
            <Button variant="danger" onClick={()=>eliminarCategoria(props.cat.id)}><FontAwesomeIcon icon={faTrashAlt}>Eliminar</FontAwesomeIcon></Button>

        </ListGroup.Item>
    );
};

export default ItemCategorias;