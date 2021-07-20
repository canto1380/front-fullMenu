import React from 'react';
import { Button } from 'react-bootstrap';

import VisibilityIcon from '@material-ui/icons/Visibility';
import PrintIcon from '@material-ui/icons/Print';
const BotoneraPedidos = () => {
    return (
        <div>
          <Button className='p-1 bg-light text-dark border-1 border-dark'>
            <VisibilityIcon/>
          </Button>
          <Button className='p-1 ms-1 bg-light text-dark border-1 border-dark'>
            <PrintIcon/>
          </Button>  
        </div>
    );
};

export default BotoneraPedidos;