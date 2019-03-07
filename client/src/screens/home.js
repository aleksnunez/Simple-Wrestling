import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header.js'

const Wrapper = styled.section`
  position: relative;
`

const Home = () => {
  return (
    <Wrapper>
      <Header text={'Home'} />
    </Wrapper>
  )
}

export default Home
