import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  background: #C4C4C4;
  border-radius: 100%;

  width: 6em;
  height: 6em;
  margin: 5em 5em 0 5em;
  z-index: 500;
`

const Picture = props => <Image src={props.picture} />

export default Picture
