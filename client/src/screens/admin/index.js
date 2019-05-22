import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Spreadsheet from 'components/spreadsheet'
import JoinRequests from 'components/lists/joinRequests'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
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

  const joinRequests = [
    {coach: 'jon'},
    {coach: 'ned'},
    {coach: 'rob'}
  ]

  return (
    <Wrapper>
      <Header text={'Admin Dashboard'} />
      <Row>
        <Spreadsheet name={'Tournaments'} location={'coach'}
          data={tournaments} links={['Northern California', 'Southern California']} />
      </Row>
      <JoinRequests data={joinRequests} />
    </Wrapper>
  )
}

export default Home
