import React from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import Admin from './admin'

const AdminRouter = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/:id?`}
        component={Admin} />
    </Switch>
  )
}

export default withRouter(AdminRouter)
