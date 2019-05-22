import React from 'react'
import styled from 'styled-components'

import ButtonTemplate from 'components/button'

const StyledButton = styled(ButtonTemplate)`
  background: ${props => props.theme.primary.active};
  border: 0.05em solid ${props => props.theme.primary.active};
  outline: none !important;

  height: 2em;
  width: 20vw;
  min-width: 12em;
  margin: 0.4em 0;

  &:hover, &:focus {
    color: ${props => props.theme.primary.base};
    border: 0.1em solid ${props => props.theme.primary.base};
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.primary.base};
      0.25px 0.25px 0 ${props => props.theme.primary.base};
  }
`

const Button = props => {
  const { onClick } = props
  return (
    <StyledButton onClick={onClick}>
      Save
    </StyledButton>
  )
}

export default Button
