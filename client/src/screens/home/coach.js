import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import Header from 'components/header'
import Roster from 'components/spreadsheet/roster'

const Wrapper = styled.section`
  position: relative;
`

const Home = props => {
  const [team, setTeam] = useState({})
  const { name, roster, history } = team

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Coach',
      method: 'GET'
    })
    .then(res => setTeam(res[0]))
    .catch(err => new Error(err))
  }, [])

  console.table(roster)
  console.table(history)

  return (
    <Wrapper>
      <Header text={'Coach Dashboard'} />
      <Roster {...{name, roster}} />
    </Wrapper>
  )
}

export default Home
