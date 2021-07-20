import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BotoneraUsuariosEncargados from './BotoneraUsuariosEncargados';
const ItemUsuarios = () => {
    return (
        <>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>Encargado 1</b></p>
                <BotoneraUsuariosEncargados />
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>Encargado 2</b></p>
                <BotoneraUsuariosEncargados />
            </ListGroup.Item>
            
        </>
    );
};

export default ItemUsuarios;