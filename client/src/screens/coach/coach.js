import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Roster from 'components/spreadsheet/roster'

const Wrapper = styled.section`
  position: relative;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Home = ({ match }) => {
  const [team, setTeam] = useState({})
  const [teams, setTeams] = useState([])
  const { name, roster } = team

  useEffect(() => {
    const rosterID = match.params.id ? match.params.id : '0'
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Coach',
      method: 'GET'
    })
      .then(res => setTeam(res[0]))
      .catch(err => new Error(err))
  }, [match.params.id])

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Teams',
      method: 'GET'
    })
      .then(res => setTeams(res))
      .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text={'Coach Dashboard'} />
      <Row>
        <Roster {...{name, roster, teams}} />
      </Row>
    </Wrapper>
  )
}

export default Home
