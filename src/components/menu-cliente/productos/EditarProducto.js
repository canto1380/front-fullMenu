import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import BarraPrincipal from '../../BarraPrincipal';
import SideBarCliente from '../../SideBarCliente';
import Swal from "sweetalert2";


const EditarProducto = (props) => {
    const {inactivo, setInactivo} = props
    const [producto, setProducto] = useState({
        nombreProducto: "",
        descripcion: "",
        categoria: "",
        precio: "",
        descuento: "",
        foto: "",
        publicado: true
    })
    const [total,setTotal]= useState('')
    /** State Validaciones de feed */
    const [prodValid, setProdValid] = useState("");
    const [prodInvalid, setProdInvalid] = useState("");

    const [descripValid, setDescripValid] = useState("");
    const [descripInvalid, setDescripInvalid] = useState("");

    const [catValid, setCatValid] = useState("");
    const [catInvalid, setCatInvalid] = useState("");

    const [precioValid, setPrecioValid] = useState("");
    const [precioInvalid, setPrecioInvalid] = useState("");

    const [descValid, setDescValid] = useState("");
    const [descInvalid, setDescInvalid] = useState("");

    const [totalValid, setTotalValid] = useState("");
    const [totalInvalid, setTotalInvalid] = useState("");

    /** Expresiones regulares **/
    const expresiones = {
        prod: /^[^\n]{8,20}$/,
        descrip: /^[^\n]{0,100}$/,
        cat: /^[^\n]{0,30}$/,
        pre: /^[0-9]{1,4}$/,
        desc: /^[0-9]{0,2}$/
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const validacionProd = () => {
        setProdValid('')
        setProdInvalid('')
        const p = expresiones.prod
        if (producto.nombreProducto.trim() !== '' && p.test(producto.nombreProducto)) {
            setProdValid(true)
            return false
        } else {
            setProdInvalid(true)
            return true
        }
    }
    const validacionDescrip = () => {
        setDescripValid('')
        setDescripInvalid('')
        const d = expresiones.descrip
        if ( d.test(producto.descripcion)) {
            setDescripValid(true)
            return false
        } else {
            setDescripInvalid(true)
            return true
        }
    }
    const validacionCategoria = () => {
        setCatValid('')
        setCatInvalid('')
        const c = expresiones.cat
        if (c.test(producto.categoria)) {
            setCatValid(true)
            return false
        } else {
            setCatInvalid(true)
            return true
        }
    }
    const validacionPrecio = () => {
        setPrecioValid('')
        setPrecioInvalid('')
        const p = expresiones.pre
        if (producto.precio.trim() !== '' && p.test(producto.precio)) {
            setPrecioValid(true)
            return false
        } else {
            setPrecioInvalid(true)
            return true
        }
    }
    const validacionDesc = () => {
        setDescValid('')
        setDescInvalid('')
        const d = expresiones.desc
        if (d.test(producto.descuento)) {
            setDescValid(true)
            return false
        } else {
            setDescInvalid(true)
            return true
        }
    }
    const validacionTotal = () => {
        setTotalValid('')
        setTotalInvalid('')
        const t = expresiones.pre
        if (t.test(total)) {
            setTotalValid(true)
            return false
        } else {
            setTotalInvalid(true)
            return true
        }
    }
    
    const handleValores = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value })
    };
    const handleSubmit =(e) =>{
        e.preventDefault()
    }

    return (
        <Container fluid className='app p-0 text-dark d-flex justify-content-start'>
            <SideBarCliente
                inactivo={inactivo}
                setInactivo={setInactivo}
            />
            <div className={`${inactivo ? 'parte2-inactivo': 'parte2'}`}>
                <BarraPrincipal/>
                <div className='px-5'>
                    <h3>Editar producto</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Nombre producto</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name='nombreProducto'
                                required
                                onBlur={validacionProd}
                                isValid={prodValid}
                                isInvalid={prodInvalid}
                                onChange={handleValores}
                                placeholder="Coca Cola x 1.5 lts" />
                        <Form.Control.Feedback
                            type="invalid"
                            className="text-danger "
                            >
                            Campo Obligatorio. Entre 8 y 20 caracteres.
                        </Form.Control.Feedback>
                            </Form.Group>

                        <Form.Group className="">
                            <Form.Label>
                                <b>Descripcion del producto</b>
                            </Form.Label>
                            <Form.Control
                                maxLength="100"
                                as="textarea"
                                rows={2}
                                name='descripcion'
                                onChange={handleValores}
                                onBlur={validacionDescrip}
                                isValid={descripValid}
                                isInvalid={descripInvalid}
                            />
                            <Form.Label>
                                <p className='mb-0'>/100</p>
                            </Form.Label>
                            <Form.Control.Feedback
                                type="invalid"
                                className="text-danger small">
                                    Maximo de 100 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Categoria</b>
                            </Form.Label>
                            <Form.Control
                                onBlur={validacionCategoria}
                                isValid={catValid}
                                isInvalid={catInvalid}
                                type="text"
                                name='categoria'
                                onChange={handleValores}
                                disabled />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} xs={12} md={6} lg={4} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <b>Precio</b>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    onBlur={validacionPrecio}
                                    isValid={precioValid}
                                    isInvalid={precioInvalid}
                                    required
                                    placeholder="$"
                                    
                                    name='precio'
                                    onChange={handleValores} />
                                    <Form.Control.Feedback
                            type="invalid"
                            className="text-danger "
                            >
                            Campo obligatorio.
                        </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} xs={12} md={6} lg={4} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <b>Descuento</b>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name='descuento'
                                    onBlur={validacionDesc}
                                    isValid={descValid}
                                    isInvalid={descInvalid}
                                    onChange={handleValores}
                                    placeholder="10" />
                                <Form.Text className="text-muted">
                                    El numero ingresado es el % de descuento
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} xs={12} lg={4} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <b>Total</b>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    readOnly
                                    onBlur={validacionTotal}
                                    isValid={totalValid}
                                    isInvalid={totalInvalid}
                                    value={producto.precio * producto.descuento}
                                    onSelect={(e) => setTotal(producto.precio * producto.descuento)}
                                    />
                                <Form.Text className="text-muted">
                                    Precio total con descuento
                                </Form.Text>
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formFile" className="mb-3">
                            <div>
                                <Form.Label><b>Seleccione una foto</b></Form.Label>
                            </div>
                            <Form.Control
                                type="file"
                                name='foto'
                                onChange={handleValores} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Publicar"
                                name='publicado'
                                defaultChecked={producto.publicado}
                                defaultValue={false}

                                onChange={handleValores}
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-start align-items-center'>
                            <Button variant="primary" type="submit">
                                Editar producto
                            </Button>
                            <Link className='btn btn-secondary ms-3' to={'/admin-cliente/productos'}>Volver</Link>
                        </div>
                    </Form>
                </div>
            </div>
                
            
        </Container>
    );
};

export default EditarProducto;