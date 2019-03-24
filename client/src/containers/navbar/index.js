import React, { Component } from 'react'
import styled from 'styled-components'

import Link from './styledLink.js'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const StyledRow = styled(Row)`
  flex-wrap: wrap;

  height: 60px;
  width: 96vw;

  z-index: 100;
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledRow>
        <Row>
        </Row>
        <Row>
        </Row>
        <Row>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </Row>
      </StyledRow>
    )
  }
}
