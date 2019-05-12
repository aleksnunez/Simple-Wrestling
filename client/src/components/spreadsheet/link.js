import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3em;
  width: calc(10vw - 1em);
  min-width: 5em;
  margin: 1em 0.5em;
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.background.base};
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary.base};

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    text-decoration-color: ${props => props.theme.background.base};
    text-shadow:
    -0.25px -0.25px 0 ${props => props.theme.background.base},
    0.25px 0.25px 0 ${props => props.theme.background.base};
  }
`

const SpreadSheetLink = props => {
  return (
    <Wrapper>
      <StyledLink to={props.to}>
        {props.children}
      </StyledLink>
    </Wrapper>
  )
}

export default SpreadSheetLink
