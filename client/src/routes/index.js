import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PrivateRoute from './privateRoute'
import NavBar from 'containers/navbar'
import Spinner from 'components/spinner'
import NotFound from 'screens/notFound'

const Home        = lazy(() => import('screens/home'))
const Coach       = lazy(() => import('screens/coach'))
const Admin       = lazy(() => import('screens/admin'))
const Login       = lazy(() => import('screens/login'))
const SignUp      = lazy(() => import('screens/signup'))
const About       = lazy(() => import('screens/about'))
const Tournaments = lazy(() => import('screens/tournaments'))

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
          <PrivateRoute path='/coach' component={() => (
            <Suspense fallback={<Spinner />}>
              <Coach />
            </Suspense>
          )}/>
          <PrivateRoute path='/admin' component={() => (
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          )} />
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
