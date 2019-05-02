import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  position: relative;

  background: #C4C4C4;
  border-radius: 100%;

  width: 6em;
  height: 6em;
  margin: 5em 5em 0 5em;
`

const Picture = props => {
  return (
    <Image src={props.picture} />
  )
}

export default Picture
