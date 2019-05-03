import React from 'react'
import styled from 'styled-components'

import Tournament from './tournament'

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  margin: 2em 0;
`

const Tournaments = props => {
  const { tournaments } = props
  const card = (tournament, i) => <Tournament key={i} {...tournament} />

  return <Row>{tournaments.map(card)}</Row>
}

export default Tournaments
