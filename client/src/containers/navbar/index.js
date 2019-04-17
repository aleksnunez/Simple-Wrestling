import React from 'react'
import styled from 'styled-components'

import Link from './navLink'
import Button from './button'
import logo from 'assets/logo.png'

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`
const StyledRow = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  width: 96vw;
  z-index: 100;
`
const StyledLogo = styled.img`
  background-image: ${`url(${logo})`};
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const NavBar = props => {
  return (
    <StyledRow>
      <Row>
        <Link to='/'>
          <StyledLogo src={logo} />
        </Link>
      </Row>
      <Row>
        <Link to='/tournaments'>Tournaments</Link>
        <Link to='/about'>About</Link>
      </Row>
      <Row>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign up</Link>
      </Row>
      <Row>
        <Button onClick={props.changeTheme}>Darkmode</Button>
      </Row>
    </StyledRow>
  )
}

export default NavBar
