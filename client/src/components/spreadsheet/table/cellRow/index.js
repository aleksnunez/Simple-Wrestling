import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'
import Key from './key'
import Value from './value'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  box-shadow: -1px 0 ${props => props.theme.primary.active};
`

const CellRow = props => {
  const { row, data, onChange } = props

  const keys = Object.keys(props.data).map((key, i) => (
      <Key key={i} col={key} />
  ))

  const values = Object.entries(data).map((tuple, i) => (
      <Value key={i} {...{row, onChange}}
        col={tuple[0]} value={tuple[1]} />
  ))

  if (row && data && onChange) {
    return <Row>{values}<Button>DELETE</Button></Row>
  }
  return <Row>{keys}</Row>
}

export default CellRow
