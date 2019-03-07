import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  position: absolute;

  width: 24em;
  height: 2em;
  left: 8em;

  margin: 0.5em 0 0;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1em;
  text-align: center;

  color: #FFFFFF;
`

export default class Name extends PureComponent {
  render() {
    return <Text>{this.props.text}</Text>
  }
}
