import React from 'react'
import ReactPlaceholder from 'react-placeholder'

import safeMap from 'util/safeMap'
import { Wrapper, Header, SideBar, Table, CellRow } from '../'

const Tournaments = props => {
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
        <ReactPlaceholder {...SKELETON}>
          {safeMap(tournaments, row)}
        </ReactPlaceholder>
      </Table>
    </Wrapper>
  )
}

export default Tournaments
