import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ItemMenu from './ItemMenu';

const Menu = (props) => {
    const {categorias, cantidadItem, setCantidadItem, pedido, setPedido}=props;
    return (
        <Container>
            <Row className="d-flex justify-content-between align-items-center mx-0">
                    <Col className='text-start'>
                        <h4>MENU</h4>
                    </Col>
                </Row>
            <hr />
            <div>  
             {categorias.map((cat)=>(
                 <ItemMenu 
                 cat={cat} 
                 key={cat.id} 
                 setConsultarCat={props.setConsultarCat} 
                 productos={props.productos}
                //  cantidadItem={cantidadItem}
                //  setCantidadItem={setCantidadItem}
                 pedido={pedido}
                 setPedido={setPedido}/>
                 ))}
            </div>
        </Container>
    );
};

export default Menu;