import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  position: absolute;

  width: 210px;
  height: 17.5px;
  left: 70px;
  top: 0px;

  margin: 0px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  text-align: center;

  color: #FFFFFF;
`

export default class Name extends PureComponent {
  render() {
    return <Text>{this.props.text}</Text>
  }
}
