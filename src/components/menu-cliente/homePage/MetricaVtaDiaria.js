import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../../css/clienteAdm.css";
import {Pie} from 'react-chartjs-2'

const MetricaVtaDiaria = (props) => {
    const { pedidos } = props;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fechaActual = "";
    if (month < 10 && day < 10) {
        fechaActual = `0${day}-0${month}-${year}`;
    } else if (month < 10 && day >= 10) {
        fechaActual = `${day}-0${month}-${year}`;
    } else if (month >= 10 && day < 10) {
        fechaActual = `0${day}-${month}-${year}`;
    } else {
        fechaActual = `${day}-${month}-${year}`;
    }
    let totalMonto = 0;
    let totalEfectivo = 0;
    let totalTarjeta = 0;

    let pedidosFiltrados = pedidos.filter((p) => p.fecha === fechaActual);
    let totalPedidos = pedidosFiltrados.length;

    let pedidosEfectivo = pedidosFiltrados.filter(
        (p) => p.formaPago === "efectivo"
    );
    let totalPedidosEfectivo = pedidosEfectivo.length;

    let pedidosTarjeta = pedidosFiltrados.filter(
        (p) => p.formaPago === "tarjeta"
    );
    let totalPedidosTarjeta = pedidosTarjeta.length;

    pedidos.forEach((e) => {
        if (e.fecha === fechaActual) {
            totalMonto += e.total;
            if (e.formaPago === "efectivo") {
                totalEfectivo += e.total;
            } else {
                totalTarjeta += e.total;
            }
        }
    });
    return (
        <div className="border border-2 rounded">
            <h5 className="pt-2 text-center mb-0">Venta total del dia</h5>
            <Row className="d-flex justify-content-between mx-0 my-2">
                <Col className="border-2 border-end">
                    <p className="text-center my-2">
                        <b>Pedidos</b>
                    </p>
                    <div className="text-center">
                        <div className="">
                            <h1 className=" mb-0">{totalPedidos}</h1>
                        </div>
                        <div className="d-flex justify-content-around mt-1 text-start">
                            <div className="d-flex justify-content-start align-items-center">
                                <p className="p-0 mb-0 me-2 puntoAzul"></p>
                                <p className="mb-0">{totalPedidosTarjeta}</p>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <p className="p-0 mb-0 me-2 puntoVerde"></p>
                                <p className="mb-0">{totalPedidosEfectivo}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="">
                    <p className="text-center my-2">
                        <b>Monto</b>
                    </p>
                    <div className="text-center">
                        <div>
                            <h1 className="text-center mb-0"> ${totalMonto}</h1>
                        </div>
                        <div className="d-flex justify-content-around mt-1 text-start">
                            <div className="d-flex justify-content-start align-items-center">
                                <p className="p-0 mb-0 me-2 puntoAzul"></p>
                                <p className="mb-0 text-break">${totalTarjeta}</p>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <p className="p-0 mb-0 me-2 puntoVerde"></p>
                                <p className="mb-0 text-break">${totalEfectivo}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="d-flex justify-content-start py-1 text-start mx-0 px-2 border-top">
                <div className="d-flex justify-content-start align-items-center me-4">
                    <p className="p-0 mb-0 me-2 puntoAzul"></p>
                    <p className="mb-0">Tarjeta</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                    <p className="p-0 mb-0 me-2 puntoVerde"></p>
                    <p className="mb-0">Efectivo</p>
                </div>
            </div>
            <div style={{width:'100%', height:'500px', border:'5px solid blue'}}>
                <Pie data={pedidosFiltrados} options={pedidosTarjeta}/>
            </div>
        </div>
    );
};

export default MetricaVtaDiaria;
