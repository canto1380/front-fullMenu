import React from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import BotoneraProductos from './BotoneraProductos';
import '../../../css/clienteAdm.css'

const ItemProductos = (props) => {
    const { productos, filtradoBuscador, productosFiltrados } = props
    let filtradoTotal =[]
    productosFiltrados.filter((d1)=>{
        filtradoBuscador.filter((d2)=>{
            if(d1.id === d2.id){
                filtradoTotal.push(d1)
            }
        })
    })
    console.log(filtradoBuscador)
    return (
        <div className='mx-3'>
            <Table responsive striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <td className='mb-0'><b>Nombre</b></td>
                        <td><b>Categoria</b></td>
                        <td><b>Precio</b></td>
                        <td><b>- %</b></td>
                        <td><b>Total</b></td>
                        <td className='text-end'><b>Acciones</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (productosFiltrados.length === 0 && filtradoBuscador.length === 0)?(
                            productos.map((prod, key) => (
                                    <tr key={key}>
                                        <td className="alineacionVertical">{prod.nombreProducto}</td>
                                        <td className="alineacionVertical">{prod.categoria}</td>
                                        <td className="alineacionVertical">${prod.precio}</td>
                                        <td className="alineacionVertical">-{prod.descuento}%</td>
                                        <td className="alineacionVertical">${prod.total}</td>
                                        <td className='text-end'>
                                            <BotoneraProductos
                                                productos={prod}
                                                setConsultarProductos={props.setConsultarProductos}
                                            />
                                        </td>
                                    </tr>
                                )
                            )
                        ) 
                        :(productosFiltrados.length !== 0 & filtradoBuscador.length === 0)?(
                            productosFiltrados.map((prod, key) => (
                                <tr key={key}>
                                    <td>{prod.nombreProducto}</td>
                                    <td>{prod.categoria}</td>
                                    <td>${prod.precio}</td>
                                    <td>-{prod.descuento}%</td>
                                    <td>${prod.total}</td>
                                    <td className='text-end'>
                                        <BotoneraProductos
                                            productos={prod}
                                            setConsultarProductos={props.setConsultarProductos}
                                        />
                                    </td>
                                </tr>
                            )
                        )
                        )
                        :(productosFiltrados.length === 0 & filtradoBuscador.length !== 0)?(
                            filtradoBuscador.map((prod, key) => (
                                <tr key={key}>
                                    <td>{prod.nombreProducto}</td>
                                    <td>{prod.categoria}</td>
                                    <td>${prod.precio}</td>
                                    <td>-{prod.descuento}%</td>
                                    <td>${prod.total}</td>
                                    <td className='text-end'>
                                        <BotoneraProductos
                                            productos={prod}
                                            setConsultarProductos={props.setConsultarProductos}
                                        />
                                    </td>
                                </tr>
                            )
                        )
                        )
                        :(
                            filtradoTotal.map((prod, key) => (
                                <tr key={key}>
                                    <td>{prod.nombreProducto}</td>
                                    <td>{prod.categoria}</td>
                                    <td>${prod.precio}</td>
                                    <td>-{prod.descuento}%</td>
                                    <td>${prod.total}</td>
                                    <td className='text-end'>
                                        <BotoneraProductos
                                            productos={prod}
                                            setConsultarProductos={props.setConsultarProductos}
                                        />
                                    </td>
                                </tr>
                            )
                        )
                        )
                    }
                </tbody>
            </Table>
               
        </div>
    );
};

export default ItemProductos;