import React, {useState, useRef} from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { useParams, withRouter } from 'react-router';
import {Link} from 'react-router-dom'
import SideBarCliente from '../../SideBarCliente';
import BarraPrincipal from '../../BarraPrincipal';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const EditarUsuarioEncargado = (props) => {
    const {inactivo, setInactivo} = props
    const [user, setUser] = useState({})
    
    const id = useParams().id;

    const URL = process.env.REACT_APP_API_URL+"/users/"+id;

    //defino variables ref
    const nombreRef = useRef("");
    const apellidoRef = useRef("");
    const emailRef = useRef("");
    const claveRef= useRef("");
    const celularRef=useRef("");
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
        if (nombreRef.current.value.trim() !== '' && n.test(nombreRef.current.value)) {
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
        if (apellidoRef.current.value.trim() !== '' && a.test(apellidoRef.current.value)) {
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
        if (emailRef.current.value.trim() !== '' && e.test(emailRef.current.value)) {
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
        if (claveRef.current.value.trim() !== '' && c.test(claveRef.current.value)) {
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
        if (celularRef.current.value.trim() !== '' && c.test(celularRef.current.value)) {
            setCelularValid(true)
            return false
        } else {
            setCelularInvalid(true)
            return true
        }
    }

    useEffect(()=>{
        const consultarUser = async ()=>{
            try{
                const respuesta = await fetch(URL);
                if(respuesta.status===200){
                    const resp = await respuesta.json();
                    setUser(resp)
                }
            }catch(error){
                console.log(error)

            }
        };
        consultarUser();
    },[id]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const usuarioModidicado = {
                nombre : nombreRef.current.value,
                apellido : apellidoRef.current.value,
                email: emailRef.current.value,
                clave: claveRef.current.value,
                celular: celularRef.current.value
            }

            const respuesta = await fetch(URL, {
                method: "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(usuarioModidicado)
            })
            if(respuesta.status===200){
                console.log("usuario modificado correctamente")
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
                  props.setConsultarUsuarios(true);
                props.history.push("/admin-cliente/usuarios");
            }else{
                console.log("ocurrio un error");
            }

        }catch(error){

        }
    }

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
                        <SideBarCliente inactivo={inactivo} setInactivo={setInactivo} />
            <div className={`${inactivo ? 'parte2-inactivo' : 'parte2'}`}>
                <BarraPrincipal />
                <div className='px-5'>
                <h3>Editar encargado</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Nombre</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                ref={nombreRef}
                                defaultValue={user.nombre}
                                onBlur={validacionNom}
                                isValid={nombreValid}
                                isInvalid={nombreInvalid}
                                required
                                name='nombre'
                                minLength="4"
                                maxLength="25"
                                // onChange={handleValores}
                                 />
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
                                ref={apellidoRef}
                                defaultValue={user.apellido}
                                name='apellido'
                                minLength="4"
                                maxLength="25"
                                onBlur={validacionApe}
                                isValid={apellidoValid}
                                isInvalid={apellidoInvalid}
                                // onChange={handleValores} 
                                />
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
                                ref={celularRef}
                                defaultValue={user.celular}
                                onBlur={validacionCel}
                                isValid={celularValid}
                                isInvalid={celularInvalid}
                                required
                                name='celular'
                                maxLength={10}
                                // onChange={handleValores} 
                                />
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
                                ref={emailRef}
                                defaultValue={user.email}
                                name='email'
                                onBlur={validacionEmail}
                                isValid={emailValid}
                                isInvalid={emailInvalid}
                                // onChange={handleValores} 
                                />
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
                                ref={claveRef}
                                defaultValue={user.clave}
                                onBlur={validacionClave}
                                isValid={claveValid}
                                isInvalid={claveInvalid}
                                required
                                name='clave'
                                minLength="8"
                                maxLength="14"
                                // onChange={handleValores} 
                                />
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
                                defaultValue={user.clave}
                                onBlur={validacionClave}
                                isValid={claveValid}
                                isInvalid={claveInvalid}
                                required
                                name='clave'
                                minLength="8"
                                maxLength="14"
                                // onChange={handleValores} 
                                />
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger "
                            >
                                Campo obligatorio. Entre 8 y 14 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className='d-flex justify-content-start align-items-center'>
                            <Button variant='primary' type='submit'>Editar encargado</Button>
                            <Link className='btn btn-secondary ms-3' to={'/admin-cliente/usuarios'}>Volver</Link>
                        </div>
                    </Row>
                </Form>
                </div>
            </div>
        </Container>
    );
};

export default withRouter(EditarUsuarioEncargado);