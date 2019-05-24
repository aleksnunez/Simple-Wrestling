import React from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import Tournament from './tournament'
import Search from './search'

const Tournaments = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/:tournament`}
        component={Tournament} />
      <Route exact path={`${match.path}`}
        component={Search} />
    </Switch>
  )
}

export default withRouter(Tournaments)
