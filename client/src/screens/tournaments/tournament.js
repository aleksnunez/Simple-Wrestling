import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import randomImg from 'util/randomImg'
import Header from 'components/header'
import Text from 'components/text'
import Button from 'components/button'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 12em;
  height: 12em;
  margin: 2em;
`
const StyledButton = styled(Button)`
  padding: 1em 2em;
`

const Tournament = ({ match }) => {
  const [tournament, setTournament] = useState({})

  useEffect(() => {
    const { tournament } = match.params
    request({
      endpoint: `/api/tournaments/${tournament}`,
      method: 'GET'
    })
    .then(res => setTournament(res))
    .catch(err => new Error(err))
  }, [match.parmas])

  console.log(tournament)

  return (
    <Wrapper>
      <Header text={tournament.tournament_name} />
      <Text>{tournament.location}</Text>
      <Image
        src={tournament.picture ? tournament.picture : randomImg(2000, 1500)} />
      <StyledButton>Register</StyledButton>
    </Wrapper>
  )
}

export default Tournament
