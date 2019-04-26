import React from 'react'
import styled from 'styled-components'

import { Wrapper, Background, Picture } from '../'

const Name = styled.p`
  font-weight: 600;
  margin: 0.75em 0;
`
const Location = styled.p`
  margin: 0.25em 0;
`

const Tournament = props => {
  const { name, location, picture, background } = props
  return (
    <Wrapper>
      <Background background={background} />
      <Picture picture={picture} />
      <Name>{name}</Name>
      <Location>{location}</Location>
    </Wrapper>
  )
}

export default Tournament
