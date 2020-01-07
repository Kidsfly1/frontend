import React from 'react';
// import { Route, Switch } from 'react-router-dom'
import LoginMain from './components/UserPortal';
import Register from './components/Register'
import RegisterConnection from './components/Register_Connection';
import FamilyWelcome from './components/FamilyWelcome'

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Route path='/Register_Connection'
      render={props => <RegisterConnection/>}
      />
      
      <Route path='/Register'
      render={props => <Register/>}
      />

      <Route path='/Welcome-Fam'
      render={props => <FamilyWelcome/>}
      />

      <Route exact path='/UserPortal'
      render={props => <LoginMain/>}
      />
      
    </div>
  )
}

export default App;
