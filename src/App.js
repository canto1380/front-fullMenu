import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPrincipal from './components/menu-admin/AdminPrincipal';
import ClientePrincipal from './components/menu-cliente/ClientePrincipal';
import SidebarCliente from './components/SideBarCliente'
import AdminMenuCategoria from './components/menu-admin/AdminMenuCategoria';

function App() {

  //Categorias
  const [categorias, setCategorias] = useState([]);
  const [consultarCat, setConsultarCat]= useState(true);

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

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AdminPrincipal/>
        </Route>
        <Route exact path='/cliente'>
          <ClientePrincipal></ClientePrincipal>
        </Route>
        <Route exact path='/adminMenu/categorias'>
          <SidebarCliente/>
          <AdminMenuCategoria consultarCat={consultarCat} setConsultarCat={setConsultarCat} categorias={categorias}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
