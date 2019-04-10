import styled from 'styled-components'

const InputWrapper = styled.div`
  padding: 1em 1em;
`
const Input = styled.input`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  height: 3em;
  width: 20em;
  padding-left: 0.5em;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  &:focus {
    outline: none !important;
    border: 1px solid #888888;
  }
`

export { InputWrapper, Input }
