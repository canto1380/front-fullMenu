import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPrincipal from './components/menu-admin/AdminPrincipal';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AdminPrincipal/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
