import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import shouldShowHeaders from './shouldShowHeaders'
import Header from './header'
import KeyRow from './keyRow'
import InputRow from './inputRow'
import AddButton from './addButton'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 5em;
`

const Table = props => {
  const { data, title, onChange, removeRow } = props
  const [headers, setHeaders] = useState([])

  useEffect(() => setHeaders(shouldShowHeaders(data)), [props.data])

  const row = (tuple, i) => {
    return (
      <div key={i}>
        {headers[tuple[0]] && <KeyRow data={tuple[1]} />}
        <InputRow row={tuple[0]} data={tuple[1]} {...{onChange, removeRow}} />
      </div>
    )
  }

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
      <AddButton>ADD</AddButton>
    </Wrapper>
  )
}

export default Table
