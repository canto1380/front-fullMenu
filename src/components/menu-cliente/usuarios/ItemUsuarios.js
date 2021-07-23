import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BotoneraUsuariosEncargados from './BotoneraUsuariosEncargados';
const ItemUsuarios = (props) => {
    return (
        <>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>{props.user.apellido} {props.user.nombre}</b></p>
                <BotoneraUsuariosEncargados user={props.user} setConsultarUsuarios={props.setConsultarUsuarios} />
            </ListGroup.Item>     
        </>
    );
};

export default ItemUsuarios;