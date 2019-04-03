import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const testEndpoint = () => {
  fetch('/api/coachTeamRegisteration/hello', {method: 'POST'})
  .then(res => res.json())
  .then(res => alert(JSON.stringify(res)))
  .catch(err => new Error(err))
}

const Home = () => {
  testEndpoint()
  return (
    <Wrapper>
      <Header text={'Home'} />
    </Wrapper>
  )
}

export default Home
