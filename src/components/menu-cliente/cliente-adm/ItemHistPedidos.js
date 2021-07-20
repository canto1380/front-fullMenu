import React from 'react';
import { Table } from 'react-bootstrap';
import BotoneraPedidos from './BotoneraPedidos';

const ItemHistPedidos = () => {

    const pedidosData =[
        {
            nPedido:"15321", Encargado:"Pablo Paz", Fecha:"15/05/2021",monto:1688
        },
        {
            nPedido:"15322",Encargado:"Paula Perez", Fecha:"05/10/2021", monto:2569
        },
        {
            nPedido:"15322", Encargado:"Pablo Paz", Fecha:"15/08/2020", monto:759
        },
        {
            nPedido:"15323", Encargado:"Paula Perez", Fecha:"16/05/2021", monto:2389
        },
        {
            nPedido:"15324", Encargado:"Paula Perez",Fecha:"23/11/2021", monto:3699
        }
    ]
    return (
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td className='mb-0'><b>N° Pedido</b></td>
                        <td>Encargado</td>
                        <td>Fecha</td>
                        <td>Monto</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                {pedidosData.map((val, key)=>{
                    return(
                        <tr key={key}>
                            <td>{val.nPedido}</td>
                            <td>{val.Encargado}</td>
                            <td>{val.Fecha}</td>
                            <td>{val.monto}</td>
                            <td><BotoneraPedidos/></td>
                        </tr>
                    )   
                })}
                </tbody>
                
            </Table>
    );
};

export default ItemHistPedidos;