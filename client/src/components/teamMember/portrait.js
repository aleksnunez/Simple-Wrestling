import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;

  border-radius: 100%;

  width: 140px;
  height: 140px;
  left: 0px;
  top: 0px;

  background: #C4C4C4;
`

export default class Portrait extends PureComponent {
  render() {
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}
