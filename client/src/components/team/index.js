import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TeamMember from './teamMember'

const Row = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`

const Team = (props) => {
  const [team, setTeam] = useState([{}])

  useEffect(() => {
    fetch('./team/team.json')
    .then(res => res.json())
    .then(team => setTeam(team))
    .catch(err => new Error(err))
  }, [props])

  const people = team.map((person, i) => {
    return (
      <Row key={i}>
        <TeamMember {...person} />
      </Row>
    )
  })

  return people
}

export default Team
