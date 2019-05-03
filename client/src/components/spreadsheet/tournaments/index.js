import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import { Wrapper, Header, SideBar, Table, CellRow } from '../'

const Cells = styled.div`
  position: relative;
  margin: 0 0 0 1vw;
`

const Roster = props => {
  const { tournaments } = props
  const row = (item, i) =><CellRow key={i} data={item} />

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: props.tournaments ? true : false,
    style: {width: '28em', height: '2em', margin: '0.5em 1em'},
    showLoadingAnimation: true
  }

  return (
    <Wrapper>
      <SideBar
        links={["Northern California", "Southern California"]}
        location={'admin'} />
      <Table>
        <Header title={'Tournaments'}/>
        <Cells>
          <ReactPlaceholder {...SKELETON}>
            {safeMap(tournaments, row)}
          </ReactPlaceholder>
        </Cells>
      </Table>
    </Wrapper>
  )
}

export default Roster
