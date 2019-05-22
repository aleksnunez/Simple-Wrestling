import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import tournament from 'models/tournament'
import Header from 'components/header'
import Spreadsheet from 'components/spreadsheet'
import JoinRequests from 'components/lists/joinRequests'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
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

  const accept = request => {
    console.log(request)
  }

  const reject = request => {
    console.log(request)
  }

  const joinRequests = [
    {coach: 'jon', team: "shit", tournament: "poop"},
    {coach: 'ned', team: "shitty", tournament: "poopy"},
    {coach: 'rob', team: "shitter", tournament: "pooper"}
  ]

  return (
    <Wrapper>
      <Header text={'Admin Dashboard'} />
      <Row>
        <Spreadsheet name={'Tournaments'} location={'admin'}
          data={tournaments} links={['Northern California', 'Southern California']}
          defaultRow={tournament} />
      </Row>
      <JoinRequests data={joinRequests} {...{accept, reject}} />
    </Wrapper>
  )
}

export default Home
