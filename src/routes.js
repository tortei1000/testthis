import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
import NewUser from './components/NewUser';
import TopicDetail from './components/TopicDetail'
import Topics from './components/Topics'


export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={() => (
      <Login>
        <Register />
      </Login>
    )} />
    <Route path='/register' component={NewUser} />
    <Route path='/Topics/:topicsId' component={TopicDetail} />
    <Route path='/Topics' component={Topics} />

  </Switch>
)