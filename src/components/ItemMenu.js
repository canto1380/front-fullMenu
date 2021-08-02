import React from 'react';
import {Card, Button} from "react-bootstrap"
import ItemProdMenu from './ItemProdMenu';  

const ItemMenu = (props) => {
    const {productos, cantidadItem, setCantidadItem, pedido, setPedido}=props;
    let categoria = productos.filter((p)=>p.categoria===props.cat?.nombreCategoria);
    console.log(categoria)
    
    return (
        <Card className="tarjetas text-dark my-3 border-4">
        <Card.Header as="h5">{props.cat.nombreCategoria}</Card.Header>
        <Card.Body className="row">   
              <div>
              {
                 categoria.map((prod)=>(
                         <ItemProdMenu 
                          prod={prod}
                          key={prod.id}
                          pedido={pedido}
                          setPedido={setPedido}
                          />
                    )
                ) 

            }
            </div>
        </Card.Body>
      </Card>
    );
};

export default ItemMenu;