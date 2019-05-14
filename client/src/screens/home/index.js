import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Text from 'components/text'

const Wrapper = styled.section`
  position: relative;
`

const Home = props => {
  const [data, setData] = useState()

  useEffect(() => {
    request({endpoint: '/api/home/', method: 'GET'})
    .then(res => setData(res))
    .catch(err => new Error(err))
  }, [])

  // console.table(data)

  return (
    <Wrapper>
      <Header text={'Home'} />
      <Text>
        {JSON.stringify(data)}
      </Text>
    </Wrapper>
  )
}

export default Home
