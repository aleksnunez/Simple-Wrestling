import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 0 1em;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 1.25em;
  text-align: center;
  text-decoration: none;

  &:link, &:visited {
    color: #333333;
  }

  &:hover, &:active {
    color: #828282;
  }
`

const StyledLinkComponent = (props) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>
}

export default StyledLinkComponent
