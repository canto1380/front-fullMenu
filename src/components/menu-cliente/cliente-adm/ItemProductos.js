import React from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import BotoneraProductos from './BotoneraProductos';

const ItemProductos = (props) => {
    const { productos, buscador, productosFiltrados } = props
    console.log(buscador)
    return (
        <>
            <Table responsive striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <td className='mb-0'><b>Nombre</b></td>
                        <td><b>Categoria</b></td>
                        <td><b>Precio</b></td>
                        <td><b>-%</b></td>
                        <td><b>Total</b></td>
                        <td className='text-end'><b>Acciones</b></td>
                    </tr>
                </thead>
                <tbody>
                {
                    (productosFiltrados.length === 0)?(
                        productos.map((prod, key) => (
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
                    ) :(
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
                }
                </tbody>
            </Table>
                <div>

                        {/* {                         
                                buscador.map((aa, key)=>(
                                    <div key={key}>
                                    <p>{aa.nombreProducto}</p>
                                    <p>{aa.categoria}</p>
                                    </div>
                                ))  
                        } */}
                </div>
        </>
    );
};

export default ItemProductos;