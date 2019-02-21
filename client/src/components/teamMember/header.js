import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Name from './name.js'

const Wrapper = styled.div`
  position: absolute;

  width: 280px;
  height: 17px;
  left: 70px;
  top: 00px;

  background: #00887A;
`

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Name text='Michael Swanson' />
      </Wrapper>
    )
  }
}
