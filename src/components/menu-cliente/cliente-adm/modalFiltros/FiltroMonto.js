import React, {useState} from 'react';
import {Form} from 'react-bootstrap'

const FiltroMonto = () => {
    const [valor, setValor] = useState('')
    const[filtrado, setFiltrado] =({
        nPedido:"",encargado:"",fecha:"",monto:""
    })
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
    console.log(valor)
    let array=[]
    console.log(array)
    const filtro = ()=>{
        console.log('adentro')
        const listaFiltrada = pedidosData.map((val)=>{
            let m = val.Encargado.toLowerCase();
            if(m.indexOf(valor.toLowerCase()) !== -1){
                console.log(val.Encargado + " - " + val.Fecha+" - " + val.monto)
                array.push(val.nPedido)
                // console.log(array)
            } else{
                console.log(valor)
                console.log('no')
            }

        })
    }
    console.log(filtrado)
    return (
        <div>
            <Form.Control
                size='sm'
                type="text"
                placeholder="Ingrese un monto"
                onChange={(e)=> setValor(e.target.value)}
                onKeyUp={filtro}

                />
        </div>
    );
};

export default FiltroMonto;