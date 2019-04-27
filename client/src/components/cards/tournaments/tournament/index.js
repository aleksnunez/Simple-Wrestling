import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'
import Background from './background'
import Picture from './picture'

const Wrapper = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${props => props.theme.background.base};

  width: 15em;
  height: 17em;
  padding: 0.5em;
  margin: 2em;
`
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
