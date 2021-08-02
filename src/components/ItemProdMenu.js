import React from 'react';
import { useState, useRef } from 'react';
import {Button, Container, FormControl, InputGroup} from "react-bootstrap"
import ProductosClienteAdm from './menu-cliente/productos/ProductosClienteAdm';

const ItemProdMenu = (props) => {
    const {prod, pedido, setPedido}=props;
    const [cantidadItem, setCantidadItem]=useState(0)
    // const cantidadItemRef=useRef(0);     
    // const precioP = prod.precio * cantidadItem
    
   

    // const [pedido, setPedido]=useState({
    //     idMesa: "Mesa1",
    //      numPedido: "123",
    //      fecha: "",
    //      hora: "",
    //      descuento: 0,
    //      detalle : cantidadItemRef.current.value,
    //      total: "",
    //      formaPago: "",
    //      tipoPedido: ""
    // })

    const sumarItem = ()=>{
console.log("desde sumar")
let total = cantidadItem+1
setCantidadItem(total)
setPedido({
    idMesa: "Mesa1",
     numPedido: "123",
     fecha: "",
     hora: "",
     descuento: 0,
     prod:prod.nombreProducto,
     precio: prod.precio,
     detalle : `${total}`,
     total: "",
     formaPago: "",
     tipoPedido: ""
})
}
const restarItem = ()=>{
    console.log("desde restar")
    let total = cantidadItem-1
    if(cantidadItem>0){
        setCantidadItem(total)
        setPedido({
            idMesa: "Mesa1",
             numPedido: "123",
             fecha: "",
             hora: "",
             descuento: 0,
             prod: prod.nombreProducto,
             precio: prod.precio,
             detalle : `${total}`,
             total: "",
             formaPago: "",
             tipoPedido: ""
        })
        
console.log(pedido)
    }else{
        setCantidadItem(0)
        setPedido({
            idMesa: "Mesa1",
             numPedido: "123",
             fecha: "",
             hora: "",
             descuento: 0,
             prod:"-",
             precio: "-",
             detalle :"-",
             total: "",
             formaPago: "",
             tipoPedido: ""
        })
    }

}

 const handleValores = (e) => {
     setPedido({ ...pedido, [e.target.name]: e.target.value })
 }
console.log(cantidadItem)
console.log(pedido)




    return (
        <Container className="my-3">
            <div className="row">
        <div className="col-4">
            {prod.nombreProducto}
            <div className="small text-muted">{prod.descripcion}</div>
            </div>
        <div className="col-4">$ {prod.precio}</div>
        <div className="col-4 d-flex align-items-center">
        <Button size="sm" onClick={restarItem}>-</Button>
    <FormControl
    className="text-center"
    name="detalle"
    // ref={cantidadItemRef}
    value={cantidadItem}
    onChange={handleValores}>  
    </FormControl>
    
        <Button size="sm" onClick={sumarItem}>+</Button></div>
        
            </div>
    <div className="col-6 d-flex">
        
    </div>
    <div>
      
    </div>
        </Container>
    );
};

export default ItemProdMenu;