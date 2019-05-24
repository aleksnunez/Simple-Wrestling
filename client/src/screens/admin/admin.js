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

const Home = ({ match }) => {
  const [region, setRegion] = useState([])
  const { name, tournaments } = region

  useEffect(() => {
    const regionID = match.params.id ? match.params.id : '0'
    request({
      endpoint: `/api/admin/${regionID}`,
      method: 'GET'
    })
    .then(res => setRegion(res))
    .catch(err => new Error(err))
  }, [match.params.id])

  const accept = request => {
    console.log(request)
  }

  const reject = request => {
    console.log(request)
  }

  const update = body => {
    request({
      endpoint: '/api/admin/update',
      body: JSON.stringify(body)
    })
      .then(res => alert(`${name} saved`))
      .catch(err => new Error(err))
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
        <Spreadsheet name={name} location={'admin'}
          data={tournaments} links={['Northern California', 'Southern California']}
          defaultRow={tournament} update={update} />
      </Row>
      <JoinRequests data={joinRequests} {...{accept, reject}} />
    </Wrapper>
  )
}

export default Home
