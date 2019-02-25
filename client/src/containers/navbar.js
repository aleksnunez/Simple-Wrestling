import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled(Nav)`
  flex-wrap: wrap;

  height: 60px;
  width: 100%;

  z-index: 100;
`
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

class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
        </Nav>
        <Nav>
        </Nav>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Nav>
      </Wrapper>
    )
  }
}

export default NavBar
