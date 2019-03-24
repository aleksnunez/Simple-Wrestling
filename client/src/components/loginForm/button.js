import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: #fff;

  background: #00887A;
  border: none;
  border-radius: 0.1em;

  padding: 0.56em 2.9em;
  margin: 1.1em 0.1em;

  &:hover, &:focus {
    background: #00AB99;
    cursor: pointer;
    padding: 0.66em 3em;
    margin: 1em 0;
  }

  &:focus {
    padding: 0.56em 2.9em;
    margin: 1.1em 0.1em;
  }
`

const Button = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Button
