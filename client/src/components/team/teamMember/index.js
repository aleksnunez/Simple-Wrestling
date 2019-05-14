import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Portrait from './portrait'
import Description from './description'
import Social from './social'

const Wrapper = styled.div`
  position: relative;

  width: 85vw;
  max-width: 40em;
  height: 16em;
  margin: 10% 2%;
`

const TeamMember = (props) => {
  const { github, name, description, portrait } = props

  return (
    <Wrapper>
      <Social github={github} />
      <Header name={name} />
      <Portrait path={portrait} />
      <Description path={description} />
    </Wrapper>
  )
}

export default TeamMember
