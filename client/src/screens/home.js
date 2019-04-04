import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const getHomePage = () => {
  fetch('/api/home/')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => new Error(err))
}

const Home = () => {
  getHomePage()
  return (
    <Wrapper>
      <Header text={'Home'} />
    </Wrapper>
  )
}

export default Home
