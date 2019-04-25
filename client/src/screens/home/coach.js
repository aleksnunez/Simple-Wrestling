import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Text from 'components/text'

const Wrapper = styled.section`
  position: relative;
`

const Home = props => {
  return (
    <Wrapper>
      <Header text={'Home'} />
    </Wrapper>
  )
}

export default Home
