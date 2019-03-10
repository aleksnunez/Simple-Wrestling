import React from 'react'
import styled from 'styled-components'

import Header from '../../components/header.js'
import Team from '../../components/team.js'
import Details from './details.js'

const Wrapper = styled.section`
  position: relative;
`

const About = () => {
  return (
    <Wrapper>
      <Header text={'The Team'} />
      <Team />

      <Route path={`${match.path}/:id`} component={Details} />
    </Wrapper>
  )
}

export default About
