import React from 'react'
import styled from 'styled-components'

import { Wrapper, Header, Sidebar, Table } from '../'
import Title from 'components/header'
import Player from './player'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Roster = props => {
  const players = props.players.map((player, i) => {
    return (
      <Player key={i} />
    )
  })

  return (
    <Wrapper>
      <Title text='Roster' />
      <Row>
        <Sidebar>
        </Sidebar>
        <Table>
          <Header />
          {players}
        </Table>
      </Row>
    </Wrapper>
  )
}

Roster.defaultProps = {
  players: [{},{},{},{},{},{},{},{},{},{}]
}

export default Roster
