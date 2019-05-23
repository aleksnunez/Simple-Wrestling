import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Carousel from 'components/carousel'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;

  width: 75vw;
`

const Home = props => {
  const [data, setData] = useState({})

  useEffect(() => {
    request({endpoint: '/api/home/', method: 'GET'})
    .then(res => setData(res))
    .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text={'Home'} />
      <Row>
        <Carousel images={data.mainCarousel} />
      </Row>
    </Wrapper>
  )
}

export default Home
