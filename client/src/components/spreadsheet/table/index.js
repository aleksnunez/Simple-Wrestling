import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Button from 'components/button'
import safeMap from 'util/safeMap'
import shouldShowHeaders from './reducers'
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
  const [headers, setHeaders] = useState([])

  useEffect(() => setHeaders(shouldShowHeaders(data)), [props.data])

  const header = (tuple, i) =>
    headers[i] ? <CellRow data={tuple[1]} /> : <div />

  const row = (tuple, i) => (
    <div key={i}>
      {header(tuple, i)}
      <CellRow row={tuple[0]} data={tuple[1]} onChange={onChange} />
    </div>
  )

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
      <Button>ADD</Button>
    </Wrapper>
  )
}

export default Table
