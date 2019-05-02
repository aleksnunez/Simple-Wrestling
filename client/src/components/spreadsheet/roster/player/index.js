import React from 'react'
import styled from 'styled-components'

import { Cell } from 'components/spreadsheet'

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

const Player = props => {
  const { stats } = props

  const uppercaseFirst = string =>
    `${string.charAt(0).toUpperCase()}${string.slice(1)}`

  const mapStats = Object.entries(stats).map((stat, i) => (
      <Cell key={i}>
        <Key>{uppercaseFirst(stat[0])}</Key>
        <Value>{stat[1]}</Value>
      </Cell>
  ))

  return (
    <Row>
      {mapStats}
    </Row>
  )
}

export default Player
