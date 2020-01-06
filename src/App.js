import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import PrivateRoute from './components/PrivateRoute';

import LoginForm from './components/LoginForm';



function App() {
  return (
    <>
      <Switch>
        {/* <PrivateRoute path="/" component={} /> */}
        <Route component={LoginForm} />
      </Switch>
    </>
  )
}

export default App;
