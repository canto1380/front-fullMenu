import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPrincipal from './components/menu-admin/AdminPrincipal';
import ClientePrincipal from './components/menu-cliente/ClientePrincipal';
import SidebarCliente from './components/SideBarCliente'
import IndexClienteAdm from './components/menu-cliente/cliente-adm/IndexClienteAdm';
import ProductosClienteAdm from './components/menu-cliente/cliente-adm/ProductosClienteAdm';
import AgregarProducto from './components/menu-cliente/cliente-adm/AgregarProducto';
function App() {
  const [usuarios, setUsuarios] = useState([])
  const [consultartUsuarios, setConsultarUsuarios] = useState(true)

  const[inactivo, setInactivo] = useState(false)

  console.log(usuarios)

  return (
    <Router>
      <Switch>
        {/* Rutas Adm general */}
        <Route exact path='/'>
          <AdminPrincipal/>
        </Route>
        {/* Rutas Adm cliente */}
        <Route exact path='/cliente'>
          <ClientePrincipal></ClientePrincipal>
        </Route>
        <Route exact path='/admin-cliente'>
          <IndexClienteAdm 
            inactivo={inactivo}
            setInactivo={setInactivo}
            />
        </Route>
        <Route exact path='/admin-cliente/productos'>
          <ProductosClienteAdm
            inactivo={inactivo}
            setInactivo={setInactivo}
          />
        </Route>
        <Route exact path='/admin-cliente/productos/nuevoProducto'>
          <AgregarProducto
            inactivo={inactivo}
            setInactivo={setInactivo}
          />
        </Route>

        <Route exact path='/sidebar'>
          <SidebarCliente/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
