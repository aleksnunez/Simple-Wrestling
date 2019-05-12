import React from 'react'
import styled from 'styled-components'

import uppercaseFirst from 'util/uppercaseFirst'
import Cell from './cell'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const CellRow = props => {
  const { name, data, onChange } = props

  const cells = Object.entries(data).map((tuple, i) => (
      <Cell key={i} {...{name, onChange}}
        stat={uppercaseFirst(tuple[0])} value={tuple[1]} />
  ))

  return (
    <Row>
      {cells}
    </Row>
  )
}

export default CellRow
