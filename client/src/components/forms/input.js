import styled from 'styled-components'

const InputWrapper = styled.div`
  padding: 1em 0;
  width: 100%;
`
const Input = styled.input`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  height: 3em;
  width: 100%;
  padding-left: 2.5%;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  &:focus {
    outline: none !important;
    border: 1px solid #888888;
  }
`

export { InputWrapper, Input }
