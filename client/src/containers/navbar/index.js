import React from 'react'
import styled from 'styled-components'

import Link from './link'
import Button from './button'
import Logo from './logo'

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`
const Nav = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  width: 96vw;
  z-index: 100;
`

const NavBar = props => {
  return (
    <Nav>
      <Row>
        <Link to='/'>
          <Logo />
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
    </Nav>
  )
}

export default NavBar
