import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BotoneraProductos from './BotoneraProductos';

const ItemProductos = () => {
    return (
        <>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>Nombre Categoria 1</b></p>
                <BotoneraProductos />
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>Nombre Categoria 2</b></p>
                <BotoneraProductos />
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'><b>Nombre Categoria 3</b></p>
                <BotoneraProductos />
            </ListGroup.Item>
        </>
    );
};

export default ItemProductos;