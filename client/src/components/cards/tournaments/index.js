import React from 'react'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import Text from 'components/text'
import Tournament from './tournament'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  margin: 2em 0;
`

const Tournaments = props => {
  const { tournaments, redirect } = props
  const { length } = tournaments
  const card = (tournament, i) =>
    <Tournament key={i} {...tournament} redirect={redirect} />

  const count = `Showing ${length} ${length === 1 ? 'result' : 'results'}`
  const results = <Text>{length ? count : 'No Results'}</Text>

  return (
    <Wrapper>
      {results}
      <Row>{safeMap(tournaments, card)}</Row>
    </Wrapper>
  )
}

export default Tournaments
