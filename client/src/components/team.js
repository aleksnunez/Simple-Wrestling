import React, { Component } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import TeamMember from './teamMember/teamMember.js'
import { ReactComponent as GitHub } from '../assets/github.svg'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`
const StyledGitHub = styled(GitHub)`
  width: 2em;
  height: 2em;

  &:hover, &:active {

  }
`
const StyledLink = styled.a`
  border-radius: 100%;
`

export default class Team extends Component {
  constructor() {
    super()

    this.state = {
      team: [{}, {}, {}, {}, {}, {}]
    }
  }

  componentDidMount() {
    fetch('./team/team.json')
    .then(res => res.json())
    .then(team => this.setState({team: team}))
    .catch(err => new Error(err))
  }

  render() {
    const { team } = this.state

    const people = team.map((person, i) => {
      const SKELETON = {
        type: 'round',
        color: '#EEEEEE',
        ready: person.github ? person.github.includes('https://github.com/') : false,
        style: {width: '2em', height: '2em'}
      }

      return (
        <Row key={i}>
          <ReactPlaceholder {...SKELETON}>
            <StyledLink href={person.github} target='_blank'><StyledGitHub /></StyledLink>
          </ReactPlaceholder>
          <TeamMember {...person} />
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
