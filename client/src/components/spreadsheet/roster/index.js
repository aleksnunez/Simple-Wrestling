import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { Wrapper, Header, Table } from '../'
import SideBar from './sideBar'
import Player from './player'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
const Cells = styled.div`
  margin: 0 0 0 1vw;
`

const Roster = props => {
  const { name, roster } = props
  const rows = players =>
    players.map((player, i) => <Player key={i} stats={player} />)

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: props.roster ? true : false,
    style: {width: '20vw', height: '2em', margin: '0.5em 1em'},
    showLoadingAnimation: true
  }

  return (
    <Wrapper>
      <Row>
        <SideBar />
        <Table>
          <Header title={`${name ? name : 'Untitled'} Roster`}/>
          <Cells>
            <ReactPlaceholder {...SKELETON}>
              {roster ? rows(roster) : <div />}
            </ReactPlaceholder>
          </Cells>
        </Table>
      </Row>
    </Wrapper>
  )
}

export default Roster
