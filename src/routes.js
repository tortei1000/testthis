import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
import NewUser from './components/NewUser';


export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={() => (
      <Login>
        <Register />
      </Login>
    )} />
    <Route path='/register' component={NewUser} />
    <Route path='/home' component={Home} />
   

  </Switch>
)