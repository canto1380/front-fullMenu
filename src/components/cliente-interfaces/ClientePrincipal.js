import {React, useState} from 'react';
import '../../css/cliente.css'
import NavCliente from '../../common/navbar/NavCliente'; 
import { withRouter } from 'react-router';
import TicketCliente from './TicketCliente';
import {Container} from 'react-bootstrap'
import Menu from '../Menu';



const ClientePrincipal = (props) => {
    const {inactivo, setInactivo, productos, consultarProductos, setConsultarProductos, categorias, consultarCat, setConsultarCat}=props;

    const [cantidadItem, setCantidadItem]=useState(0)
    // const cantidadItemRef=useRef(0);     
    // const precioP = prod.precio * cantidadItem
    

    const [pedido, setPedido]=useState({
        idMesa: "Mesa1",
         numPedido: "123",
         fecha: "",
         hora: "",
         descuento: 0,
         prod: productos.nombreProducto,
         precio: productos.precio,
         detalle : cantidadItem,
         total: "",
         formaPago: "",
         tipoPedido: ""
    })


    return (
        <div>
            <NavCliente></NavCliente>

            <div className="fondo d-flex justify-content-center mt-5">
            <Container className="row">
                <div className="col sm-12 col-md-6 mt-5">
                <Menu
                inactivo={inactivo}
                setInactivo={setInactivo}
                productos={productos}
                consultarProductos={consultarProductos}
                setConsultarProductos={setConsultarProductos}
                categorias={categorias}
                consultarCat={consultarCat}
                setConsultarCategorias={setConsultarCat}
                cantidadItem={cantidadItem}
                setCantidadItem={setCantidadItem}
                pedido={pedido}
                setPedido={setPedido} ></Menu>
                </div>
                <div className="col sm-12 col-md-6 mt-5">
                    <TicketCliente
                    pedido={pedido}
                    cantidadItem={cantidadItem}/>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default withRouter(ClientePrincipal);