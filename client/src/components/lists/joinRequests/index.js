import React from 'react'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import JoinRequest from './joinRequest'

const Wrapper = styled.div`

`

const JoinTournamentRequests = props => {
  const { data } = props
  const joinRequest = (team, i) =>
    <JoinRequest team={team} key={i} />
  return (
    <Wrapper>
      {safeMap(data, joinRequest)}
    </Wrapper>
  )
}

export default JoinTournamentRequests
