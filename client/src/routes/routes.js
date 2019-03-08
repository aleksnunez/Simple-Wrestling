import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from '../containers/navbar/navbar.js'
import Home from '../screens/home.js'
import About from '../screens/about/about.js'

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
