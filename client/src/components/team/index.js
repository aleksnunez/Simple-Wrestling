import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

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
    request({endpoint: './team/team.json', method: 'GET'})
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
