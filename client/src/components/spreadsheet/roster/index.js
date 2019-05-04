import React from 'react'
import ReactPlaceholder from 'react-placeholder'

import safeMap from 'util/safeMap'
import { Wrapper, Header, SideBar, Table, CellRow } from '../'

const Roster = props => {
  const { name, roster, teams } = props
  const row = (item, i) => <CellRow key={i} data={item} />

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: props.roster ? true : false,
    style: {width: '28em', height: '2em', margin: '0.5em 1em'},
    showLoadingAnimation: true
  }

  return (
    <Wrapper>
      <SideBar links={teams} location={'coach'} />
      <Table>
        <Header title={name ? `${name} Roster` : '...'}/>
        <ReactPlaceholder {...SKELETON}>
          {safeMap(roster, row)}
        </ReactPlaceholder>
      </Table>
    </Wrapper>
  )
}

export default Roster
