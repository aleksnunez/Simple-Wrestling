import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Header from './header.js'
import Portrait from './portrait.js'
import Description from './description.js'

const Wrapper = styled.section`
  position: relative;

  width: 490px;
  height: 140px;

  margin: 10px;
`

export default class TeamMember extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Portrait />
        <Description />
      </Wrapper>
    )
  }
}
