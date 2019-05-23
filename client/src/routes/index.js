import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavBar from 'containers/navbar'
import NotFound from './notFound'
import Spinner from 'components/spinner'

const Home        = lazy(() => import('./home'))
const Coach       = lazy(() => import('./coach'))
const Admin       = lazy(() => import('./admin'))
const Login       = lazy(() => import('./login'))
const SignUp      = lazy(() => import('./signup'))
const About       = lazy(() => import('./about'))
const Tournaments = lazy(() => import('./tournaments'))

const Routes = props => {
  return (
    <Router>
      <div>
        <NavBar {...props} />
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          </Route>
          <Route path='/coach'>
            <Suspense fallback={<Spinner />}>
              <Coach />
            </Suspense>
          </Route>
          <Route path='/admin'>
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          </Route>
          <Route exact path='/login'>
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          </Route>
          <Route exact path='/signup'>
            <Suspense fallback={<Spinner />}>
              <SignUp />
            </Suspense>
          </Route>
          <Route exact path='/about'>
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </Route>
          <Route path='/tournaments'>
            <Suspense fallback={<Spinner />}>
              <Tournaments />
            </Suspense>
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
