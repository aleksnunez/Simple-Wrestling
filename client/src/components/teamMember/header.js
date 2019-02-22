import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Name from './name.js'

const Wrapper = styled.div`
  position: absolute;

  width: 32em;
  height: 2em;
  left: 8em;

  background: #00887A;
`

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Name text={this.props.name} />
      </Wrapper>
    )
  }
}
