import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import CreateTrip from './components/CreateTrip/CreateTrip';
import AgentHome from './components/AgentLoggedIn/AgentHome';
import AgentTrips from './components/AgentLoggedIn/AgentTrips';

function App() {

  return (
    <>
      
        <Switch>
          <PrivateRoute path="/Agents" component={AgentHome} />
          <PrivateRoute path="/Create-Trip" component={CreateTrip} />
          <PrivateRoute path="/Agent-Trips" component={AgentTrips} />
          
          <Route path="/Login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
    </>
  )
}

export default App;
