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
  const cards = props.tournaments.map((tournament, i) => {
    return <Tournament key={i} {...tournament} />
  })

  return <Row>{cards}</Row>
}

Tournaments.defaultProps = { tournaments: [] }


export default Tournaments
