import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './samovar/pages/Dashboard'
import Main from './samovar/pages/Main'



export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
        </Switch>
    </BrowserRouter>
  )
