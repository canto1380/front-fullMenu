import React, { useState } from 'react';
import '../css/sidebar.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import Img from '../img/empa.jpg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClientePrincipal from './menu-cliente/ClientePrincipal'

const SidebarCliente = () => {
    const [inactivo, setInactivo] = useState(false)
    console.log(inactivo)

    const cerrarSesion = (e) => {
        console.log('a')
    }
    console.log(inactivo)
    return (
        <Container fluid className='app p-0 text-light d-flex justify-content-start'>
            <div className={`${inactivo ? 'sidebar-inactivo' : 'sidebar'}`}>
                
                <Row className={`${inactivo ? 'pt-3 pb-2 d-flex justify-content-center align-items-center m-0' : 'pt-3 pb-2 d-flex justify-content-around align-items-center m-0' }`}>
                    <Col xs={3} className='text-end px-0'>
                        <Image src={Img} roundedCircle className='img-user'></Image>
                    </Col>
                    <Col xs={6} className='px-1'>
                        <p className={`${inactivo ? 'inactivo' : "mb-0"}`}>Alejandro</p>
                    </Col>

                    {
                        (inactivo) ? (
                    <Col xs={12} className={`text-light mt-3 btn-menu text-center px-0`} onClick={() => setInactivo(!inactivo)}>
                        {
                        <ArrowForwardIosIcon />
                        }
                    </Col>
                        ) : (
                    <Col xs={2} className={`p-0 text-light btn-menu`} onClick={() => setInactivo(!inactivo)}>
                        {
                        <ArrowBackIosIcon />
                        }
                    </Col>
                        )
                    }
                </Row>
                
                <Row className='align-items-center btn-salir m-0 px-0'>
                    <Col xs={12} onClick={cerrarSesion} title="Salir" className="d-flex justify-content-start pt-2 ">
                        <ExitToAppIcon />
                        <p className={`${inactivo ? 'inactivo mb-0 px-3' : "mb-0 ps-3"}`}>Salir</p>
                    </Col>
                </Row>
                <hr />
                <ul className="text-decoration-none list-unstyled sidebarList">
                    {SidebarData.map((val, key) => {
                        return(    
                        <li
                            title={val.tittle}
                            className={`${inactivo ? 'sidebarList-row d-flex justify-content-center align-items-center' : 'sidebarList-row d-flex justify-content-start px-3 align-items-center'}`}
                            key={key}
                            onClick={()=>{window.location.pathname = val.link}}>
                            <div className=''>{val.icon}</div>
                            <div className={`${inactivo ? 'inactivo' : "ms-3"}`}>{val.tittle}</div>
                        </li>
                        )
                    })
                    }
                </ul>
            </div>

        </Container>
    );
};

export default SidebarCliente;