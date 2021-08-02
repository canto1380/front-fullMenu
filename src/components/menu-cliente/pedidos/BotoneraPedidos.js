import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom'

import VisibilityIcon from '@material-ui/icons/Visibility';
import PrintIcon from '@material-ui/icons/Print';

const BotoneraPedidos = (props) => {
  const {pedidos} = props

  const consultarPedido = async (id) =>{
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL+'/pedidos/'+id
      )
      if(res.status === 200){
        const resp = await res.json()
        window.print()
      }
    } catch (error) {
      console.log(error)
    }
  }
  

    return (
        <div>
          <Button 
            className='p-1 bg-light text-dark border-1 border-dark'
            >
            <VisibilityIcon/>
          </Button>
          <Button 
            as={Link}
            target='_blank'
            to={'/print'}
            className='p-1 ms-1 bg-light text-dark border-1 border-dark'
            >
            <PrintIcon/>
          </Button>  
        </div>
    );
};

export default withRouter(BotoneraPedidos);