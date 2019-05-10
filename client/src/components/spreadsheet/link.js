import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3em;
  width: calc(10vw - 1em);
  min-width: 5em;
  margin: 1em 0.5em;

  color: ${props => props.theme.background.base};
  text-align: center;
  text-decoration: none;

  border: 0.05em solid ${props => props.theme.primary.base};
  border-radius: 0.2em;

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    border: 0.05em solid ${props => props.theme.background.base};
    text-shadow:
    -0.25px -0.25px 0 ${props => props.theme.background.base},
    0.25px 0.25px 0 ${props => props.theme.background.base};
  }
`

const SpreadSheetLink = props => {
  return (
    <StyledLink to={props.to}>
      {props.children}
    </StyledLink>
  )
}

export default SpreadSheetLink
