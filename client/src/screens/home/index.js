import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Carousel from 'components/carousel'

import Lorem from './lorem'
import Ipsum from './ipsum'

const Wrapper = styled.section`
  position: relative;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const CarouselWrapper = styled.div`
  postion: relative;

  margin: 1em 0;
  width: 100vw;
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
      <Row>
        <CarouselWrapper>
          <Carousel images={data.mainCarousel} />
        </CarouselWrapper>
      </Row>
      <Row>
        <Col>
          <Lorem />
        </Col>
        <Col>
          <Ipsum />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Home
