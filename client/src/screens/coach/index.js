import React from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import Coach from './coach'

const HomeRouter = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/:id?`}
        component={Coach} />
    </Switch>
  )
}

export default withRouter(HomeRouter)
