import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled, { withTheme} from 'styled-components'

import safeMap from 'util/safeMap'
import shouldShowHeaders from './shouldShowHeaders'
import Header from './header'
import KeyRow from './keyRow'
import InputRow from './inputRow'
import AddRow from './addRow'
import Save from './save'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 5em;
`
const Buttons = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: space-evenly;
  width: 100%;
`

const Table = props => {
  const { data, title, onChange, removeRow, addRow, save } = props
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
      <Buttons>
        <AddRow onClick={addRow} />
        <Save onClick={save} />
      </Buttons>
    </Wrapper>
  )
}

export default withTheme(Table)
