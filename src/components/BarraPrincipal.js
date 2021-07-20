import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import '../css/adminPrincipal.css'

const BarraPrincipal = () => {
    return (
        <Container fluid className='my-3'>
            <Row>
            <Col xs={6} className='mt-3'>
                        <div>
                            <h1 className='size-letra'>El Paisa Empanadas</h1>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center" xs={6}>
                        <Link className='text-decoration-none text-dark' to={'/'}>
                        <div className="align-middle">
                            <span><FontAwesomeIcon icon={faThumbsUp} size='2x' className='me-2 size-icon'></FontAwesomeIcon></span>
                            <span>9</span>

                        </div>
                        </Link>
                        <Link className='text-decoration-none text-dark' to={'/'}>
                        <div className="mx-4">
                            <span><FontAwesomeIcon icon={faThumbsDown} size='2x' className='me-2 size-icon'></FontAwesomeIcon></span>
                            <span>10</span>
                        </div>
                        </Link>
                        <Link className='text-decoration-none text-dark' to={'/'}>
                        <div>
                            <span><FontAwesomeIcon icon={faCommentDots} size='2x' className='me-2 size-icon'></FontAwesomeIcon></span>
                            <span>100</span>
                        </div>
                        </Link>
                    </Col>
                    <hr className='my-2' />
            </Row>
        </Container>
    ); 
};

export default BarraPrincipal;