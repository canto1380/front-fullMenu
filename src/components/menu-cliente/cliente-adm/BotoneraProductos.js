import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStar, faUpload} from '@fortawesome/free-solid-svg-icons';
import '../../../css/clienteAdm.css'

const BotoneraProductos = () => {
    return (
        <div>
            <Button title='Destacar' className='p-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </Button>
            <Button title='Editar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button> 
            <Button title='Eliminar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
            <Button title='Publicar' className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
            </Button>
        </div>
    );
};

export default BotoneraProductos;