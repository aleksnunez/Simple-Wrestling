import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;

  width: 210px;
  height: 70px;
  left: 140px;
  top: 17.5px;

  background: #D3E3FC;
`

export default class Description extends PureComponent {
  render() {
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}
