import React, { Component } from 'react'
import styled from 'styled-components'

import TeamMember from './teamMember/teamMember.js'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export default class Team extends Component {
  render() {
    return (
      <Row>
        <TeamMember top={true} />
        <TeamMember top={true} />
        <TeamMember top={true} />
      </Row>
    )
  }
}
