
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import { KidsFlyContext } from './context/KidsFlyContext';

import LoginMain from './components/UserPortal';
import Register from './components/Register'
import RegisterConnection from './components/Register_Connection';
import RegisterAdmin from './components/Register-Admin';

import FamilyWelcome from './components/FamilyWelcome';
import FamilyTrips from './components/FamilyTrips';

import './App.css';

import PrivateRoute from './components/PrivateRoute';

import Header from './components/Header';
import LoginForm from './components/LoginForm';

import CreateTrip from './components/CreateTrip/CreateTrip';

import AgentHome from './components/AgentLoggedIn/AgentHome';
import AgentTrips from './components/AgentLoggedIn/AgentTrips';
import AgentTripDetails from './components/AgentLoggedIn/AgentTripDetails';
import UserInfoUpdate from './components/UserInfoUpdate'

import AdminHome from './components/AdminLoggedIn/AdminHome'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState((localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {});

  const logMeOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log(props)
    //props.history.push('/Login');
  }

  return (
    <>
      <KidsFlyContext.Provider value={{currentUser, setCurrentUser}}>
        <Header logout={logMeOut} />

        <Switch>
          <PrivateRoute path="/Agents" component={AgentHome} />
          <PrivateRoute path="/Agent-Trips" component={AgentTrips} />
          <PrivateRoute path="/Agent-Trip-Details/:id" component={AgentTripDetails} />

          <PrivateRoute path="/Admin" component={AdminHome} />

          <PrivateRoute path="/Create-Trip" component={CreateTrip} />
          <PrivateRoute path="/Welcome" component={FamilyWelcome} />

          <Route path="/Register" component={Register} />
          <Route path="/Register-Agent" component={RegisterConnection} />
          <Route path="/Register-Admin" component={RegisterAdmin} />
          <Route path="/Login" component={LoginForm} />
          <Route path="/sign-up" component={Register} />
          <Route path="/UpdateInfo" component={UserInfoUpdate} />
          <Route path="/Family-Trips" component={FamilyTrips} />
          <Route component={LoginForm} />
          
        </Switch>
      
      </KidsFlyContext.Provider>
    </>
  )
}

export default App;
