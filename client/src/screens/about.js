import React from 'react'
import styled from 'styled-components'

import Header from '../components/header.js'
import Team from '../components/team.js'
import '../styles/about.css'

const Wrapper = styled.section`
  position: relative;
`

const About = () => {
  return (
    <Wrapper>
      <Header text={'The Team'} />
      <Team />
    </Wrapper>
  )
}

export default About
