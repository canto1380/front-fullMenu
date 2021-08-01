import {React, useState, useRef, useEffect } from 'react';
import { ListGroup, Button, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';
import BotoneraCategorias from './BotoneraCategorias';


const ItemCategorias = (props) => {   
    
    return (
        <div>
            
        <ListGroup.Item className='d-flex justify-content-between align-items-center'>
            <h5>{props.cat.nombreCategoria}</h5>
            <BotoneraCategorias cat={props.cat} setConsultarCat={props.setConsultarCat} cantDestacadas={props.cantDestacadas}/>
        </ListGroup.Item>
        </div>
    );
};

export default ItemCategorias;