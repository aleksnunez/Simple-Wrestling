import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import safeMap from 'util/safeMap'
import Tournament from './tournament'

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  margin: 2em 0;
`

const Tournaments = props => {
  const [tournaments, setTournaments] = useState([{}, {}, {}])
  const card = (tournament, i) => <Tournament key={i} {...tournament} />

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Tournaments',
      method: 'GET'
    })
    .then(res => setTournaments([...res]))
    .catch(err => new Error(err))
  }, [])

  return <Row>{safeMap(tournaments, card)}</Row>
}

export default Tournaments
