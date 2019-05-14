import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

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

`
const StyledButton = styled(Button)`
  padding: 1em 2em;
  margin: 2em;
`

const Tournament = props => {
  const [tournament, setTournament] = useState({})

  useEffect(() => {
    const { tournament } = props.match.params
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Tournament',
      method: 'GET'
    })
    .then(res => setTournament(res))
    .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text={tournament.name} />
      <Text>{tournament.location}</Text>
      <Image src={tournament.picture} />
      <StyledButton>Register</StyledButton>
    </Wrapper>
  )
}

export default Tournament
