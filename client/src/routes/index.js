import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from 'containers/navbar'
import screens from 'screens'

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={screens.Home} />
      <Route path='/login' component={screens.Login} />
      <Route path='/signup' component={screens.SignUp} />
      <Route path='/about' component={screens.About} />
    </div>
  </Router>
)

export default Routes
