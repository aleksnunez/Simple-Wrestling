import React, { Component } from 'react'
import styled from 'styled-components'

import TeamMember from './teamMember/teamMember.js'

const PATH = './team/team.json'
const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`

export default class Team extends Component {
  constructor() {
    super()

    this.state = {
      team: []
    }
  }

  componentDidMount() {
    fetch(PATH)
    .then(res => res.json())
    .then(team => this.setState({team: team}))
    .catch(err => new Error(err))
  }

  render() {
    const { team } = this.state

    const people = team.map((person, i) => {
      return (
        <Row key={i}>
          github link
          <TeamMember
            name={person.name}
            portrait={person.portrait}
            description={person.description} />
        </Row>
      )
    })

    return (
      <Col>
        {people}
      </Col>
    )
  }
}
