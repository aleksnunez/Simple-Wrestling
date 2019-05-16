import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Tournaments from 'components/spreadsheet/tournaments'

const Wrapper = styled.section`
  position: relative;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Home = props => {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Tournaments',
      method: 'GET'
    })
    .then(res => setTournaments([...res]))
    .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text={'Admin Dashboard'} />
      <Row>
        <Tournaments {...{tournaments}} />
      </Row>
    </Wrapper>
  )
}

export default Home
