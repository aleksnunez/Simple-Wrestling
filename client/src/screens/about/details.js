import React from 'react'
import styled from 'styled-components'

import Header from '../../components/header.js'
import Team from '../../components/team.js'

const Wrapper = styled.section`
  position: relative;
`

const Details = () => {
  return (
    <Wrapper>
      <Header text={'The Team'} />
      <Team />
    </Wrapper>
  )
}

export default Details
