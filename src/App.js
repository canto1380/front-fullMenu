import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPrincipal from './components/menu-admin/AdminPrincipal';
import ClientePrincipal from './components/menu-cliente/ClientePrincipal';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AdminPrincipal/>
        </Route>
        <Route exact path='/cliente'>
          <ClientePrincipal></ClientePrincipal>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
