import React from 'react';
import '../../css/cliente.css'
import NavCliente from '../../common/navbar/NavCliente'; 
import { withRouter } from 'react-router';
import CardMenu from './CardMenu';
import TicketCliente from './TicketCliente';
import {Container} from 'react-bootstrap'



const ClientePrincipal = () => {
    return (
        <div>
            <NavCliente></NavCliente>

            <div className="fondo d-flex justify-content-center mt-5">
            <Container className="row">
                <div className="col sm-12 col-md-6">
                <CardMenu categoria="Empandadas"></CardMenu>
                <CardMenu categoria="Bebida"></CardMenu>
                <CardMenu categoria="Postre"></CardMenu>
                <CardMenu categoria="Empandadas"></CardMenu>
                <CardMenu categoria="Bebida"></CardMenu>
                <CardMenu categoria="Postre"></CardMenu>
                <CardMenu categoria="Empandadas"></CardMenu>
                <CardMenu categoria="Bebida"></CardMenu>
                <CardMenu categoria="Postre"></CardMenu>
                <CardMenu categoria="Empandadas"></CardMenu>
                <CardMenu categoria="Bebida"></CardMenu>
                <CardMenu categoria="Postre"></CardMenu>
                </div>
                <div className="col sm-12 col-md-6">
                    <TicketCliente></TicketCliente>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default withRouter(ClientePrincipal);