import styled from 'styled-components'

const Input = styled.input`
  height: 3em;
  width: 20em;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  padding-left: 0.5em;

  &:focus {
    outline: none !important;
    border: 1px solid #888888;
  }
`

export default Input
