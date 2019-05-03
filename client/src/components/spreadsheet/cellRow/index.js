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
const Key = styled.div`
`
const Value = styled.div`
`

const CellRow = props => {
  const { data } = props

  const cells = Object.entries(data).map((tuple, i) => (
      <Cell key={i}>
        <Key>{uppercaseFirst(tuple[0])}</Key>
        <Value>{tuple[1]}</Value>
      </Cell>
  ))

  return (
    <Row>
      {cells}
    </Row>
  )
}

export default CellRow
