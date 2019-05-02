import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavBar from 'containers/navbar'
import screens from 'screens'

const Routes = props => {
  return (
    <Router>
      <div>
        <NavBar {...props} />
        <Switch>
          <Route exact path='/' component={screens.Home} />
          <Route path='/coach' component={screens.HomeCoach} />
          <Route path='/login' component={screens.Login} />
          <Route path='/signup' component={screens.SignUp} />
          <Route path='/about' component={screens.About} />
          <Route path='/tournaments' component={screens.Tournaments} />
          <Route path='*' component={screens.NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
