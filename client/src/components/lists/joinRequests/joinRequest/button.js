import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'

const StyledButton = styled(Button)`
  margin: 0 1em;
  padding: 0.5em;

  background: ${props => props.theme.primary.active};
  border: 1px solid ${props => props.theme.primary.active};
`

const JoinRequestButton = props => {
  const { request, onClick } = props
  const preventDefault = (e) => {
    e.preventDefault()
    onClick(request)
  }
  return (
    <StyledButton onClick={preventDefault}>
      {props.children}
    </StyledButton>
  )
}

export default JoinRequestButton
