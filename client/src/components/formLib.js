import styled from 'styled-components'
import { Font, Color } from 'styles/themes'

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
const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: ${Font.s};

  background: ${Color.p};
  border: none;
  border-radius: 0.2em;

  padding: 0.56em 2.9em;
  margin: 1.1em 0.1em;

  &:hover, &:focus {
    border: 0.2em solid ${Color.p};
    background: ${Font.s};
    color: ${Color.p};
    cursor: pointer;
    padding: 0.37em 2.7em;
    margin: 1.1em 0.1em;
  }
`

export { Col, InputWrapper, Input, Button }
