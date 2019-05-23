import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Team from 'components/team'

const Wrapper = styled.section`
  position: relative;
`

const Details = props => {
  return (
    <Wrapper>
      <Header text={'The Team'} />
      <Team />
    </Wrapper>
  )
}

export default Details
