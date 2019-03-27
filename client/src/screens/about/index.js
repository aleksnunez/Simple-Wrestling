import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Header from 'components/header'
import Team from './team'
import Details from './details'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const About = (match) => {
  return (
    <Col>
      <Header text={'The Team'} />
      <Team />

      <Route path={`${match.path}/:id`} component={Details} />
    </Col>
  )
}

export default About
