import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './header.js'
import Portrait from './portrait.js'
import Description from './description.js'

const Wrapper = styled.section`
  position: relative;

  width: 40em;
  height: 16em;

  margin: 3em 1em;
`

export default class TeamMember extends Component {
  render() {
    const { name, description, portrait } = this.props

    return (
      <Wrapper>
        <Header name={name} />
        <Portrait path={portrait} />
        <Description path={description} />
      </Wrapper>
    )
  }
}