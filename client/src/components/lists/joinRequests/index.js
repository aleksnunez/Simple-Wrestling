import React from 'react'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import JoinRequest from './joinRequest'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2em;
`

const JoinTournamentRequests = props => {
  const { data, accept, reject } = props
  const joinRequest = (request, i) =>
    <JoinRequest key={i} {...{request, accept, reject}} />

  return (
    <Wrapper>
      Tournament Join Requests
      {safeMap(data, joinRequest)}
    </Wrapper>
  )
}

export default JoinTournamentRequests
