import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { Wrapper, Header, SideBar, SideButton, Table } from '../'
import Title from 'components/header'
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
  const { roster } = props
  const rows = players =>
    players.map((player, i) => <Player key={i} stats={player} />)

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: props.roster ? true : false,
    style: {width: '20vw', height: '3em', margin: '0'},
    showLoadingAnimation: true
  }

  return (
    <Wrapper>
      <Title text='Roster' />
      <Row>
        <SideBar>
          <SideButton>
            Some Function
          </SideButton>
          <SideButton>
            Some Function
          </SideButton>
          <SideButton>
            Some Function
          </SideButton>
        </SideBar>
        <Table>
          <Header />
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
