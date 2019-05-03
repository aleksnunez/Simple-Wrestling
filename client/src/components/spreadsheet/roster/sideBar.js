import React from 'react'

import { SideBar, Link } from '../'

const RosterSideBar = props => {
  const { teams } = props
  const link = (name, i) => (
      <Link key={i} to={`/coach/${i}`}>
        {name}
      </Link>
    )

  return (
    <SideBar>
      {teams && teams.map(link)}
    </SideBar>
  )
}

export default RosterSideBar
