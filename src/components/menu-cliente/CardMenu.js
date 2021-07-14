import React from 'react';
import {Card, Button} from 'react-bootstrap'

const CardMenu = (props) => {
    return (
        <Card className="tarjetas text-dark my-3 border-4">
  <Card.Header as="h5">{props.categoria}</Card.Header>
  <Card.Body className="row">   
        <div className="col-6">
            Carne
        </div>
        <div className="col-6 d-flex">
            <Button size="sm">-</Button>
            <div className="box mx-4">0</div>
            <Button size="sm">+</Button>
        </div>
        <div className="col-6">Pollo</div>
        <div className="col-6 d-flex">
            <Button size="sm">-</Button>
            <div className="box mx-4">0</div>
            <Button size="sm">+</Button>
        </div>
        <div className="col-6">Queso</div>
        <div className="col-6 d-flex">
            <Button size="sm">-</Button>
            <div className="box mx-4">0</div>
            <Button size="sm">+</Button>
        </div>
        <div className="col-6">Sfijas</div>
        <div className="col-6 d-flex">
            <Button size="sm">-</Button>
            <div className="box mx-4">0</div>
            <Button size="sm">+</Button>
        </div>
  </Card.Body>
</Card>
    );
};

export default CardMenu;