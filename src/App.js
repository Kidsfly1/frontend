
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import { KidsFlyContext } from './context/KidsFlyContext';

import LoginMain from './components/UserPortal';
import Register from './components/Register'
import RegisterConnection from './components/Register_Connection';

import RegisterAdmin from './components/Register-Admin-1';

//import RegisterAdmin from './components/Register-Admin';


import FamilyWelcome from './components/FamilyWelcome';
import FamilyTrips from './components/FamilyTrips';
import MyTrips from './components/MyTrips';

import './App.css';

import PrivateRoute from './components/PrivateRoute';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

import CreateTrip from './components/CreateTrip/CreateTrip';

import AgentHome from './components/AgentLoggedIn/AgentHome';
import AgentTrips from './components/AgentLoggedIn/AgentTrips';
import AgentTripDetails from './components/AgentLoggedIn/AgentTripDetails';
import UserInfoUpdate from './components/UserInfoUpdate'

import AdminHome from './components/AdminLoggedIn/AdminHome';
import AdminTripRequest from './components/AdminLoggedIn/AdminTripRequest';
import AdminAgentAssign from './components/AdminLoggedIn/AdminAssignAgent';

//
import TripDetails from './components/Common/TripDetails'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState((localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {});

  return (
    <>
      <KidsFlyContext.Provider value={{currentUser, setCurrentUser}}>
        <Header />

        <Switch>
          <PrivateRoute path="/Agents" component={AgentHome} />
          <PrivateRoute path="/Agent-Trips" component={AgentTrips} />
          <PrivateRoute path="/Agent-Trip-Details/:id" component={TripDetails} />

          <PrivateRoute path="/Admin" component={AdminHome} />
          <PrivateRoute path="/Admin-Trip-Requests" component={AdminTripRequest} />
          <PrivateRoute path="/Admin-Trip-Details/:id" component={TripDetails} />
          <PrivateRoute path="/Admin-Assign-Agent/:id" component={AdminAgentAssign} />

          <PrivateRoute path="/Create-Trip" component={CreateTrip} />
          <PrivateRoute path="/Welcome" component={FamilyWelcome} />
          <PrivateRoute path="/MyTrips" component={MyTrips}/>

          {/* Fix this with a single function ... later */}
          <Route path="/Logout" component={Logout} />

          <Route path="/Register" component={Register} />
          <Route path="/Register-Agent" component={RegisterConnection} />
          <Route path="/Register-Admin" component={RegisterAdmin} />
          <Route path="/Login" component={LoginForm} />
          <Route path="/sign-up" component={Register} />
          <Route path="/UpdateInfo" component={UserInfoUpdate} />
          <Route path="/Family-Trips" component={FamilyTrips} />
          <Route component={LoginForm} />
          
        </Switch>
      <Footer className='fixed-bottom'/>
      </KidsFlyContext.Provider>
    </>
  )
}

export default App;
