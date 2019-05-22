import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const JoinTournamentRequests = props => {
  const { team } = props
  return (
    <Wrapper>
      {JSON.stringify(team)}
    </Wrapper>
  )
}

export default JoinTournamentRequests
