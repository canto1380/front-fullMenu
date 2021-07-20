import React from 'react';
import '../../css/adminPrincipal.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import NavAdmin from '../../common/navbar/NavAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import BarraPrincipal from '../BarraPrincipal';

const AdminPrincipal = () => {
    return (
        <>
            <NavAdmin />
            <Container fluid className='my-3 px-4'>
                <BarraPrincipal/>
                <Row >
                    <div>
                        <h3 className='mb-3'>Pedidos pendientes</h3>
                    </div>
                    <Col className='my-3' xs={12} md={6} lg={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <span>Pedido N°: 132151358</span>
                                    <span>Mesa: 4</span>
                                </Card.Title>
                                <div>
                                    <div>
                                        <span><b>Cliente:</b> Alejandro Penalba</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span><b>Fecha:</b> 27/02/21</span>
                                        <span><b>Hora:</b>16:30 </span>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <p><b>Pedido</b></p>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <div className='d-flex justify-content-between'>
                                                <span>1 Docena de empanadas</span>
                                                <span><b>$900</b></span>
                                            </div>
                                            <div>
                                                <p className='my-0 ms-3'>4 Pollo</p>
                                                <p className='my-0 ms-3'>2 C. Picante</p>
                                                <p className='my-0 ms-3'>3 Ternera</p>
                                                <p className='my-0 ms-3'>3 Queso</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>1 Pizza Especial</span>
                                            <span><b>$700</b></span>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>2 Coca Cola X 1.5L</span>
                                            <span><b>$900</b></span>
                                        </div>
                                    </div>
                                    <div className='my-3 d-flex justify-content-between'>
                                        <span><b>TOTAL</b></span>
                                        <span><b>$2500</b></span>
                                    </div>
                                </div>
                                <hr />
                            </Card.Body>

                            <Card.Body className='d-flex justify-content-between pt-0'>
                                <Button className="btn btn-success size-letra-btn" href="#">Confirmar</Button>
                                <Button className="btn btn-primary size-letra-btn" href="#">Finalizada</Button>
                                <Button className="btn btn-danger size-letra-btn" href="#">Cancelar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='my-3' xs={12} md={6} lg={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <span>Pedido N°: 132151358</span>
                                    <span>Mesa: 4</span>
                                </Card.Title>
                                <div>
                                    <div>
                                    <span><b>Cliente:</b> Alejandro Penalba</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span><b>Fecha:</b> 27/02/21</span>
                                        <span><b>Hora:</b>16:30 </span>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <p><b>Pedido</b></p>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <div className='d-flex justify-content-between'>
                                                <span>1 Docena de empanadas</span>
                                                <span><b>$900</b></span>
                                            </div>
                                            <div>
                                                <p className='my-0 ms-3'>4 Pollo</p>
                                                <p className='my-0 ms-3'>2 C. Picante</p>
                                                <p className='my-0 ms-3'>3 Ternera</p>
                                                <p className='my-0 ms-3'>3 Queso</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>1 Pizza Especial</span>
                                            <span><b>$700</b></span>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>2 Coca Cola X 1.5L</span>
                                            <span><b>$900</b></span>
                                        </div>
                                    </div>
                                    <div className='my-3 d-flex justify-content-between'>
                                        <span><b>TOTAL</b></span>
                                        <span><b>$2500</b></span>
                                    </div>
                                </div>
                                <hr />
                            </Card.Body>

                            <Card.Body className='d-flex justify-content-between pt-0'>
                                <Button className="btn btn-success size-letra-btn" href="#">Confirmar</Button>
                                <Button className="btn btn-primary size-letra-btn" href="#">Finalizada</Button>
                                <Button className="btn btn-danger size-letra-btn" href="#">Cancelar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='my-3' xs={12} md={6} lg={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <span>Pedido N°: 132151358</span>
                                    <span>Mesa: 4</span>
                                </Card.Title>
                                <div>
                                    <div>
                                    <span><b>Cliente:</b> Alejandro Penalba</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span><b>Fecha:</b> 27/02/21</span>
                                        <span><b>Hora:</b>16:30 </span>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <p><b>Pedido</b></p>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <div className='d-flex justify-content-between'>
                                                <span>1 Docena de empanadas</span>
                                                <span><b>$900</b></span>
                                            </div>
                                            <div>
                                                <p className='my-0 ms-3'>4 Pollo</p>
                                                <p className='my-0 ms-3'>2 C. Picante</p>
                                                <p className='my-0 ms-3'>3 Ternera</p>
                                                <p className='my-0 ms-3'>3 Queso</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>1 Pizza Especial</span>
                                            <span><b>$700</b></span>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>2 Coca Cola X 1.5L</span>
                                            <span><b>$900</b></span>
                                        </div>
                                    </div>
                                    <div className='my-3 d-flex justify-content-between'>
                                        <span><b>TOTAL</b></span>
                                        <span><b>$2500</b></span>
                                    </div>
                                </div>
                                <hr />
                            </Card.Body>

                            <Card.Body className='d-flex justify-content-between pt-0'>
                                <Button className="btn btn-success size-letra-btn" disabled href="#">Confirmar</Button>
                                <Button className="btn btn-primary size-letra-btn" href="#">Finalizada</Button>
                                <Button className="btn btn-danger size-letra-btn" href="#">Cancelar</Button>
                            </Card.Body>
                            <Card.Body className='py-0 pb-2 d-flex justify-content-start align-items-center'>                                
                                    <span><FontAwesomeIcon icon={faCheckCircle} size='2x' className='me-2 text-success'></FontAwesomeIcon></span>
                                    <span>Pedido confirmado.</span>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='my-3' xs={12} md={6} lg={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <span>Pedido N°: 132151358</span>
                                    <span>Mesa: 4</span>
                                </Card.Title>
                                <div>
                                    <div>
                                    <span><b>Cliente:</b> Alejandro Penalba</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span><b>Fecha:</b> 27/02/21</span>
                                        <span><b>Hora:</b>16:30 </span>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <p><b>Pedido</b></p>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <div className='d-flex justify-content-between'>
                                                <span>1 Docena de empanadas</span>
                                                <span><b>$900</b></span>
                                            </div>
                                            <div>
                                                <p className='my-0 ms-3'>4 Pollo</p>
                                                <p className='my-0 ms-3'>2 C. Picante</p>
                                                <p className='my-0 ms-3'>3 Ternera</p>
                                                <p className='my-0 ms-3'>3 Queso</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>1 Pizza Especial</span>
                                            <span><b>$700</b></span>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <span>2 Coca Cola X 1.5L</span>
                                            <span><b>$900</b></span>
                                        </div>
                                    </div>
                                    <div className='my-3 d-flex justify-content-between'>
                                        <span><b>TOTAL</b></span>
                                        <span><b>$2500</b></span>
                                    </div>
                                </div>
                                <hr />
                            </Card.Body>

                            <Card.Body className='d-flex justify-content-between pt-0'>
                                <Button className="btn btn-success size-letra-btn" disabled href="#">Confirmar</Button>
                                <Button className="btn btn-primary size-letra-btn" href="#">Finalizada</Button>
                                <Button className="btn btn-danger size-letra-btn" href="#">Cancelar</Button>
                            </Card.Body>
                            <Card.Body className='py-0 pb-2 d-flex justify-content-start align-items-center'>                                
                                    <span><FontAwesomeIcon icon={faCheckCircle} size='2x' className='me-2 text-success'></FontAwesomeIcon></span>
                                    <span>Pedido confirmado.</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AdminPrincipal;