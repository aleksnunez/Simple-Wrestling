import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  text-align: center;

  color: #00887A;
`

export default class Header extends PureComponent {
  render() {
    return <Text>{this.props.text}</Text>
  }
}
