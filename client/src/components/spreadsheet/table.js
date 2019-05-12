import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import Header from './header'
import CellRow from './cellRow'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 5em;
`

const Table = props => {
  const { data, title, onChange } = props

  const row = (tuple, i) =>
    <CellRow key={i}
      name={tuple[0]} data={tuple[1]}
      onChange={onChange} />

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: data ? true : false,
    style: {width: '28em', height: '2em', margin: '0.5em 1em'},
    showLoadingAnimation: true
  }

  return (
    <Wrapper>
      <Header title={title} />
      <ReactPlaceholder {...SKELETON}>
        {safeMap(Object.entries(data), row)}
      </ReactPlaceholder>
    </Wrapper>
  )
}

export default Table
