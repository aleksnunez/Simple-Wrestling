import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Header from 'components/header'
import Team from './team'
import Details from './details'

const Wrapper = styled.section`
  position: relative;
`

const About = (match) => {
  return (
    <Wrapper>
      <Header text={'The Team'} />
      <Team />

      <Route path={`${match.path}/:id`} component={Details} />
    </Wrapper>
  )
}

export default About
