import React, { Component } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import TeamMember from './teamMember/teamMember.js'
import { ReactComponent as GitHub } from '../assets/github.svg'

const PATH = './team/team.json'
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
          <ReactPlaceholder type='round' color={'#EEEEEE'}
            ready={person.github ? person.github.includes('https://github.com/') : false}
            style={{width: '2em', height: '2em'}}>
            <StyledLink href={person.github}><StyledGitHub /></StyledLink>
          </ReactPlaceholder>
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
