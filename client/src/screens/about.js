import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header.js'
import Team from '../components/team.js'
import '../styles/about.css'

const Wrapper = styled.section`
  position: absolute;

  width: 100%;
  height: 600px;
  left: 0px;
  top: 200px;

  background: #77A6F7;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Header text={'The Team'} />
        <Team />
      </Wrapper>
    )
  }
}

export default About
