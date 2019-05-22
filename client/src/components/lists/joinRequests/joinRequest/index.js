import React from 'react'
import styled from 'styled-components'

import Label from './label'
import Button from './button'

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Wrapper = styled(Buttons)`
  margin: 1em;
`

const JoinTournamentRequests = props => {
  const { request, accept, reject } = props
  return (
    <Wrapper>
      <Label {...{request}} />
      <Buttons>
        <Button onClick={accept} {...{request}}>
          Accept
        </Button>
        <Button onClick={reject} {...{request}}>
          Reject
        </Button>
      </Buttons>
    </Wrapper>
  )
}

export default JoinTournamentRequests
