import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from '../containers/navbar'
import Home from '../screens/home'
import About from '../screens/about'

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
)

export default Routes
