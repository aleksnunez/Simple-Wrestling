import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Portrait from './portrait'
import Description from './description'
import Social from './social'

const Wrapper = styled.section`
  position: relative;

  width: 40em;
  height: 16em;

  margin: 3em;
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
