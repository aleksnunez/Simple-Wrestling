import React from 'react'
import styled from 'styled-components'

import DeleteButton from './deleteButton'
import Cell from './cell'

const Row = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  box-shadow: -1px 0 ${props => props.theme.primary.active};
`

const CellRow = props => {
  const { row, data, onChange, removeRow } = props
  const cell = (tuple, i) =>
    <Cell key={i} {...{row, onChange}} col={tuple[0]} value={tuple[1]} />

  const values = Object.entries(data).map(cell)

  return (
    <Row>
      {values}
      <DeleteButton {...{removeRow, row}} />
    </Row>
  )
}

export default CellRow
