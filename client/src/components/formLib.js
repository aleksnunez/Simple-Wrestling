import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20em;
  padding: 1em 1em;
`
const InputWrapper = styled.div`
  padding: 1em 1em;
`
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

export { Col, InputWrapper, Input }
