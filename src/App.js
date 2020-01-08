
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import LoginMain from './components/UserPortal';
import Register from './components/Register'
import RegisterConnection from './components/Register_Connection';
import FamilyWelcome from './components/FamilyWelcome'

import './App.css';

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import CreateTrip from './components/CreateTrip/CreateTrip';
import AgentHome from './components/AgentLoggedIn/AgentHome';
import AgentTrips from './components/AgentLoggedIn/AgentTrips';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute path="/Agents" component={AgentHome} />
        <PrivateRoute path="/Agent-Trips" component={AgentTrips} />
        <PrivateRoute path="/Agent-Trips/:id" component={AgentTrips} />

        <PrivateRoute path="/Create-Trip" component={CreateTrip} />
        
        <Route path="/Login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </>
  )
}

export default App;
