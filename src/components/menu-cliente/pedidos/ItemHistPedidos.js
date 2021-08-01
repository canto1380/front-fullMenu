import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
import BotoneraPedidos from './BotoneraPedidos';

const ItemHistPedidos = (props) => {
    const { pedidos, filtradoBuscador, buscador } = props
    const [msj, setMsj] = useState('Sin coincidencia')
    const {bandera, setBandera} = useState(false)


    return (
        <Table responsive striped bordered hover size="sm">
            <thead>
                <tr>
                    <td className='mb-0'><b>N° Pedido</b></td>
                    <td><b>Encargado</b></td>
                    <td><b>Mesa</b></td>
                    <td><b>Fecha</b></td>
                    <td><b>Total</b></td>
                    <td><b>Acciones</b></td>
                </tr>
            </thead>
            <tbody>
                {
                    (filtradoBuscador.length === 0 && buscador === "" ) ?(
                        pedidos.map((val, key) => (
                            
                                <tr key={key}>
                                    <td className="alineacionVertical">{val.id}</td>
                                    <td className="alineacionVertical">{val.idEncargado}</td>
                                    <td className="alineacionVertical">{val.idMesa}</td>
                                    <td className="alineacionVertical">{val.fecha}</td>
                                    <td className="alineacionVertical">${val.total}</td>
                                    <td className='text-end'>
                                        <BotoneraPedidos
                                            pedidos={val}
                                        />
                                    </td>
                                </tr>
                        ))
                    )
                    :(filtradoBuscador.length === 0 && buscador !== "") ?(
                            <tr className='border border-0'>
                                <td className='border border-0'>
                                    <span>Sin coincidencias..</span>
                                </td>
                            </tr>
                        ):(
                            

                    
                        filtradoBuscador.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="alineacionVertical">{val.id}</td>
                                    <td className="alineacionVertical">{val.idEncargado}</td>
                                    <td className="alineacionVertical">{val.idMesa}</td>
                                    <td className="alineacionVertical">{val.fecha}</td>
                                    <td className="alineacionVertical">${val.total}</td>
                                    <td className='text-end'>
                                        <BotoneraPedidos
                                            pedidos={val}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    ) 
                }
            </tbody>

        </Table>
    );
};

export default ItemHistPedidos;