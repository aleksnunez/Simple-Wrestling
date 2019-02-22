import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Image = styled.div`
  position: absolute;

  border-radius: 100%;

  width: 16em;
  height: 16em;

  background: #00887A;
  background-image: none;
  background-size: cover;
  background-position: center;
`

export default class Portrait extends PureComponent {
  render() {
    const { path } = this.props

    return (
      <Image style={{backgroundImage: `url(${path})`}}/>
    )
  }
}
