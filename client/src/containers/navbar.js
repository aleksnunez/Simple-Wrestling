import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.nav`
  position: relative;
  height: 60px;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  text-align: center;
  z-index: 100;
`

class NavBar extends Component {
  render() {
    return (
      <Header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>
    )
  }
}

export default NavBar
