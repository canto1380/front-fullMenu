import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPrincipal from './components/menu-admin/AdminPrincipal';
import ClientePrincipal from './components/menu-cliente/ClientePrincipal';
import AdminMenuCategoria from './components/menu-cliente/cliente-adm/AdminMenuCategoria';
import IndexClienteAdm from './components/menu-cliente/cliente-adm/IndexClienteAdm';
import ProductosClienteAdm from './components/menu-cliente/cliente-adm/ProductosClienteAdm';
import AgregarProducto from './components/menu-cliente/cliente-adm/AgregarProducto';
import EditarProducto from './components/menu-cliente/cliente-adm/EditarProducto';
import UsuariosAdmin from './components/menu-cliente/cliente-adm/UsuariosAdmin';
import EditarUsuarioEncargado from './components/menu-cliente/cliente-adm/EditarUsuarioEncargado';
import AgregarUsuarioEncargado from './components/menu-cliente/cliente-adm/AgregarUsuarioEncargado'
import PedidosHistorial from './components/menu-cliente/cliente-adm/PedidosHistorial';


function App() {
  /***** PROPS *****/
  //usuarios
  const [usuarios, setUsuarios] = useState([])
  const [consultartUsuarios, setConsultarUsuarios] = useState(true)
  //Categorias
  const [categorias, setCategorias] = useState([]);
  const [consultarCat, setConsultarCat]= useState(true);
  //Productos
  const [productos, setProductos] = useState([]);
  const [consultarProductos, setConsultarProductos]= useState(true);
  //Sidebar
  const[inactivo, setInactivo] = useState(false)

  /***** Consultas API *****/
  //Categorias
  const consultarAPICat = async() =>{
    try{
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/categorias"
      );
      const infoCategorias = await res.json();
      if(res.status===200){
        setCategorias(infoCategorias);
        setConsultarCat(false);
      }
    }
    catch(error){
        console.log(error)
      }
    };
  useEffect(()=>{
    if(consultarCat){
      consultarAPICat();
    } 
  },[consultarCat]);

  //Productos
  const consultarAPIProductos = async()=>{
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/productos"
      );
      const infoProductos = await res.json();
      if(res.status === 200){
        setProductos(infoProductos)
        setConsultarProductos(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(consultarProductos){
      consultarAPIProductos();
    }
  },[consultarProductos]);

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
            productos={productos}
            consultarProductos={consultarProductos}
            setConsultarProductos={setConsultarProductos}
          />
        </Route>
        <Route exact path='/admin-cliente/productos/nuevoProducto'>
          <AgregarProducto
            inactivo={inactivo}
            setInactivo={setInactivo}
            setConsultarProductos={setConsultarProductos}

          />
        </Route>
        <Route exact path='/admin-cliente/productos/editarProducto'>
          <EditarProducto
            inactivo={inactivo}
            setInactivo={setInactivo}
          />
        </Route>
        <Route exact path='/admin-cliente/usuarios'>
          <UsuariosAdmin
          inactivo={inactivo}
          setInactivo={setInactivo}
          usuarios={usuarios}
          consultarUsuarios={consultarUsuarios}
          setConsultarUsuarios={setConsultarUsuarios}
          />
        </Route>
        <Route exact path='/admin-cliente/usuarios/editarEncargado/:id'>
          <EditarUsuarioEncargado
            inactivo={inactivo}
            setInactivo={setInactivo}
            setConsultarUsuarios={setConsultarUsuarios}
          />
        </Route>
        <Route exact path='/admin-cliente/usuarios/nuevoEncargado'>
          <AgregarUsuarioEncargado
            inactivo={inactivo}
            setInactivo={setInactivo}
            setConsultarUsuarios={setConsultarUsuarios}
          />
        </Route>
        <Route exact path='/admin-cliente/pedidos'>
          <PedidosHistorial
            inactivo={inactivo}
            setInactivo={setInactivo}
          />
        </Route>

        {/* <Route exact path='/sidebar'> */}
        <Route exact path='/admin-cliente/categorias'>
          <AdminMenuCategoria consultarCat={consultarCat} setConsultarCat={setConsultarCat} categorias={categorias}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
