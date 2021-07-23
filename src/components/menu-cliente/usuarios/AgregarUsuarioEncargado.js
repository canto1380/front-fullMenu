import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router'; 
import BarraPrincipal from '../../BarraPrincipal';
import SideBarCliente from '../../SideBarCliente';
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";


const AgregarUsuarioEncargado = (props) => {
    const { inactivo, setInactivo, setConsultarUsuarios } = props
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        clave: "",
        celular: "",
        tipoUsuario : "encargado"
    })

    ;
    const URL = process.env.REACT_APP_API_URL + "/users";

    /** State para validaciones **/
    const [nombreValid, setNombreValid] = useState("");
    const [nombreInvalid, setNombreInvalid] = useState("");

    const [apellidoValid, setApellidoValid] = useState("");
    const [apellidoInvalid, setApellidoInvalid] = useState("");

    const [emailValid, setEmailValid] = useState("");
    const [emailInvalid, setEmailInvalid] = useState("");

    const [claveValid, setClaveValid] = useState("");
    const [claveInvalid, setClaveInvalid] = useState("");

    const [celularValid, setCelularValid] = useState("");
    const [celularInvalid, setCelularInvalid] = useState("");

    /** Expresiones **/
    const expresiones = {
        nombre: /^[^\n]{4,25}$/,
        apellido: /^[^\n]{4,25}$/,
        email: /^\w+@\w+\.[a-z]{2,}$/,
        clave: /^[^\n]{8,14}$/,
        celular: /^[0-9]{10,10}/
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    const validacionNom = () => {
        setNombreInvalid('')
        setNombreValid('')
        const n = expresiones.nombre
        if (user.nombre.trim() !== '' && n.test(user.nombre)) {
            setNombreValid(true)
            return false
        } else {
            setNombreInvalid(true)
            return true
        }
    }
    const validacionApe = () => {
        setApellidoInvalid('')
        setApellidoValid('')
        const a = expresiones.apellido
        if (user.apellido.trim() !== '' && a.test(user.apellido)) {
            setApellidoValid(true)
            return false
        } else {
            setApellidoInvalid(true)
            return true
        }
    }
    const validacionEmail = () => {
        setEmailInvalid('')
        setEmailValid('')
        const e = expresiones.email
        if (user.email.trim() !== '' && e.test(user.email)) {
            setEmailValid(true)
            return false
        } else {
            setEmailInvalid(true)
            return true
        }
    }
    const validacionClave = () => {
        setClaveInvalid('')
        setClaveValid('')
        const c = expresiones.clave
        if (user.clave.trim() !== '' && c.test(user.clave)) {
            setClaveValid(true)
            return false
        } else {
            setClaveInvalid(true)
            return true
        }
    }
    const validacionCel = () => {
        setCelularInvalid('')
        setCelularValid('')
        const c = expresiones.celular
        if (user.celular.trim() !== '' && c.test(user.celular)) {
            setCelularValid(true)
            return false
        } else {
            setCelularInvalid(true)
            return true
        }
    }

    const handleValores = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        const nuevoUsuario = user;
        
        if(validacionApe(user.apellido) || validacionNom(user.nombre) || validacionEmail(user.email) || validacionClave(user.clave) || validacionCel(user.celular)){
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Encargado no agregado'
              })
        } else {
            console.log(user)
            console.log(nuevoUsuario)
            try{
                const res=await fetch(URL, {
                    method: "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(nuevoUsuario)
                });

                console.log(nuevoUsuario)
                console.log(res)
                if(res.status===201){
                    console.log(res)
                console.log(nuevoUsuario)
                console.log(user)
            console.log(nuevoUsuario)
            setConsultarUsuarios(true);

            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Encargado agregado'
              })
            e.target.reset();
            props.history.push("/admin-cliente/usuarios")


                }

            }catch(error){
                console.log(error)
            }
        }
    }

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SideBarCliente inactivo={inactivo} setInactivo={setInactivo} />
            <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
                <BarraPrincipal />
                <div className='px-5'>
                <h3>Nuevo encargado</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Nombre</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                onBlur={validacionNom}
                                isValid={nombreValid}
                                isInvalid={nombreInvalid}
                                required
                                placeholder="Juan"
                                name='nombre'
                                minLength="4"
                                maxLength="25"
                                onChange={handleValores} />
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger "
                            >
                                Campo obligatorio. De 4 a 25 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Apellido</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name='apellido'
                                minLength="4"
                                maxLength="25"
                                onBlur={validacionApe}
                                isValid={apellidoValid}
                                isInvalid={apellidoInvalid}
                                onChange={handleValores}
                                placeholder="Perez" />
                            <Form.Text className="text-muted">
                                Campo obligatorio. De 4 a 25 carecteres
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Celular</b>
                            </Form.Label>
                            <Form.Control
                                type="tel"
                                onBlur={validacionCel}
                                isValid={celularValid}
                                isInvalid={celularInvalid}
                                required
                                placeholder="3815151515"
                                name='celular'
                                maxLength={10}
                                onChange={handleValores} />
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger "
                            >
                                Campo obligatorio. 10 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Email</b>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name='email'
                                onBlur={validacionEmail}
                                isValid={emailValid}
                                isInvalid={emailInvalid}
                                onChange={handleValores}
                                placeholder="algo@dominio.com" />
                            <Form.Text className="text-muted">
                                Campo obligatorio.
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Clave</b>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onBlur={validacionClave}
                                isValid={claveValid}
                                isInvalid={claveInvalid}
                                required
                                name='clave'
                                minLength="8"
                                maxLength="14"
                                onChange={handleValores} />
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger "
                            >
                                Campo obligatorio. Entre 8 y 14 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Repetir clave</b>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onBlur={validacionClave}
                                isValid={claveValid}
                                isInvalid={claveInvalid}
                                required
                                name='clave'
                                minLength="8"
                                maxLength="14"
                                onChange={handleValores} />
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger "
                            >
                                Campo obligatorio. Entre 8 y 14 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className='d-flex justify-content-start align-items-center'>
                            <Button variant='primary' type='submit'>Agregar encargado</Button>
                            <Link className='btn btn-secondary ms-3' to={'/admin-cliente/usuarios'}>Volver</Link>
                        </div>
                    </Row>
                </Form>
                </div>
            </div>

        </Container>
    );
};

export default withRouter(AgregarUsuarioEncargado);