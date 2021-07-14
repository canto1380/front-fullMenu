import React from 'react';
import { Container } from 'react-bootstrap';
import SideBarCliente from '../../SideBarCliente';

const AgregarProducto = (props) => {
    const {inactivo, setInactivo} = props
    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SideBarCliente
                inactivo={inactivo}
                setInactivo={setInactivo}
            />
            <div className={`${inactivo ? 'parte2-inactivo' :'parte2'}`}>
                <p>formulario</p>
            </div>
            
        </Container>
    );
};

export default AgregarProducto;