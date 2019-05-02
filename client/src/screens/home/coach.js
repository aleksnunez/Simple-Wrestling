import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Roster from 'components/spreadsheet/roster'

const Wrapper = styled.section`
  position: relative;
`

const Home = props => {
  return (
    <Wrapper>
      <Header text={'Coach Dashboard'} />
      <Roster />
    </Wrapper>
  )
}

export default Home
