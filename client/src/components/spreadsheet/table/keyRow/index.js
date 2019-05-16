import React from 'react'
import styled from 'styled-components'

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
  const { data } = props
  const cell = (key, i) => <Cell key={i} col={key} />

  const cells = Object.keys(data).map(cell)

  return <Row>{cells}</Row>
}

export default CellRow
